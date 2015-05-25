nstall gulp-sea-build --save-dev
使用:
var seajs = require('gulp-sea-build');

gulp.task('sea-build', function(){
    gulp.src('src.js')
    .pipe( seajs('mainID') )
    .pipe( gulp.dest( '/dist' ) );
});
结果:
/dist/dest.js:

define( 'mainID', [ 'module1', 'module2' ], function(){
    // 模块代码
} );

define( 'module1', ['dependences'], function(){
    // 模块代码
} );

// 其它模块代码
参数:
gulp.src: 使用 seajs.use 加载进来的源文件目录
mainID: 模块的主ID
