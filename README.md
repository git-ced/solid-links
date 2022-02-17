<p>
  <img 
    width="100%" 
    src="./banner.png" 
    alt="solid-links"
    style="border-radius: 0 0 50px 0;"
  >
</p>

Transform URLs in strings to actual links. It will find valid links in the given string and create `<a>` tags for it.

Internally, it uses this **[Regex](https://regexr.com/6fkup)** to identify links.

[![NPM](https://img.shields.io/npm/v/solid-links.svg)](https://www.npmjs.com/package/solid-links)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/solid-links)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/solid-links)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/solid-links)
![NPM](https://img.shields.io/npm/l/solid-links)

## Table of Contents
 - [Installation](#installation)
 - [Setup](#setup)
 - [Usage](#usage)
 - [Authors](#authors)
 - [Changelog](#changelog)
 - [License](#license)

 <!-- toc -->
## Installation

This library is available through the [npm registry](https://www.npmjs.com/).

NPM
```bash
$ npm -i solid-links
```

Yarn
```bash
$ yarn add solid-links
```

## Setup

Start using it by importing the library first.

### CommonJS
```javascript
const Linkify = require('solid-links');
```

or 

### ES6
```javascript
import { Linkify } from 'solid-links';
```

## Usage

```javascript
import { Linkify } from 'solid-links';

const TEST_STRING = `
  Will match the following cases

      http://www.foufos.gr
      https://www.foufos.gr
      http://foufos.gr
      http://www.foufos.gr/kino
      http://werer.gr
      www.foufos.gr
      www.mp3.com
      www.t.co
      http://t.co
      http://www.t.co
      https://www.t.co
      www.aa.com
      http://aa.com
      http://www.aa.com
      https://www.aa.com

  Will NOT match the following

      www.foufos
      www.foufos-.gr
      www.-foufos.gr
      foufos.gr
      http://www.foufos
      http://foufos
      www.mp3#.com
`;

export default function Sample() {
  return (
    <Linkify
      text={TEST_STRING}
      style="text-decoration: underline; color: blue;"
    />
  );
}
```

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/solid-links/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/solid-links/releases)

## License

  [MIT](LICENSE)
