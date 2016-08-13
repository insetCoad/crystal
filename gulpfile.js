var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    sass = require("gulp-sass"),
    jade = require("gulp-jade"),
    sourceMaps =   require("gulp-sourcemaps");
/*|dir structure |*/
var src = {
    "jade" : "./src/jade",
    "scss" : "./src/scss",
    "img" : "./src/img"
}
var lst = {
    "jade" : "/**/*.jade",
    "scss" : "/**/*.scss"
}
/*| watches and defults |*/
gulp.task('default',[
    'hi',
    //'jade',
    //'sass',
    //'watch'
]);
gulp.task('watch', function() {
    gulp.watch(src.jade + lst.jade, ['jade']);
    gulp.watch(src.scss + lst.scss, ['sass']);
});
/*| tasking |*/
gulp.task('hi', function() {
    console.log("i ama in");
});