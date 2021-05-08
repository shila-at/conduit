'use strict'

var {src, task, series, dest, watch} = require('gulp');
var sass = require('gulp-sass');


task('sass', function () {
  return src('./src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./public/css'));
});

task('sass:watch', function () {

  watch('./src/sass/*.scss',series('sass'));

});

