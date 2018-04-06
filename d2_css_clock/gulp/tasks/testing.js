module.exports = () => {
    $.gulp.task('test', () => {
        return $.gulp.src('test/*.js', {read: false})
        .pipe($.gp.debug({title: 'To_test_files'}))
        .pipe($.gp.mocha({reporter: 'list', exit: true}))
        .on('error', console.error);
    });
}

