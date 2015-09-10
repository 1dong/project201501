var Circle_animate;

Circle_animate = (function() {
  var r, red_bag_num;

  r = $(window).height() / 4 + 20;

  Circle_animate.current_num = 0;

  red_bag_num = 0;

  function Circle_animate(aLi) {
    this.aLi = aLi;
  }

  Circle_animate.prototype.animation = function(origin) {
    var i, n, x, y, _i, _ref;
    for (i = _i = origin, _ref = origin + 3; origin <= _ref ? _i <= _ref : _i >= _ref; i = origin <= _ref ? ++_i : --_i) {
      n = i % 4;
      x = r * Math.cos((-60 + 40 * n) * (Math.PI / 180)) + "px";
      y = -r * Math.sin((-60 + 40 * n) * (Math.PI / 180)) + "px";
      this.aLi.eq(i).css({
        'opacity': 1,
        'transition-delay': "" + (200 * n) + "ms",
        'transform': "translate(" + x + "," + y + ")",
        '-webkit-transition-delay': "" + (200 * n) + "ms",
        '-webkit-transform': "translate(" + x + "," + y + ")"
      });
    }
    return Circle_animate.current_num += 4;
  };

  Circle_animate.prototype.start = function() {
    return this.animation(0);
  };

  Circle_animate.prototype.next = function() {
    if (Circle_animate.current_num >= this.aLi.length) {
      Circle_animate.current_num = 0;
    }
    return this.animation(Circle_animate.current_num);
  };

  return Circle_animate;

})();

$(document).ready(function() {
  var u, wHeight;
  u = navigator.userAgent.toLowerCase();
  if (u.indexOf("iphone") >= 0) {
    wHeight = $(window).height() - 65;
  } else {
    wHeight = $(window).height();
  }
  $('body').css('min-height', wHeight);
  $('.container').css('min-height', wHeight);
  $('.main').css({
    'margin-top': -wHeight / 4
  });
  $('.circle').css('width', wHeight / 2);
  $('.click_div').click(function() {
    if ($(this).parent().find('ul').css('display') === 'block') {
      $(this).parent().find('ul').slideUp();
    } else {
      $(this).parent().find('ul').slideDown();
    }
    return false;
  });
  $('button.minus').click(function() {
    var n;
    n = parseInt($(this).parent().find("input").val());
    if (n > 0) {
      $(this).parent().find("input").attr('value', --n);
      return $('.use_num').text(10 * n + "个");
    }
  });
  $('button.plus').click(function() {
    var n;
    n = parseInt($(this).parent().find("input").val());
    $(this).parent().find("input").attr('value', ++n);
    return $('.use_num').text(10 * n + "个");
  });
  $('.select_header_wrap li').click(function() {
    return $('.header_pic_wrap img').attr('src', $(this).find('img').attr('src'));
  });
  $('#exchange_button').click(function() {
    return $('#popups').css({
      'display': 'table',
      'height': $(document).height()
    });
  });
  return $('.pop_close').click(function() {
    return $('#popups').removeAttr('style');
  });
});

window.onload = function() {
  var aa, count_animate, options;
  aa = new Circle_animate($('#red_bag_list li'));
  aa.start();
  $(".change_button").click(function() {
    $('#red_bag_list li').removeAttr('style');
    setTimeout(function() {
      return aa.next();
    }, 600);
    return false;
  });
  options = {
    useEasing: true,
    useGrouping: false,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: ''
  };
  if ($("#count_animate")) {
    count_animate = new countUp("count_animate", 0, 2117, 0, 2.5, options);
    return count_animate.start(function() {
      var decimal_animate;
      decimal_animate = new countUp("decimal_animate", 0, 17, 0, 2.5, options);
      return decimal_animate.start();
    });
  }
};
