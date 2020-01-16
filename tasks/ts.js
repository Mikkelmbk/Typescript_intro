var gulp = require("gulp");
var ts = require('gulp-typescript');
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var terser = require("gulp-terser");
var babel = require("gulp-babel");


function tsTask(){
	return gulp.src('src/js/*.ts')
	.pipe(sourcemaps.init())
	.pipe(ts({
		noImplicitAny: true,
		target:"esNext",
		module:"commonjs",
	}))
	.pipe(babel({
		presets:['@babel/env']
	}))
	.pipe(terser())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
	
}


function watchTS(){
	return gulp.watch("src/js/**/*.ts", { ignoreInitial:false}, tsTask)
}


module.exports = {
	tsTask,
	watchTS
}