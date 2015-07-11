/**
 * Created by https://github.com/volkovpv on 07.2015.
 */

var express         = require('express'),
    gulp            = require('gulp'),
    liveReload 		= require('gulp-livereload'),
    open            = require('gulp-open'),
    unhtml          = require('gulp-minify-html'),
    source          = require('vinyl-source-stream'),
    buffer          = require('vinyl-buffer'),
    browserify      = require('browserify'),
    uglify 			= require('gulp-uglify'),
    sourcemaps      = require('gulp-sourcemaps');

var src = {
    base:   "./src/",
    js:     "./src/js/main.js",
    css:    "./src/style/style.css",
    html:   "./src/*.html"
};

var build = {
    base:       "./www/",
    nameJs:     "main.js",
    js:         "./www/js/",
    css:        "./www/style/",
    indexHtml:  "./www/index.html"
};


//server
var server = {
    app: express(),
    port: process.env.PORT || 8000
};

gulp.task('server', function() {
    server.app.use(express.static(build.base));
    server.app.listen(server.port);
    console.log("Running server on port " + server.port + ", press ctrl + c to stop.");
});

//build react.js
gulp.task('react', function(){
    return browserify({
        entries: [src.js],
        extensions: ['.js', '.jsx']
    }, {
        debug: true
    })
        .bundle()
        .pipe(source(build.nameJs))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('../source-map'))
        .pipe(gulp.dest(build.js));
});

gulp.task('htmlMini', function(){
    gulp.src(src.html)
        .pipe(unhtml({spare:true}))
        .pipe(gulp.dest(build.base));
});

//open URL in browser
gulp.task('url', function(){
    var options = {
        url: 'http://localhost:8000',
        app: 'chrome'
    };
    gulp.src(build.indexHtml)
        .pipe(open('', options));
});

gulp.task('css', function(){
    gulp.src(src.css)
        .pipe(gulp.dest(build.css));
});

gulp.task('watch', ['server', 'react', 'htmlMini', 'url', 'css'], function() {
    liveReload({ start: true });

    gulp.watch('./src/*.html', ['htmlMini']);
    gulp.watch('./src/js/**', ['react']);
    gulp.watch('./src/style/*.css', ['css']);
    gulp.watch('./www/**').on('change', function(file) {
        liveReload.changed(file.path);
    });
});

gulp.task('productionBuild',['htmlMini', 'css'], function(){
    return browserify({
        entries: [src.js],
        extensions: ['.js', '.jsx']
    })
        .bundle()
        .pipe(source(build.nameJs))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(build.js));
});