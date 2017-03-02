const fs = require('fs');
const path = require('path');
const findup = require('findup');
const semver = require('semver');

function findPkg(dir) {
  try {
    return path.join(findup.sync(dir, 'package.json'), 'package.json');
  } catch (err) {
    console.log(err);
    throw new Error('No package.json file found');
  }
}

function getPackage(options, config) {
  let pkgPath;

  if (options && options.pkg) {
    pkgPath = path.resolve(path.dirname(config.originalPath), options.pkg);
  } else {
    pkgPath = findPkg(config.originalPath);
  }

  return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

function getPrefix(options) {
  if (options && options.prefix) return options.prefix;

  return 'npm';
}

function renderBadge(prefix, name, version, _color) {
  let color;

  if (_color) {
    color = _color;
  } else if (semver.prerelease(version)) {
    color = 'orange';
  } else {
    color = 'green';
  }

  const urlVersion = version
    .replace(/-/g, '--')
    .replace(/_/g, '__')
    .replace(/ /g, '_');

  const url = [
    prefix,
    `v${urlVersion}`,
    color
  ].join('-').concat('.svg');

  const img = `https://img.shields.io/badge/${url}`;
  return `![${prefix}](${img})`;
}

function linkify(name, img, options) {
  const npm = name => `https://www.npmjs.com/package/${name}`

  if (options && options.link === 'false') return img;
  const url = options && options.link ? options.link : npm(name);

  return `[${img}](${url})`;
}

module.exports = function VERSIONBADGE(content, options = {}, config) {
  const { name, version } = getPackage(options, config);
  const prefix = getPrefix(options);
  const img = renderBadge(prefix, name, version, options && options.color);
  return linkify(name, img, options);
}
