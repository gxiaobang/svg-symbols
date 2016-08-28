/**
 * svg合并
 */

var gulp = require('gulp'),
		svgSymbols = require('gulp-svg-symbols'),
		connect = require('gulp-connect');

// 启动服务器
gulp.task('webserver', () => {
	connect.server();
});

// svg合并
gulp.task('sprite', () => {
	gulp.src('./assets/svg/**/*.svg')
		.pipe(svgSymbols())
		.pipe(gulp.dest('./build/svg'));
});