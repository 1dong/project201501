class Circle_animate
  r = $(window).height()/4+20
  @current_num = 0
  red_bag_num = 0
  constructor: (@aLi) ->
  animation: (origin)->
    for i in [origin..origin+3]
      n = i%4
      x = r*Math.cos((-60+40*n)*(Math.PI/180))+"px"
      y = -r*Math.sin((-60+40*n)*(Math.PI/180))+"px"
      @aLi.eq(i).css({
        'opacity': 1,
        'transition-delay':""+(200*n)+"ms",
        'transform':"translate("+x+","+y+")",
        '-webkit-transition-delay':""+(200*n)+"ms",
        '-webkit-transform':"translate("+x+","+y+")"
      })
      # @aLi.eq(i).css({
      #   'opacity': 1,
      #   'left': x,
      #   'top': y
      # })
      #$("body").html(@aLi.eq(i).attr("style"))
    Circle_animate.current_num+=4
    #console.log(Circle_animate.current_num)
  start: ->
    @animation(0)
  next: ->
    if Circle_animate.current_num >= @aLi.length
      Circle_animate.current_num = 0
    #console.log(Circle_animate.current_num,@aLi.length)
    @animation(Circle_animate.current_num)




$(document).ready ->
  u = navigator.userAgent.toLowerCase()
  if u.indexOf("iphone") >= 0
    wHeight = $(window).height()-65
  else
    wHeight = $(window).height()

  $('body').css('min-height',wHeight)
  $('.container').css('min-height',wHeight)
  #$('.bag_num span').text($(document).height())
  $('.main').css({'margin-top':-wHeight/4})
  $('.circle').css('width',wHeight/2)
  $('.click_div').click ->
    if $(this).parent().find('ul').css('display') == 'block'
      $(this).parent().find('ul').slideUp()
    else
      $(this).parent().find('ul').slideDown()
    false

  $('button.minus').click ->
    n = parseInt($(this).parent().find("input").val())
    if n>0
      $(this).parent().find("input").attr('value',--n)
      $('.use_num').text(10*n + "个")

  $('button.plus').click ->
    n = parseInt($(this).parent().find("input").val())
    $(this).parent().find("input").attr('value',++n)
    $('.use_num').text(10*n + "个")

  $('.select_header_wrap li').click ->
    $('.header_pic_wrap img').attr('src',$(this).find('img').attr('src'))


  $('#exchange_button').click ->
    $('#popups').css({'display':'table','height':$(document).height()})
  $('.pop_close').click ->
    $('#popups').removeAttr('style')

window.onload = ->
  aa = new Circle_animate($('#red_bag_list li'))
  aa.start()
  #$(".bar").html($('#red_bag_list li').eq(0).attr("style"))
  $(".change_button").click ->
    #$(".bar").html($('#red_bag_list li').eq(0).attr("style"))
    $('#red_bag_list li').removeAttr('style')
    setTimeout( ->
      aa.next()
    ,600)
    false


  options = {
    useEasing : true,
    useGrouping : false,
    separator : ',',
    decimal : '.'
    prefix : ''
    suffix : ''
  }

  if $("#count_animate")
    count_animate = new countUp("count_animate", 0, 2117, 0, 2.5, options)
    count_animate.start ->
      decimal_animate = new countUp("decimal_animate", 0, 17, 0, 2.5, options)
      decimal_animate.start()
