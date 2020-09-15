const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const sourcemaps = require('gulp-sourcemaps');

const clean = require('gulp-clean');
const isProd = process.env.NODE_ENV === 'prod';


function css() {
    return gulp.src('assets/styles/main.scss')
        .pipe(gulpIf(!isProd, sourcemaps.init()))
        .pipe(sass({
            includePaths: ['node_modules']
        }).on('error', sass.logError))
        .pipe(gulpIf(!isProd, sourcemaps.write()))
        .pipe(gulpIf(isProd, cssmin()))
        .pipe(gulp.dest('dist/styles/'));
}


function js() {
    return gulp.src('assets/scripts/*.js')
        .pipe(jsImport({
            hideConsole: true
        }))
        .pipe(concat('main.js'))
        .pipe(gulpIf(isProd, uglify()))
        .pipe(gulp.dest('dist/scripts'));
}

function img() {
    return gulp.src('assets/images/*')
        .pipe(gulpIf(isProd, imagemin()))
        .pipe(gulp.dest('dist/images/'));
}

function serve() {
    browserSync.init({
        open: true,
        //server: 'http://localhost:3001'
    });
}

function browserSyncReload(done) {
    browserSync.reload();
    done();
}


function watchFiles() {
    gulp.watch('assets/**/*.scss', gulp.series(css, browserSyncReload));
    gulp.watch('assets/**/*.js', gulp.series(js, browserSyncReload));
    gulp.watch('assets/images/**/*.*', gulp.series(img));

    return;
}

function del() {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
}

exports.css = css;

exports.js = js;
exports.serve = gulp.parallel( css, js, img, watchFiles, serve);
exports.default = gulp.series(del, css, js, img);