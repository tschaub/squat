# Squat

Basic module scaffolding.

 * [Mocha](http://visionmedia.github.io/mocha/) as test framework
 * [Chai](http://chaijs.com/) as assertion library
 * [JSHint](http://www.jshint.com/) to keep your code tidy
 * [Grunt](http://gruntjs.com/) to orchestrate it all

## Setup

You can set up a new project based on squat with [`nik`](https://npmjs.org/package/nik).  If you don't have it already, get `nik`:

    npm install -g nik

Now, say you want to create a new module named `diddly`.  Create a new directory and set up the module scaffolding with the following:

    mkdir diddly
    cd diddly
    nik tschaub/squat

After answering a few questions, you'll be set up with the basics for your new module.
