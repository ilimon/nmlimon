let gulp            = require('gulp'),
    sass            = require('gulp-ruby-sass'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    csscomb         = require('gulp-csscomb'),
    rename          = require("gulp-rename"),
    csso            = require('gulp-csso');

gulp.task('prefix-comb', () =>
    gulp.src('./css/*.scss')
    .pipe(autoprefixer({browsers: ['last 2 versions'],cascade: false}))
    .pipe(csscomb())
    .pipe(gulp.dest('./'))
);

gulp.task('minify', function () {
    return gulp.src('./css/style.css')
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.init())
        .pipe(csso())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});