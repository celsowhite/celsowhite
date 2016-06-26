/*=== Gulp Plugins ===*/

var gulp         = require('gulp');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano      = require('gulp-cssnano');
var rename       = require('gulp-rename');
var watch        = require('gulp-watch');
var minify       = require('gulp-minify');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');

/*=== Sass -> Prefix -> Minify ===*/

gulp.task('styles', function () {

    gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(cssnano())
    .pipe(rename( {suffix: '.min'} ))
    .pipe(gulp.dest('./css'))

});

/*=== Javascript Minify ===*/

gulp.task('js-minify', function(){

	gulp.src('./js/main.js')
	.pipe(minify({ 
		ext: { min:'.min.js'}
	}))
	.pipe(gulp.dest('./js'))

});

/*=== Watch Styles and Scripts ===*/

gulp.task('watch', function() {

  	gulp.watch('./scss/**/*.scss', ['styles']);

  	gulp.watch('./js/scripts.js', ['js-minify']);

});

/*=== Default Gulp task run watch ===*/

gulp.task('default', ['watch']);