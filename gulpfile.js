"use strict";

const gulp = require("gulp"),
  rigger = require("gulp-file-include"),
  uglify = require("gulp-uglify"),
  prefixer = require("gulp-autoprefixer"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  cssmin = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  imagemin = require("gulp-imagemin"),
  pngquant = require("imagemin-pngquant"),
  changed = require("gulp-changed"),
  gulpif = require("gulp-if"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload,
  cache = require("gulp-cache");

const path = {
  build: {
    html: "dist/",
    js: "dist/js/",
    css: "dist/css/",
    img: "dist/img/",
  },
  src: {
    html: "src/*.html",
    js: "src/js/app.js",
    style: "src/style/style.{scss,sass}",
    img: "src/img/**/*.{png,jpg,jpeg,gif,svg,webp}",
  },
  watch: {
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    style: "src/style/**/**/*.{scss,sass,css}",
    img: "src/img/**/*.{png,jpg,jpeg,gif,svg}",
  },
  clean: "./dist",
};

// Server
const config = {
  server: {
    baseDir: "./dist",
  },
  // tunnel: true,
  host: "localhost",
  port: 9000,
  // logPrefix: "Frontend.Gulp"
};

// Html
gulp.task("html", function () {
  return gulp
    .src(path.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({ stream: true }));
});

// Style
gulp.task("style", function () {
  return gulp
    .src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(
      sass().on("error", function (error) {
        console.log(error);
      })
    )
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({ stream: true }));
});

// Javascript
gulp.task("js", function () {
  return gulp
    .src(path.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({ stream: true }));
});

// Images
gulp.task("image", function () {
  return gulp
    .src([path.src.img])
    .pipe(changed(path.build.img))
    .pipe(gulpif("*.svg", gulp.dest(path.build.img)))
    .pipe(
      gulpif(
        "*.{webp,png,jpg,jpeg,gif}",
        imagemin({
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant([0.3, 0.5])],
          interlaced: true,
        })
      )
    )
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({ stream: true }));
});

// Build
gulp.task("build", ["html", "js", "image", "style"]);

// Watch
gulp.task("watch", function () {
  watch([path.watch.html], function (event, cb) {
    gulp.start("html");
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start("image");
  });
  watch(path.watch.style, { readDelay: 200 }, function (event, cb) {
    gulp.start("style");
  });
  watch([path.watch.js], function (event, cb) {
    gulp.start("js");
  });
});

// Server
gulp.task("webserver", function () {
  browserSync(config);
});

// Run
gulp.task("default", ["build", "webserver", "watch"]);

// Cache
gulp.task("clear", function () {
  cache.clearAll();
});
