const gulp = require('gulp'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin');

gulp.task('pug-compile', function buildHTML() {
    return gulp.src('./auto/**/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(rename('./index.html'))
        .pipe(gulp.dest('./auto/'))
});

gulp.task('imgmin', () =>
	gulp.src('auto/src/*')
		.pipe(imagemin())
		.pipe(gulp.dest('auto/img'))
);