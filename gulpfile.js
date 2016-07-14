//Modified example gulpfile from https://travismaynard.com/writing/getting-started-with-gulp

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var uglify = require('gulp-uglify');
var critical = require('critical').stream;
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');


//Minify JS
gulp.task('main-scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('view-scripts', function() {
    return gulp.src('src/views/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/views/js'));
});

//Minify CSS
gulp.task('main-styles', function() {
    return gulp.src('src/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('view-styles', function() {
    return gulp.src('src/views/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/views/css'))
});

//Minify HTML
gulp.task('main-html'), function() {
    return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
}

gulp.task('view-html'), function() {
    return gulp.src('src/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'))
}

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/js/*.js', ['main-scripts','view-scripts']);
});

//Inline critital css resources
gulp.task('critical', function() {
    return gulp.src('src/views/*.html')
        .pipe(critical({
            base: 'src/',
            inline: true,
            css: 'src/views/css/style.css'
        }))
        .pipe(gulp.dest('dist/views/'));

});

//Compress images
gulp.task('main-images', function() {
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});


gulp.task('view-images', function() {
    return gulp.src('src/views/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/views/images'));
});



// Default Task
gulp.task('default', 
    ['main-scripts',
    'view-scripts', 
    'main-html',
    'view-html',
    'main-styles', 
    'view-styles',
    'main-images',
    'view-images', 
    'critical', 
    'watch']);