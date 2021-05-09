'use strict'

let {src, task, series, dest, watch} = require('gulp');
let sass = require('gulp-sass');
let concat = require('gulp-concat');

task('scripts', function() {
  return src('./src/js/*.js')
      .pipe(concat('all.js'))
      .pipe(dest('./'));
});

task('scripts:watch', function () {

  watch('./src/js/*.js',series('scripts'));

});

task('sass', function () {
  return src('./src/sass/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('./public/css'));
});

task('sass:watch', function () {

  watch('./src/sass/*.scss',series('sass'));

});

