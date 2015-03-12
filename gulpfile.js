/* Variables */
var gulp 				 = require('gulp'),
    notify 				 = require('gulp-notify'),
    livereload 		     = require('gulp-livereload'),
    connect              = require('gulp-connect'),
    historyApiFallback   = require('connect-history-api-fallback'),
    install              = require("gulp-install");

var paths = {
    scripts: [
        'assets/**/*',
        '*/**/*.html'
    ]
};

gulp.task('reload', function() {
    return gulp.src(paths.scripts)
        .pipe(connect.reload());
});

/* Install all dependencies */
gulp.task('install', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(install());
});

/* Init GulpServer */
gulp.task('default', function() {
    gulp.start('install', 'reload', 'watch', 'webserver');
});

/* Cambio de archivos */
gulp.task('watch', function() {
   	gulp.watch(paths.scripts, ['reload']);
});

/* LocalServer */
gulp.task('webserver', function() {
   	connect.server({
		root: './',
		hostname: '0.0.0.0',
		port: 9000,
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
   	});
});