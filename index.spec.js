import path from 'path';
import { describe, expect, it } from 'vitest';
import format from './index.js';

const srcPath = path.join(import.meta.dirname, 'README.md');

describe('markdown-magic-version-badge', () => {
  it('renders a linked npm badge for the target package', () => {
    expect(
      format({
        content: 'ignored',
        options: { pkg: './__fixtures__/pkg/package.json' },
        srcPath,
      }),
    ).toBe(
      '[![npm](https://img.shields.io/badge/npm-v1.2.3-green.svg)](https://www.npmjs.com/package/fixture-pkg)',
    );
  });

  it('preserves the legacy prerelease-color contract (orange for prerelease versions)', () => {
    expect(
      format({
        content: 'ignored',
        options: { pkg: './__fixtures__/prerelease-pkg/package.json' },
        srcPath,
      }),
    ).toBe(
      '[![npm](https://img.shields.io/badge/npm-v1.0.0--beta.1-orange.svg)](https://www.npmjs.com/package/fixture-prerelease-pkg)',
    );
  });

  it('throws when no package.json can be found (legacy fail-loud contract)', () => {
    expect(() =>
      format({
        content: 'ignored',
        options: { pkg: './__fixtures__/does-not-exist/package.json' },
        srcPath,
      }),
    ).toThrow();
  });
});
