/* jshint node: true */

const
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('server', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('css', function() {
    return gulp.src('./styles/*.css')
        .pipe(reload({
            stream: true,
            match: '**/*.css'
        }));
});

gulp.task('js', function() {
    return gulp.src('./js/*.js')
        .on('end', reload);
});

gulp.task('html', function() {
    return gulp.src('./*.html')
        .on('end', reload);
});

gulp.task('watch', function() {
    gulp.watch('./styles/*.css', ['css']);
    gulp.watch('./js/*.js', ['js']);
    gulp.watch('./*.html', ['html']);
});

gulp.task('default', ['css', 'js', 'watch', 'server', 'html']);