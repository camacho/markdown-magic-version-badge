# Version badge plugin

Add version badge to markdown files via [markdown-magic](https://github.com/DavidWells/markdown-magic)

## Install

```
npm i markdown-magic markdown-magic-version-badge --save-dev
```

## Adding the plugin

See `example.js` for usage.

<!-- AUTO-GENERATED-CONTENT:START (CODE:src=./example.js) -->

```js
import path from 'path';
import { markdownMagic } from 'markdown-magic';
import VERSIONBADGE from './index.js';

const config = {
  matchWord: 'AUTO-GENERATED-CONTENT',
  transforms: {
    VERSIONBADGE,
  },
};

const markdownPath = path.join(import.meta.dirname, 'README.md');
await markdownMagic(markdownPath, config);
```

<!-- AUTO-GENERATED-CONTENT:END *-->

## Usage in markdown

<!-- AUTO-GENERATED-CONTENT:START (VERSIONBADGE) -->

[![npm](https://img.shields.io/badge/npm-v2.0.0-green.svg)](https://www.npmjs.com/package/markdown-magic-version-badge)
<!-- AUTO-GENERATED-CONTENT:END -->

## Options

- **pkg** (nearest `package.json` file in file tree from the README by default) - path to closest pkg
- **link** (links to npm by default) - a URL to link the button to (set to `false` to prevent link)
- **prefix** (`npm` by default) - the prefix for the badge
- **color** (`green` by default or `orange` if pre-release version) - any [supported color](http://shields.io/#your-badge)
