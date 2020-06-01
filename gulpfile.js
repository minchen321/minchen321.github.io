const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');


gulp.task('sass', function(){
  return gulp.src('src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('main.min.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function(){
  return gulp.src(['src/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});


gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', gulp.series('sass'));
    gulp.watch('src/js/main.js', gulp.series('scripts'));
});