/**
 * This task handles all JavaScript files. Loads all vendor scripts (e.g from a
 * package manager like Bower) and then all applications scripts. Once this is
 * done additional tasks will happen like concatenation, uglification and
 * several other optimizations for production use.
 *
 * If the flag '--dev' was given, some of those tasks are skipped.
 */
var amdo = require('amd-optimize');

gulp.task('scripts', function() {

    var vendor = gulp.src(bower(build.files.scripts))
        .pipe($.concat('plugins.js'))
        .pipe(isProduction ? $.uglify() : _.noop())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe($.size({ title: 'vendor scripts done.' }));

    var app = gulp.src(build.files.scripts.map(function (file) { return paths.scripts.src + '/' + file; }))
        // .pipe($.concat('app.js'))
        // .pipe(isProduction ? $.uglify() : _.noop())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe($.size({ title: 'app scripts done.' }))
        .pipe(browserSync.reload({ stream: true }));

    return merge(vendor, app);
});
