// -----------------------------------------------------------------------------
// we can create a default task, ran by using $ gulp, to run all three tasks we
// have created:
// -----------------------------------------------------------------------------
gulp.task('default', [ 'clean' ], function() {
  gulp.start('styles', 'images', 'fonts');
});
// -----------------------------------------------------------------------------
