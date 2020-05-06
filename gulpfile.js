const { src, dest, watch, series, parallel } = require('gulp');
const uglifyJS = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

//SCSS -> CSS
const sassFiles = [
                'assets/scss/global/global.scss',
                'assets/scss/activities/activities.scss',
                'assets/scss/blog/blog.scss',
                'assets/scss/home/home.scss',
                'assets/scss/news/news.scss',
                'assets/scss/publications/publications.scss'
                ]
function scssBuild() {
    return src(sassFiles).pipe(sourcemaps.init()).pipe(sass({outputStyle: 'compressed'})).pipe(sourcemaps.write('./maps/')).pipe(dest('assets/css/'));
}
exports.scss = series(scssBuild);


// JS minify
function globalJS(){
                    return  src('assets/js/src/global.js')
                            .pipe(sourcemaps.init())
                            .pipe(uglifyJS())
                            .pipe(sourcemaps.write('./maps/'))
                            .pipe(dest('assets/js/'));
                    }

function homeJS(){
                return  src('assets/js/src/front-page/*.js')
                        .pipe(concat('home.js'))
                        .pipe(sourcemaps.init())
                        .pipe(uglifyJS())
                        .pipe(sourcemaps.write('./maps/'))
                        .pipe(dest('assets/js/'));
                }

exports.js = series(globalJS, homeJS);

//Watch
exports.default = series(
    parallel(scssBuild,globalJS,homeJS),
    function(){watch(['assets/scss/**/*.scss','assets/js/src/**/*.js'], parallel(scssBuild,globalJS,homeJS))}
);