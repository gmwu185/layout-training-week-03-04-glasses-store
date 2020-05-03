var gulp = require('gulp');
var mainBowerFiles = require("main-bower-files");
var $ = require('gulp-load-plugins')();
var { options } = require('./options');


var bowerTask = function (cd){
  gulp
    .src(mainBowerFiles())
    .pipe(gulp.dest('./.tmp/vendors'))
    // .pipe($.uglify());
  cd();
};

var vendorJs = function(cd){
  gulp
    .src([
      //NPM
      
      // bower 
      './bower_components/jquery/dist/jquery.js',
            
      // 自定
      '../.tmp/vendors/**/**.js',
    ])
    .pipe($.order(['jquery.js']))
    .pipe($.concat('vendors.js'))
    .pipe($.if(options.env === 'production', $.uglify()))
    // .pipe($.uglify())
    .pipe(gulp.dest('./output/assets/js'));
  cd();
};

// 注意：這是 Node.js 的 module.exports
// 並非 ES6 的方法
exports.bowerTask = bowerTask;
exports.vendorJs = vendorJs;