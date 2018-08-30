const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const usemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();

gulp.task("previewDist", () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task("deleteDist", () => {
  return del("./docs");
});

gulp.task("optimizeImages", ["deleteDist"], () => {
  return gulp
    .src([
      "./app/assets/images/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("usemin", ["deleteDist", "styles"], () => {
  return gulp
    .src("./app/index.html")
    .pipe(
      usemin({
        css: [
          () => {
            return rev(); // The return here is used in order for gulp to be aware that the function is finished.
          },
          () => {
            return cssnano();
          }
        ],
        js: [
          () => {
            return rev();
          },
          () => {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./docs"));
});

gulp.task("build", ["deleteDist", "optimizeImages", "usemin"]);
