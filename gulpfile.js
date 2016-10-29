/*=== Gulp Plugins ===*/

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin       = require('gulp-cssmin');
var rename       = require('gulp-rename');
var watch        = require('gulp-watch');
var uglify       = require('gulp-uglify');
var gutil        = require('gulp-util');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');

/*=== Sass -> Prefix -> Minify ===*/

gulp.task('styles', function () {

    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
    .pipe(cssmin())
    .pipe(rename( {suffix: '.min'} ))
    .pipe(gulp.dest('./css'))

});

/*=== Javascript Minify ===*/

gulp.task('js-minify', function(){

	gulp.src('./js/main.js')
  .pipe(uglify().on('error', gutil.log))
  .pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./js'))

});

/*=== Image Optimization ===*/

gulp.task('imageoptimize', function() {

    gulp.src('./nonoptimizedimg/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      optimizationLevel: 6,
      use: [pngquant({quality: '65-80', speed: 2})]
    }))
    .pipe(gulp.dest('./img'))

});

/*=== Watch Styles and Scripts ===*/

gulp.task('watch', function() {

  	gulp.watch('./scss/**/*.scss', ['styles']);

  	gulp.watch('./js/main.js', ['js-minify']);

});

/*=== Default Gulp task run watch ===*/

gulp.task('default', ['watch']);