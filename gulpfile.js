var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('init', function() {
    browserSync.init({
        server: {
            baseDir: 'src',
            index: 'index.html'
        }
    });
});

gulp.task('reload', function() {
    browserSync.reload();
});

gulp.task('default', 'init', function() {
    gulp.watch('*.css', ['reload']);
    gulp.watch('*.js', ['reload']);
    gulp.watch('*.html', ['reload']);
});