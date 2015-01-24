// -----------------------------------------------------------------------------
// include gulp and additional plugins.
// -----------------------------------------------------------------------------
gulp    = require('gulp'),
$       = require('gulp-load-plugins')({ camelize: true }),
_       = $.loadUtils([ 'log', 'colors', 'env', 'noop' ]);
_bower  = require('main-bower-files');
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// project configuration.
// -----------------------------------------------------------------------------
basePaths = {
  src:  './src',
  dest: './public/assets',
  root: '/'
};

paths = {
  images: {
    src:    basePaths.src + '/images',
    dest:   basePaths.dest + '/images'
  },
  styles: {
    src:    basePaths.src + '/styles',
    dest:   basePaths.dest + '/css'
  },
  scripts: {
    src:    basePaths.src + '/scripts',
    dest:   basePaths.dest + '/js'
  },
  fonts: {
    src:    basePaths.src + '/fonts',
    dest:   basePaths.dest + '/fonts'
  }
// sprites: {
//   src: basePaths.src + 'sprite/*'
// }
};

appFiles = {
  styles: [
    paths.styles.src + '/**/*.sass'
  ],
  scripts: [
    paths.scripts.src + '/**/*.js'
  ],
  images: [
    paths.images.src + '/**/*.{png,jpg,jpeg,gif,svg}'
  ],
  fonts: [
    paths.fonts.src + '/**/*.{woff2,woff,svg,eot,ttf,otf}'
  ]
};

// default building process is designed for production
isProduction = true;
sassStyle = 'compressed';
sourceMap = false;

// run `gulp --dev`
if (_.env.dev === true) {
  sassStyle = 'expanded';
  sourceMap = true;
  isProduction = false;
}

// whenever a file changes, this outputs what file it was and what happened to it
changeEvent = function(event) {
  _.log('File', _.colors.cyan(event.path.replace(new RegExp('/.*(?=/' + basePaths.src + ')/'), '')), 'was', _.colors.magenta(event.type));
};

// log environment
console.log('\nBuilding for', _.colors.magenta(isProduction ? 'production' : 'development'), '...\n');
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// task handler.
// -----------------------------------------------------------------------------
fs = require('fs');
tasks = fs.readdirSync('./gulp/tasks/');
tasks.forEach(function(task) {
  require('./tasks/' + task);
});
// -----------------------------------------------------------------------------
