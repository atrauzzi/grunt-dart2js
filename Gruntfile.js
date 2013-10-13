/*
* grunt-dart2js
* https://github.com/atrauzzi/grunt-dart2js
*
* Copyright (c) 2013 Alexander Trauzzi
* Licensed under the MIT license.
*/

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({

		// Configuration to be run (and then tested).
		dart2js: {
			compile: {
				options: {
				},
				files: {
					"public/main.js": "app/dart/main.dart",
				}
			}
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

};
