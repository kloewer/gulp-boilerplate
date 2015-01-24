// -----------------------------------------------------------------------------
// before deploying, it’s a good idea to clean out the destination folders and
// rebuild the files—just in case any have been removed from the source and are
// left hanging out in the destination folder:
// -----------------------------------------------------------------------------
gulp.task('clean', function() {
  return gulp
    .src([ paths.styles.dest, paths.scripts.dest, paths.images.dest, paths.fonts.dest ], { read: false })
    .pipe($.rimraf());
});
// -----------------------------------------------------------------------------
