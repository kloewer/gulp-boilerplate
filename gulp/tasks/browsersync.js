/**
 * BrowserSync makes your tweaking and testing faster by synchronising file
 * changes and interactions across multiple devices. It’s wicked-fast and
 * totally free.
 *
 * @see http://www.browsersync.io/
 */
gulp.task('browser-sync', function() {
    browserSync({
        proxy: build.browserSync && build.browserSync.proxy ? build.browserSync.proxy : 'localhost'
    });

    if ('watchForChange' in build.browserSync) {
        $.watch(build.browserSync.watchForChange, function() {
            browserSync.reload();
        });
    }
});
