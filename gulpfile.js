var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: './forest/' // 服务的根目录
		},
		files: ['forest/**/*.css', 'forest/**/*.html', 'forest/**/*.js']
	});
});

gulp.task('default', ['browser-sync']);