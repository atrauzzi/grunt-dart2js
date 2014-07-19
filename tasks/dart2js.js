/*
* grunt-dart2js
* https://github.com/atrauzzi/grunt-dart2js
*
* Copyright (c) 2013 Alexander Trauzzi
* Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {

	var numCPUs = require('os').cpus().length,
	    homeDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];

	grunt.registerMultiTask('dart2js', 'Compile Dart to JavaScript.', function() {

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			// If someone just quickly grabbed the Dart SDK, it's likely to be here.
			"dart2js_bin": homeDir + "/dart/dart-sdk/bin/dart2js",
			"minify": false,
			"checked": false,
			"packageRoot": null,
			"verbose": false,
			"serverSide": false,
			"signatuesOnly": false,
			"analyzeOnly": false,
			"analyzeAll": false,
			"terse": false,
			"supressWarning": false,
			"supressHints": false
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
			
			if(options.checked) {
				args.push("--checked");
			}
			
			if(options.packageRoot != null){
				args.push("--package-root="+options.packageRoot);
			}
			
			if(options.verbose){
				args.push("--verbose");
			}
			
			if(options.serverSide){
				args.push("--categories=Server");
			}
			
			if(options.signatuesOnly){
				args.push("--analyze-signatures-only");
			}
			
			if(options.analyzeOnly){
				args.push("--analyze-only");
			}
			
			if(options.analyzeAll){
				args.push("--analyze-all");
			}
			
			if(options.terse){
				args.push("--terse");
			}
			
			if(options.supressWarning){
				args.push("--suppress-warnings");
			}
			
			if(options.supressHints){
				args.push("--suppress-hints");
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
					if (error){
						grunt.log.writeln("Error code:" + error);
					}
					next(error);
				}
			);

		}, this.async());

	});

};
