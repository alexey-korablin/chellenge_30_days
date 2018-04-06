'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    isDev: !process.env.NODE_ENV || process.env.NODE_ENV === 'dev',

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'dev';
console.log($.isDev, process.env.NODE_ENV);

$.path.tasks.forEach((task) => require(task)());

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('clean', 'test', 'script', 'style', 'layout'),
    $.gulp.parallel('serve', 'watch')
));