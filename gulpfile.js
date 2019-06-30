const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');

gulp.task('sass', function(){
  return gulp.src('src/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('main.min.css'))
    .pipe(postcss([autoprefixer('last 2 versions')]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function(){
  return gulp.src(['src/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('images', function(){
  return gulp.src('src/img/**/*.+(png|jpg|gif)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
});

gulp.task('watch', function(){
    gulp.watch('src/sass/*.scss', gulp.series('sass')); 
    gulp.watch('src/js/main.js', gulp.series('scripts'));
    gulp.watch('src/img/**/*.+(png|jpg|gif)', gulp.series('images'));
});