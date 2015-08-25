/**
 * Created by elnara.kozlitina on 8/24/15.
 */
var  babel = require('gulp-babel');
var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('default', function () {
  return gulp.src('js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
