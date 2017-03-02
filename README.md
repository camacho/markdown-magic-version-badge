# Version badge plugin

Add version badge to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-version-badge --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->
<!-- The below code snippet is automatically added from ./example.js -->
```js
const fs = require('fs');
const path = require('path');
const markdownMagic = require('markdown-magic');

const config = {
  transforms: {
    VERSIONBADGE: require('./index.js'),
  }
}

const markdownPath = path.join(__dirname, 'README.md');
markdownMagic(markdownPath, config);
```
<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (VERSIONBADGE) -->
[![npm](https://img.shields.io/badge/npm-v1.1.0-green.svg)](https://www.npmjs.com/package/markdown-magic-version-badge)
<!-- AUTO-GENERATED-CONTENT:END -->

## Options
* **pkg** (nearest `package.json` file in file tree from the README by default) - path to closest pkg
* **link** (links to npm by default) - a URL to link the button to (set to `false` to prevent link)
* **prefix** (`npm` by default) - the prefix for the badge
* **color** (`green` by default or `orange` if pre-release version) - any [supported color](http://shields.io/#your-badge)
