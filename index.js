const fs = require('fs');
const path = require('path');
const findup = require('findup');

function findPkg(dir) {
  try {
    return path.join(findup.sync(dir, 'package.json'), 'package.json');
  } catch (err) {
    console.log(err);
    throw new Error('No package.json file found');
  }
}

module.exports = function VERSIONBADGE(content, options = {}, config) {
  const pkgPath = findPkg(config.originalPath);

  const { name, version } = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  const url = `https://npmjs.org/${name}`;
  const img = `https://img.shields.io/badge/npm-v${version}-green.svg`

  return `[![npm](${img})](${url})`
}
