// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var fs = require('fs');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Send HTML to GHpages folder.
gulp.task('allez-oop',function(){
    return gulp.src('html/*html')
        .pipe(gulp.dest('dist'));
});

// Optimize images
gulp.task('images', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Deploy to Github Pages



// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'allez-oop','images']);