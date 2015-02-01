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
  var vendorStyles = gulp.src(_bower()).pipe($.filter('**/*.css'));

  // handle app styles
  var appStyles = gulp
    .src(appFiles.styles)
    .pipe($.plumber({ errorHandler: function (error) { console.log(error); }}))
    .pipe($.sass({ indentedSyntax: true, outputStyle: 'compressed' }))
    .pipe($.autoprefixer('last 2 version', 'ie 9', 'ios 6', 'android 4')); // see: https://github.com/ai/autoprefixer

  // final polishing to all styles
  var styles = merge(vendorStyles, appStyles)
    .pipe($.concat('styles.css'))
    .pipe(isProduction ? $.combineMediaQueries({ log: true }) : _.noop())
    .pipe(isProduction ? $.minifyCss({ keepSpecialComments: 1, advanced: false }) : _.noop())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe($.size({ title: 'styles:app' }));
});
// -----------------------------------------------------------------------------
