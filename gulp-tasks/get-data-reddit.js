var project = require('./_project.js');
var gulp    = require('gulp');
var Parser = require('rss-parser');


/*
  Get news rss from NASA
*/
gulp.task('get-reddit-webdev', function (done) {
  (async () => {
    let parser = new Parser();
    let feed = await parser.parseURL('https://www.reddit.com/r/webdev.rss');
    project.storeData(project.buildSrc + "/site/_data/webdev.json", JSON.stringify(feed.items));
    done();
  })();
});
