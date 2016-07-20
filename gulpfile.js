var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');
  less = require('gulp-less')
  DEST = 'dist';
  
gulp.task('js', function() {
  gulp.src('builds/development/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
});

gulp.task('css', function() {
  gulp.src('builds/development/css/*.css')
});

gulp.task('less', function() {
  gulp.src('builds/development/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('builds/development/css'))
});

gulp.task('watch', function() {
  gulp.watch('builds/development/js/**/*', ['js']);
  gulp.watch('builds/development/css/*.css', ['css']);
  gulp.watch('builds/development/less/*.less', ['less']);
  gulp.watch(['builds/development/*.html',
    'builds/development/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'less', 'webserver']);
