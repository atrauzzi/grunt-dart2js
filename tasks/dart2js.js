/*
* grunt-dart2js
* https://github.com/atrauzzi/grunt-dart2js
*
* Copyright (c) 2013 Alexander Trauzzi
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	var numCPUs = require('os').cpus().length;
	var homeDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

	grunt.registerMultiTask('dart2js', 'Compile Dart to JavaScript.', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			// If someone just quickly grabbed the Dart SDK, it's likely to be here.
			"dart2js_bin": homeDir + "/dart/dart-sdk/bin/dart2js",
			"minify": false
		});

		// For every target & source, async to the number of CPUs.
		grunt.util.async.forEachLimit(this.files, numCPUs, function (file, next) {

			var src = file.src[0];

			if(!grunt.file.exists(src)) {
				grunt.log.warn('Source file "' + src + '" not found.');
				return next();
			}

			var args = [
				"--out=" + file.dest,
				src
			];

			// If minification is desired (probably not).
			if(options.minify) {
				args.push("--minify");
			}

			var process = grunt.util.spawn(
				{
					cmd: options.dart2js_bin,
					args: args,
					opts: {
						stdio: 'inherit'
					}
				},
				function (error, result, code) {
					grunt.log.writeln("Error code:" + error);
					next(error);
				}
			);

		}, this.async());

	});

};