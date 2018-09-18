# Jalali Moment

Display, parse, manipulate and validate jalali (Persian, Khorshidi, Shamsi) or Gregorian (Miladi) dates and times and also
convert Jalali (Persian, Khorshidi, Shamsi) date to Gregorian (Miladi) or vice versa in javascript or typescript. [DEMO](https://fingerpich.github.io/jalali-moment)

Read this in [فارسی](./README.fa.md)

[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![Package Quality][packageQuality-image]][packageQuality-url]
[![dependencies Quality][dependencies-quality]][dependencies-quality-url]
[![dev dependencies Quality][dev-dependencies-quality]][dev-dependencies-quality-url]
[![Codacy Badge][codacy-quality]][codacy-quality-url]
[![Codacy Badge][codacy-coverage]][codacy-coverage-url]

## How to
- [Install](https://github.com/fingerpich/jalali-moment#install)
- Use jalali moment in
    - [Node.js](https://github.com/fingerpich/jalali-moment#using-in-nodejs)
    - [Es5](https://github.com/fingerpich/jalali-moment#es5)
    - [React](https://github.com/fingerpich/jalali-moment#react)
    - [Typescript](https://github.com/fingerpich/jalali-moment#typescript)
    - [Angular](https://github.com/fingerpich/jalali-moment#angular)
    - [Aurelia](https://github.com/fingerpich/jalali-moment#aurelia)
    - [Vue](https://github.com/fingerpich/jalali-moment#vue)
    - [Terminal(Command Line)](https://github.com/fingerpich/jalali-moment#command-line)
    - [Jquery](https://github.com/fingerpich/jalali-moment#jquery)
    - [Plunker](https://github.com/fingerpich/jalali-moment#using-in-plunker)
- [Use API](https://github.com/fingerpich/jalali-moment#api)

    This plugin provides using jalali and gregorian calendar system together
    on [momentjs](https://momentjs.com/docs/) api.

    ```.locale('fa');``` it will use jalali calendar system

    ```.locale('any other locale');``` it will use gregorian calendar system

#### Usage

  - [Parse](https://github.com/fingerpich/jalali-moment#parse)
      ```js
      // parse gregorian date
      m = moment('1989/1/24', 'YYYY/M/D');// parse a gregorian (miladi) date
      m = moment.from('01/1989/24', 'en', 'MM/YYYY/DD');

      // parse jalali date
      m = moment('1367/11/04', 'jYYYY/jMM/jDD');
      m = moment.from('1367/04/11', 'fa', 'YYYY/MM/DD');
      m = moment.from('04/1367/11', 'fa', 'DD/YYYY/MM');
      ```
  - [Display](https://github.com/fingerpich/jalali-moment#display-jalali-or-miladi-date)
    ```js
    m.format('jYYYY/jMM/jDD'); // 1367/11/04
    m.locale('fa').format('YYYY/MM/DD'); // 1367/11/04
    ```
  - [Manipulate](https://github.com/fingerpich/jalali-moment#manipulate)
    ```js
    m.add(1, 'day').locale('fa').format('YYYY/MM/DD'); // 1367/11/05
    ```
  - [Validate](https://github.com/fingerpich/jalali-moment#validate)
    ```js
    m.isSame(m.clone()); // true
    ```
  - [Convert](https://github.com/fingerpich/jalali-moment#convert-persianjalali--shamsi-khorshidi-to-gregorian-miladi-calendar-system)
    ```js
    moment.from('1367/11/04', 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD'); // 1989/01/24
    moment('1989/01/24', 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD'); // 1367/11/04
    ```


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/jalali-moment
[npm-version-image]: http://img.shields.io/npm/v/jalali-moment.svg?style=flat

[travis-url]: https://travis-ci.org/fingerpich/jalali-moment
[travis-image]: https://travis-ci.org/fingerpich/jalali-moment.png?branch=master

[packageQuality-image]: http://npm.packagequality.com/shield/jalali-moment.svg
[packageQuality-url]: http://packagequality.com/#?package=jalali-moment

[dependencies-quality]: https://david-dm.org/fingerpich/jalali-moment.svg
[dependencies-quality-url]: https://david-dm.org/fingerpich/jalali-moment

[dev-dependencies-quality]: https://david-dm.org/fingerpich/jalali-moment/dev-status.svg
[dev-dependencies-quality-url]: https://david-dm.org/fingerpich/jalali-moment?type=dev

[codacy-quality]:https://api.codacy.com/project/badge/Grade/1aa5b7aadfc24238bdf825d58cb2cba1
[codacy-quality-url]:https://www.codacy.com/app/zarei-bs/jalali-moment?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fingerpich/jalali-moment&amp;utm_campaign=Badge_Grade

[codacy-coverage]:https://api.codacy.com/project/badge/Coverage/1aa5b7aadfc24238bdf825d58cb2cba1
[codacy-coverage-url]:https://www.codacy.com/app/zarei-bs/jalali-moment?utm_source=github.com&utm_medium=referral&utm_content=fingerpich/jalali-moment&utm_campaign=Badge_Coverage
