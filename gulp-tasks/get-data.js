var project = require('./_project.js');
var gulp    = require('gulp');

gulp.task('get:data', gulp.parallel(
  'get-reddit-webdev',
  'get-nasa-news',
  'get-tweets'
));

