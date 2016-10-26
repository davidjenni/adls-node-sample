"use strict";
var gulp = require('gulp');
var srcmap = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('./tsconfig.json');

gulp.task('build', function(done) {
    return gulp.src([
        'src/**.ts',
        './typings/index.d.ts'
        ])
        .pipe(srcmap.init())
        .pipe(tsProject())
        // .pipe(srcmap.write('.', { sourceRoot: '../src' }))
        .pipe(srcmap.write('.', { sourceRoot: '.' }))
        // .pipe(srcmap.write('./'))
        // .pipe(srcmap.write())
        .pipe(gulp.dest('build'));
});
