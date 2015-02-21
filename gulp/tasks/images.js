/**
 * This task handles all font files.
 */
gulp.task('images', function() {
    return gulp.src(bower(build.files.images).concat(build.files.images.map(function (file) { return paths.images.src + '/' + file; })))
        .pipe($.newer(paths.images.dest))
        .pipe($.imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
        .pipe(gulp.dest(paths.images.dest))
        .pipe($.size({ title: 'images done.' }))
        .pipe(browserSync.reload({ stream: true }));
});
