// -----------------------------------------------------------------------------
// handle app and vendor fonts.
// -----------------------------------------------------------------------------
gulp.task('fonts', function() {

  // vendor & app fonts
  var vendorFonts = null;

  try {
    vendorFonts = _bower();
  }
  catch (error) {

  }

  return gulp
    .src(vendorFonts !== null ? vendorFonts.concat(appFiles.fonts) : appFiles.fonts)
    .pipe($.filter('**/*.{eot,svg,ttf,woff,otf}'))
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe($.size({ title: 'fonts:vendor and app' }));
});
// -----------------------------------------------------------------------------
