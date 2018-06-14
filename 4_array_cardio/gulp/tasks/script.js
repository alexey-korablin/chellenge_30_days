module.exports = () => {
    $.gulp.task('script', () => {
        return $.gulp.src('app/scripts/*.js')
        .pipe($.gp.debug({title: 'Scripts'}))
        .pipe($.gulp.dest('build/scripts/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
};