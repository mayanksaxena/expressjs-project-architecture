"use strict";

var walk = require('walk'),
    fs = require('fs'),
    path = require('path');

// Original function
function getDirsSync(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

function lib(app) {
    var basePath = path.resolve(__dirname, '..', "modules"),
        allModules = getDirsSync(basePath);

    for(var i in allModules) {
        require(basePath+"/"+allModules[i])(app);
    }
    console.log("All modules loaded");
};

module.exports = lib;