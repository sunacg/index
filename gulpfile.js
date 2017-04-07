
var gulp = require('gulp');
var yasuo = require('gulp-uglify');
var rename = require('gulp-rename');
var annotate = require('gulp-ng-annotate');

gulp.task('start',function () {
    gulp.src('index/index.js')
        .pipe(annotate())
        .pipe(rename('app.js'))
        .pipe(yasuo())
        .pipe(gulp.dest('./'));
})
