var gulp = require('gulp');
var stylus = require('gulp-stylus');
var ks = require('kouto-swiss');
var shell = require('gulp-shell');
var mincss = require('gulp-minify-css');

gulp.task('stylus', function() {
	gulp.src('./app/style/main.styl')
		.pipe(stylus({
			compress: true,
			use: [ks()]
		}))
		.pipe(gulp.dest('./app/css/'));
});

gulp.task('mincss', function() {
	gulp.src('./app/style/**/*.css')
		.pipe(mincss())
		.pipe(gulp.dest('./app/css/'));
});

// TODO add coffee and minjs

// TODO add jade?

gulp.task('compile', ['stylus', 'mincss']);

gulp.task('watch', function() {
	gulp.watch('./app/style/**/*.styl', ['stylus']);
	gulp.watch('./app/style/**/*.css', ['mincss']);
});

gulp.task('serve', shell.task(['bash serve.sh']));

gulp.task('default', ['compile', 'watch', 'serve']);
