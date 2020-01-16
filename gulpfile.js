var connect = require("gulp-connect");
var { watchHTML, htmlTask, watchLayoutHTML } = require("./tasks/html");
var { jsTask, watchJS } = require("./tasks/js");
var { scssTask, watchSCSS } = require("./tasks/scss");
var { imageTask, watchImg } = require("./tasks/img");
var { mediaTask, watchMedia } = require("./tasks/media");
var { tsTask, watchTS } = require("./tasks/ts");

function watch(){
	watchHTML();
	watchSCSS();
	watchJS();
	watchTS();
	watchImg();
	watchMedia();
	watchLayoutHTML();

	connect.server({
		livereload: true,
		root: "dist",
		port:3010,
	});
}

function build(done){
	htmlTask();
	scssTask();
	jsTask();
	tsTask();
	imageTask();
	mediaTask();
	done();
}

exports.default = watch;

exports.build = build;