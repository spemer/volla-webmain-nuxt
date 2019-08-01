'use strict'

const { src, dest, lastRun, series } = require('gulp')

const imagemin = require('gulp-imagemin')

// image resize - asset
function imageminAsset() {
  return src(['./static/img/src/*'], {
    since: lastRun(imageminAsset)
  })
    .pipe(imagemin())
    .pipe(dest(['./static/img/dist']))
}

// exports
exports.default = series(imageminAsset)
