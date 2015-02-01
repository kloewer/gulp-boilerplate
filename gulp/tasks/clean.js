// -----------------------------------------------------------------------------
// before deploying, it’s a good idea to clean out the destination folders and
// rebuild the files—just in case any have been removed from the source and are
// left hanging out in the destination folder:
// -----------------------------------------------------------------------------
var del = require('del');

gulp.task('clean', function() {
  del([ paths.styles.dest, paths.scripts.dest, paths.images.dest, paths.fonts.dest ]);
});
// -----------------------------------------------------------------------------
