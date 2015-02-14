'use strict';

var express = require('express'),
    fs      = require('fs'),
    path    = require('path'),
    router  = express.Router();

mount('/',       path.join(__dirname, 'public'));
mount('/posts/', path.join(__dirname, 'public', 'posts'));

// Mount static files without `html` extension
function mount(root, dir) {
  fs.readdirSync(dir).
    filter(function (file) {
      return file.match(/\.html$/);
    }).
    forEach(function (file) {
      var name = path.basename(file, '.html');
      var route = root + name;
      router.get(route, function (req, res) {
        res.sendFile(path.join(dir, file));
      });
    });
}

module.exports = router;
