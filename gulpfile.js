const browserSync = require("browser-sync").create()
const gulp = require("gulp")
const uglify = require("gulp-uglify")
const imagemin = require("gulp-imagemin")
const del = require('del')
// const sass = require("gulp")
// const concat = require("gulp")

function copyHTML() {
  return gulp.src('./index.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream())
}

function copyCSS() {
  return gulp.src('./src/styles/*.css')
  .pipe(gulp.dest('dist/src/styles'))
  .pipe(browserSync.stream())
}

function uglifyJS() {
  // place code for your default task here
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/src/scripts'))
    .pipe(browserSync.stream())
}

function image() {
  // place code for your default task here
  return gulp.src('./public/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/public'))
    .pipe(browserSync.stream())
}

const clean = () => del(['dist']) 

function watch() {
  browserSync.init({
    server:{
      baseDir: 'dist/'
    }
  });
  gulp.watch('./index.html', copyHTML)
  gulp.watch('./src/styles/*.css', copyCSS)
  gulp.watch('./src/scripts/*.js', uglifyJS)
  gulp.watch('./public/*', image)
}

// const dev = () => gulp.series(clean, copyHTML, copyCSS, uglify, image, watch);

exports.copyHTML = copyHTML
exports.copyCSS = copyCSS
exports.uglify = uglifyJS
exports.image = image
exports.clean = clean
exports.watch = watch
exports.default = gulp.series(clean, copyHTML, copyCSS, uglifyJS, image, watch);

