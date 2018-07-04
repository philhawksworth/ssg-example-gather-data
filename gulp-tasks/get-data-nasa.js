
var project = require('./_project.js');
var gulp    = require('gulp');
var Parser = require('rss-parser');


/*
  Get news rss from NASA
*/
gulp.task('get-nasa-news', function (done) {
  (async () => {
    let parser = new Parser();
    let feed = await parser.parseURL('https://www.nasa.gov/rss/dyn/breaking_news.rss');
    project.storeData(project.buildSrc + "/site/_data/nasa-news.json", JSON.stringify(feed.items));
    done();
  })();
});
