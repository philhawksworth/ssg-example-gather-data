var project = require('./_project.js');
var gulp    = require('gulp');
var shell   = require('gulp-shell');

// Run the static site generator
// gulp.task('generate', function(done) {
//   shell.task('eleventy');
//   done();
// });


gulp.task('generate', shell.task('eleventy'));
