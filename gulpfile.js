var gulp = require('gulp'),
    gutil = require('gulp-util'),
    haml = require('gulp-haml'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee');

var project = ['movie_ticket','p2','p3'];

gulp.task('haml', function () {
  for(i=0; i<project.length; i++){
    gulp.src('./'+project[i]+'/src/haml/**/*.haml')
      .pipe(haml())
      .pipe(gulp.dest('./'+project[i]+'/dist/html'));
  }
});

gulp.task('sass', function () {
  for(i=0; i<project.length; i++){
    gulp.src('./'+project[i]+'/src/scss/**/*.scss/')
      .pipe(sass())
      .pipe(gulp.dest('./'+project[i]+'/dist/css'));
  }
});

gulp.task('coffee', function() {
  for(i=0; i<project.length; i++){
    gulp.src('./'+project[i]+'/src/coffee/**/*.coffee')
      .pipe(coffee({bare: true}).on('error', gutil.log))
      .pipe(gulp.dest('./'+project[i]+'/dist/js'))
  }
});

gulp.task('default', function() {
  gulp.run('haml','sass','coffee')
});

gulp.task('watch', function() {

  for(i=0; i<project.length; i++){
    gulp.watch('./'+project[i]+'/src/scss/**/*.scss', ['sass']);
    gulp.watch('./'+project[i]+'/src/haml/**/*.haml', ['haml']);
    gulp.watch('./'+project[i]+'/src/coffee/**/*.coffee',['coffee'])
  }
});
