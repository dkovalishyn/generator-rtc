# generator-rtc [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Create react-component template

## Installation

First, install [Yeoman](http://yeoman.io) and generator-rtc using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-rtc
```

Then generate your new project:

```bash
yo rtc
```

In order to make this generator accessible for Yeoman use command
```bash
npm link
```

##How to use it

Go to a folder where you want to create a component.

Type command 
```bash
yo rtc [component-name]
```

Then select one of the templates:
- component (defaults) - create simple react component with the most modern approach
- styled - create component for a styled-system

Select one of the testing renderer library:
- rtl - react-testing-library template
- enzyme - use enzyme renderer

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Denys Kovalishyn]()


[npm-image]: https://badge.fury.io/js/generator-rtc.svg
[npm-url]: https://npmjs.org/package/generator-rtc
[travis-image]: https://travis-ci.com/dkovalishyn/generator-rtc.svg?branch=master
[travis-url]: https://travis-ci.com/dkovalishyn/generator-rtc
[daviddm-image]: https://david-dm.org/dkovalishyn/generator-rtc.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/dkovalishyn/generator-rtc
[coveralls-image]: https://coveralls.io/repos/dkovalishyn/generator-rtc/badge.svg
[coveralls-url]: https://coveralls.io/r/dkovalishyn/generator-rtc
