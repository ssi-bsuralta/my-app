const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');

gulp.task('scripts', () => {
    const tsResult = gulp.src('./server/**/*').pipe(tsProject());
    return tsResult.js.pipe(gulp.dest('./dist/server'));
});

gulp.task('watch', ['scripts'], () => {
    gulp.watch('./server/**/*', ['scripts']);
});

gulp.task('default', ['watch']);
