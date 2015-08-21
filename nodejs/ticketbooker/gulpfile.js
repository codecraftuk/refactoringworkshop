'use strict';
var lazyReq = require('lazy-req')(require);
var path = lazyReq('path');
var gulp = require('gulp');
var eslint = lazyReq('gulp-eslint');
var excludeGitignore = lazyReq('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = lazyReq('gulp-istanbul');
var nsp = lazyReq('gulp-nsp');
var plumber = require('gulp-plumber');
var coveralls = lazyReq('gulp-coveralls');

gulp.task('static', function () {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore()())
    .pipe(eslint()())
    .pipe(eslint().format())
    .pipe(eslint().failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp()('package.json', cb);
});

gulp.task('pre-test', function () {
  return gulp.src('lib/**/*.js')
    .pipe(istanbul()({includeUntested: true}))
    .pipe(istanbul().hookRequire());
});

gulp.task('testnocover', function (cb) {
  var mochaErr;
  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .on('end', function () {
      cb(mochaErr);
    });
});


gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul().writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('coveralls', ['test'], function () {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path().join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls()());
});

gulp.task('prepublish', ['nsp']);
gulp.task('default', ['static', 'test', 'coveralls']);
