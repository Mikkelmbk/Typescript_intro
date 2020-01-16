var gulp = require("gulp");
var ts = require('gulp-typescript');
var connect = require("gulp-connect");


function tsTask(){
	return gulp.src('src/js/*.ts')
	.pipe(ts({
		noImplicitAny: true,
		target:"es6",
		module:"commonjs",

	}))
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