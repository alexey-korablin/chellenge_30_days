module.exports = () => {
    $.gulp.task('files', () => {
        return $.gulp.src('app/media/pic/*.jpg')
        .pipe($.gulp.dest('build/assets/'));
    });
};