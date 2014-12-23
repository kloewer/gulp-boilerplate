// -----------------------------------------------------------------------------
// this will take any source images and compresses it.
// -----------------------------------------------------------------------------
gulp.task('images', function() {

  // add the newer pipe to pass through newer images only
  return gulp.src(appFiles.images)
    .pipe($.newer(paths.images.dest))
    .pipe($.imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
    .pipe(gulp.dest(paths.images.dest))
    .pipe($.size({ title: 'images' }));
});
// -----------------------------------------------------------------------------
