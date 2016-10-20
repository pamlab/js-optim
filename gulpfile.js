var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  return gulp.src('./input/*')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('./output'));
});