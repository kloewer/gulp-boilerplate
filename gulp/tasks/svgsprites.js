svgSprite               = require('gulp-svg-sprite');

config                  = {
    shape               : {
        dimension       : {         // Set maximum dimensions
            maxWidth    : 32,
            maxHeight   : 32
        },
        spacing         : {         // Add padding
            padding     : 10
        }
    },
    mode                : {
        view            : {         // Activate the «view» mode
            bust        : false,
            render      : {
                scss    : false      // Activate Sass output (with default options)
            }
        },
        symbol          : true      // Activate the «symbol» mode
    }
};

gulp.src(build.files.svgsprites.map(function (file) { return paths.svgsprites.src + '/' + file; }))
    .pipe(svgSprite( config ))
    .pipe(gulp.dest(paths.svgsprites.dest))
