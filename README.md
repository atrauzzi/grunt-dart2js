# grunt-dart2js

> Compile Dart to JavaScript.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-dart2js --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-dart2js');
```

## The "dart2js" task

### Overview
In your project's Gruntfile, add a section named `dart2js` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  dart2js: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.minify
Type: `Boolean`
Default value: `false`

A boolean indicating whether you'd like to run the minifaction step of the `dart2js` compiler.

#### options.checked
Type: `Boolean`
Default value: `false`

A boolean indicating whether you'd like to run `dart2js` with the `--checked` flag.

#### options.dart2js_bin
Type: `Path`
Default value: `~/dart/dart-sdk/bin/dart2js`

The location of the dart2js binary.

#### options.packageRoot
Type: `Path`
Default value: `null`

Set package directory for dart packages.

#### options.verbose
Type: `Boolean`
Default value: `false`

Display lots of information.

#### options.serverSide
Type: `Boolean`
Default value: `false`

Use with `analyzeOnly` to analyze a command-line app. The default category is Client, which tells dart2js to expect a web app.

#### options.signatuesOnly
Type: `Boolean`
Default value: `false`

Like `analyzeOnly`, but skip analysis of method bodies and field initializers.

#### options.analyzeOnly
Type: `Boolean`
Default value: `false`

Analyze the code, but don’t generate code.

#### options.analyzeAll
Type: `Boolean`
Default value: `false`

Analyze even the code that isn’t reachable from `main()`. This option is useful for finding errors in libraries, but using it can result in bigger and slower output.

#### options.terse
Type: `Boolean`
Default value: `false`

Emit diagnostics, but don’t suggest how to get rid of the diagnosed problems.

#### options.supressWarning
Type: `Boolean`
Default value: `false`

Don’t display warnings.

#### options.supressHints
Type: `Boolean`
Default value: `false`

Don’t display hints.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
