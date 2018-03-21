const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
    // Run eslint
    gulp.src(['es6/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
    // Code for Node
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});
