// Gulp and plugin loader
var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    mainBowerFiles = require('gulp-main-bower-files');
 
// Master Task - builds all files including bower dependencies, watches for any changes, and reloads browser on build completion
gulp.task('default', ["build", "portBowerFiles"], function () {
    gulp.watch("src/**/*.html", ["buildHTML"]);
    gulp.watch("src/**/*.css", ["buildCSS"]);
    gulp.watch("src/**/*.js", ["buildJS"]);
});

// Grouped Tasks
gulp.task("build", ["buildHTML", "buildCSS", "buildJS"]);

gulp.task("portBowerFiles", ["portBowerCSS", "portBowerJS"]);

// Individual Tasks
gulp.task('buildHTML', function () {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('public'));
});

gulp.task('buildCSS', function () {
	return gulp.src('src/**/*.css')
        .pipe(cssnano())
		.pipe(gulp.dest('public/css'));
});

gulp.task('buildJS', function () {
	return gulp.src('src/**/*.css')
		.pipe(uglify())
		.pipe(gulp.dest('public/js'));
});

gulp.task("portBowerCSS", function() {
    return gulp.src("./bower.json")
        .pipe(mainBowerFiles())
        .pipe(gulpFilter("**/*.css", {restore: true}))
        .pipe(cssnano())
        .pipe(gulp.dest("public/css/libs"));
});

gulp.task("portBowerJS", function() {
    return gulp.src("./bower.json")
        .pipe(mainBowerFiles())
        .pipe(gulpFilter("**/*.js", {restore: true}))
        .pipe(uglify())
        .pipe(gulp.dest("public/js/libs"));
});