module.exports = () => {
    $.gulp.task('layout', () => {
        return $.gulp.src('app/layout/*.html')
        .pipe($.gp.debug({title: 'Layouts'}))
        .pipe($.gulp.dest('build'))
        .on('end', $.bs.reload);
    });
};