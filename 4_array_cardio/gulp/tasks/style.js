module.exports = () => {
    $.gulp.task('style', () => {
        return $.gulp.src('app/styles/**/main.less')
        .pipe($.gp.if($.isDev, $.gp.debug({title: 'LESS_files'})))
        .pipe($.gp.if($.isDev, $.gp.sourcemaps.init()))
        .pipe($.gp.less({
            'include css': true
        }))
        .pipe($.gp.if($.isDev, $.gp.debug({title: 'From_LESS_to_CSS'})))
        .pipe($.gp.autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe($.gp.if($.isDev, $.gp.debug({title: 'Prefixed_style_props'})))
        .on('Error', $.gp.notify.onError({
            message: 'Error: <%= error.message %>',
            title: 'Style'
        }))
        .pipe($.gp.if(!$.isDev, $.gp.csso()))
        .pipe($.gp.if($.isDev, $.gp.debug({title: 'CSSO_worked_around'})))
        .pipe($.gp.if($.isDev, $.gp.debug({title: 'CSS_files'})))
        .pipe($.gp.if($.isDev, $.gp.sourcemaps.write()))
        .pipe($.gulp.dest('build/styles'))
        .pipe($.bs.reload({
            stream: true
        }))
    });
}