// Gulp and plugin loader
var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('gulp-main-bower-files');
 
// Master Task - builds all files including bower dependencies, watches for any changes, and reloads browser on build completion
gulp.task('default', ["portBowerFiles"], function () {

});

gulp.task("portBowerFiles", ["portBowerCSS", "portBowerJS"]);

gulp.task("portBowerCSS", function() {
    return gulp.src("./bower.json")
        .pipe(mainBowerFiles())
        .pipe(gulpFilter("**/*.css", {restore: true}))
        .pipe(cssnano())
        .pipe(gulp.dest("public/vendor"));
});

gulp.task("portBowerJS", function() {
    return gulp.src("./bower.json")
        .pipe(mainBowerFiles())
        .pipe(gulpFilter("**/*.js", {restore: true}))
        .pipe(uglify())
        .pipe(gulp.dest("public/vendor"));
});