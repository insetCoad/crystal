var gulp = require("gulp"),
    plumber = require("gulp-plumber"),
    sass = require("gulp-sass"),
    jade = require("gulp-jade"),
    sourceMaps =   require("gulp-sourcemaps");
/*|dir structure |*/
var dir = {
    "src" : "./src",
    "pre" : "./pre",
    "pub" : "./pub"
}
var lst = {
    "jade" : "/**/*.jade",
    "scss" : "/**/*.scss"
}
/*| watches and defults |*/
gulp.task('default',[
    //'hi',
    'jade',
    'sass',
    'watch'
]);
gulp.task('watch', function () {
    gulp.watch(dir.src + "/jade" + lst.jade, ['jade','builtJade']);
    gulp.watch(dir.src + "/scss" + lst.scss, ['sass','builtSass']);
});
/*| tasking |*/
gulp.task('hi', function () {console.log("i am in")});
/*| jade compiling for |*/
gulp.task('jade', function () {
    return gulp.src(dir.src + "/jade" + lst.jade)
    .pipe(jade({
            pretty: true
        }))
    .pipe(gulp.dest(dir.pre))
});
gulp.task('builtJade', function () {
   return  gulp.src(dir.scss + "jade" + lst.jade)
    .pipe(jade())
    .pipe(gulp.dest(dir.pub))
});

/*| scss compiling for |*/
gulp.task('sass', function () {
    return gulp.src(dir.src + "/scss" + lst.scss)
    .pipe(plumber())
    .pipe(sourceMaps.init())
        .pipe(sass())
    .pipe(sourceMaps.write('/source/'))
    .pipe(gulp.dest(dir.pre + "/lib/css/"))
});
gulp.task('builtSass', function () {

    return gulp.src(dir.src + "/scss" + lst.scss)
    .pipe(plumber())
     .pipe(sass({
         outputStyle: 'compressed'
        }).on('error', sass.logError))
    .pipe(gulp.dest(dir.pub + "/lib/css/"))
});

/*|shifting libs |*/
gulp.task('sift_img', function() {
   return gulp.src(dir.src + "/img/**/*.**")
    .pipe(gulp.dest(dir.pre + "/lib/img/"))
    .pipe(gulp.dest(dir.pub + "/lib/img/"))
});