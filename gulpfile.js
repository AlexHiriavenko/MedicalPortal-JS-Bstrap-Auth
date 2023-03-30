import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import rename from "gulp-rename";
import concat from "gulp-concat";
import clean from "gulp-clean";
import browserSync from "browser-sync";
import autoprefixer from "gulp-autoprefixer";
import imagemin from "gulp-imagemin";
import uglify from "gulp-uglify";


const sass = gulpSass(dartSass);
browserSync.create();

const path = {
  src: {
    html: `./index.html`,
    scss: `./src/scss/*.scss`,
    js: `./src/js/*.js`,
    img: `./src/images/*`,
  },
  dist: {
    self: `./dist`,
    css: `./dist/css`,
    js: `./dist`,
    img: `./dist/images`,
  },
};


const cleanDist = () =>
  gulp.src(path.dist.self, { allowEmpty: true }).pipe(clean());

const buildCss = () => {
  return gulp
    .src("./src/scss/*.css")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(cleanCss({ compatibility: "ie8" }))
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css",
      })
    )
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(concat("style.scss"))
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
};

const devCss = () =>
  gulp
    .src(path.src.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(rename("styles.min.css"))
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.stream());

const buildJs = () =>
  gulp
    .src(path.src.js)
    .pipe(concat("script.js"))
    .pipe(rename("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.stream());

const buildImages = () =>
  gulp.src(path.src.img).pipe(imagemin()).pipe(gulp.dest(path.dist.img));

const watcher = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
};

gulp.watch("./index.html").on("change", browserSync.reload);
gulp.watch(path.src.scss, devCss).on("change", browserSync.reload);
gulp.watch(path.src.js, buildJs).on("change", browserSync.reload);
gulp.watch(path.src.img, buildImages).on("change", browserSync.reload);

gulp.task(
  "build",
  gulp.series(cleanDist, gulp.parallel(buildCss, buildJs, buildImages))
);
gulp.task(
  "dev",
  gulp.series(gulp.parallel(devCss, buildJs, buildImages), watcher)
);





