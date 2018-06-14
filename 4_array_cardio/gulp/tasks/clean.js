module.exports = () => {
    $.gulp.task('clean', () => {
        return $.gulp.src('build/**/*.*', {read: false})
        .pipe($.gp.debug({title: 'Cleaned_files'}))
        .pipe($.gp.clean());
    });
};