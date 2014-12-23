// -----------------------------------------------------------------------------
// library for dynamically adding sources to the stream.
// -----------------------------------------------------------------------------
merge = require('merge-stream');
// -----------------------------------------------------------------------------


// -----------------------------------------------------------------------------
// compile sass and minify it.
// -----------------------------------------------------------------------------
gulp.task('styles', function() {

  // handle vendor styles
  var vendorStyles = null;

  try {
    vendorStyles = gulp.src(_bower()).pipe($.filter('**/*.css'));
  }
  catch (error) {

  }

  // handle app styles
  var appStyles = gulp
    .src(appFiles.styles)
    .pipe($.plumber({ errorHandler: function (error) {}}))
    .pipe($.rubySass({
      style: sassStyle,
      // sourcemap: sourceMap,
      // sourcemapPath: basePaths.root + '/src/styles'
    }))
    .pipe($.autoprefixer('last 2 version', 'ie 9', 'ios 6', 'android 4')); // see: https://github.com/ai/autoprefixer

  // final polishing to all styles
  return (vendorStyles !== null ? merge(vendorStyles, appStyles) : appStyles)
    // .pipe($.sourcemaps.init())
    .pipe($.concat('styles.css'))
    .pipe(isProduction ? $.combineMediaQueries({ log: true }) : _.noop())
    .pipe(isProduction ? $.minifyCss({ keepSpecialComments: 1 }) : _.noop())
    // .pipe(isProduction ? _.noop() : $.sourcemaps.write('.', { includeContent: false, sourceRoot: basePaths.root }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe($.size({ title: 'styles:app' }));
});
// -----------------------------------------------------------------------------
