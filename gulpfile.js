const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('packHTML', async () => {
  gulp.src('./views/*.html')
  .pipe(gulp.dest('./dist'))
})
gulp.task('packCSS', async () => {
  gulp.src('./public/css/*.*')
  .pipe(sass())
  .pipe(gulp.dest('./dist/css'))
})
gulp.task('packJS', async () => {
  gulp.src('./public/js/*.js')
  .pipe(gulp.dest('./dist/js'))
})
gulp.task('packIMG', async () => {
  gulp.src('./public/img/*.*')
  .pipe(gulp.dest('./dist/img'))
})
gulp.task('packDB', async () => {
  gulp.src('./db/*.json')
  .pipe(gulp.dest('./dist/db'))
})

gulp.task('build', gulp.series('packHTML', 'packCSS', 'packJS', 'packIMG', 'packDB'), async () => {
  console.log('build is computed')
})
gulp.task('watch', async () => {
  gulp.watch('./views/*.html', gulp.series('packHTML'))
  gulp.watch('./public/css/*.scss', gulp.series('packCSS'))
  gulp.watch('./public/js/*.js', gulp.series('packJS'))
  gulp.watch('./public/img/*.*', gulp.series('packIMG'))
  gulp.watch('./db/*.json', gulp.series('packDB'))
})