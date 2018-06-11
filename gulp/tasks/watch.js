module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('app/layout/*.html', $.gulp.series('layout'));
        $.gulp.watch('app/styles/**/*.css', $.gulp.series('style'));
        $.gulp.watch('app/scripts/**/*.js', $.gulp.series('script'));
        $.gulp.watch('test/**/*.js', $.gulp.series('test'));
    })
}