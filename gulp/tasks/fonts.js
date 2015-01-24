// -----------------------------------------------------------------------------
// handle app and vendor fonts.
// -----------------------------------------------------------------------------
gulp.task('fonts', function() {

  // vendor & app fonts
  gulp
    .src(_bower().concat(appFiles.fonts))
    .pipe($.filter('**/*.{woff2,woff,svg,eot,ttf,otf}'))
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe($.size({ title: 'fonts:vendor and app' }));
});
// -----------------------------------------------------------------------------
