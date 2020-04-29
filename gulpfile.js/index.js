var gulp = require('gulp');
const $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

var { options } = require('./options');

// production || develop
// # gulp --env production
console.log(options);

// develop
gulp.task("copyHTML", function(){
  return gulp
    .src("./source/**/*.html")
    .pipe(gulp.dest('./output/'))
    .pipe(browserSync.stream())
});

gulp.task('sass', function () {
  var plugins = [
    autoprefixer({
      // 原本 Autoprefixer 設置因新版將 browsers 改成 Browserslist
      Browserslist: ['last 3 version', '> 5%']
    })
  ];
  return gulp
    .src('./source/assets/scss/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'expanded', // expanded & nested
    }).on('error', $.sass.logError))
    // css 已編譯完成
    .pipe($.postcss(plugins))
    .pipe($.if(options.env === 'production', $.minifyCss()))
    .pipe($.if(options.env !== 'production', $.sourcemaps.write('.')))
    .pipe(gulp.dest('./output/assets/css'))
    .pipe(
      browserSync.reload({
        stream: true
      })
    );
});

gulp.task('clean', function () {
  return gulp
    .src(['./.tmp', './output'], {read: false, allowEmpty: true})
    .pipe($.clean());
});

gulp.task("imageMin", function(){
  return gulp
    .src("./source/assets/img/*")
    .pipe($.if(options.env === "production", $.imagemin()))
    .pipe(gulp.dest('./output/assets/img'))
});

gulp.task('deploy', function() {
  return gulp
    .src('./output/**/*')
    .pipe($.ghPages());
});

gulp.task('build', 
  gulp.series(
    'clean',
    gulp.parallel(
      'copyHTML', 
      'sass', 
      'imageMin'
    )
  )
);

gulp.task('default', 
  gulp.series(
    'clean',
    gulp.parallel(
      'copyHTML', 
      'sass', 
      'imageMin'
    ),
    function(done){

      browserSync.init({
        server: { baseDir: "./output" },
        reloadDebounce: 2000, // 此段加入以後，重新整理的間隔必須超過 2 秒，可以依據需求調整使用

        /* 
          ? 指定開啟瀏覽器
          * MacOS 如果有裝 Parallels Desktop.app 要注意瀏覽器名稱，最直接方式就是指定路徑與程式名。
        */
        // browser: "/Applications/Firefox Developer Edition.app"  // MacOS [ Firefox Dev 版本 ] 
        browser: "/Applications/Google Chrome.app"  // MacOS [ google chrome ] 
      });

      gulp.watch('./source/assets/scss/**/*.scss', gulp.series('sass'));
      gulp.watch('./source/**/*.html', gulp.series('copyHTML'));
      done();
    }
  )
);
