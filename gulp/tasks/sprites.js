const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
};

gulp.task('beginClean', () => {
  return del(['./app/temp/sprite']);
});

gulp.task('createSprite', ['beginClean'], () => {
  return gulp
    .src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

// gulp.task('copySpriteFiles', ['createSprite'], () => {
//   return gulp
//     .src('./app/temp/sprite/css/**/*.svg')
//     .pipe(gulp.dest('./app/assets/images/sprites'));
// });

gulp.task('copySpriteCss', ['createSprite'], () => {
  return gulp
    .src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteCss']);
