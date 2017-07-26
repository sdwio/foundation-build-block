var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  '../normalize.scss/sass',
  '../foundation-sites/scss',
  '../motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('../../src/styles/screen.scss') // ../src/assets/scss/app.scss
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('../../dist/styles'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch('../../src/styles/**/*.scss', ['sass']); // **/*.scss
});
