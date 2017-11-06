# Jalali Moment

Display, parse, manipulate and validate jalali (Persian, Khorshidi, Shamsi) or Gregorian (Miladi) dates and times and also 
convert Jalali (Persian, Khorshidi, Shamsi) date to Gregorian (Miladi) or vice versa in javascript or typescript.[DEMO](https://fingerpich.github.io/jalali-moment)

Read this in other languages: [فارسی](./README.fa.md)

[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url] 
[![Package Quality][packageQuality-image]][packageQuality-url]
[![dependencies Quality][dependencies-quality]][dependencies-quality-url]
[![dev dependencies Quality][dev-dependencies-quality]][dev-dependencies-quality-url]
[![Codacy Badge][codacy-quality]][codacy-quality-url]
[![Codacy Badge][codacy-coverage]][codacy-coverage-url]

## How to
- [Install](./Document.md#install)
- Use jalali moment in
    - [Node.js](./Document.md#using-in-nodejs)
    - [Typescript](./Document.md#typescript)
    - [Angular](./Document.md#angular-2-or-4)
    - [Aurelia](./Document.md#aurelia)
    - [Es5](./Document.md#es5)
    - [Plunker](./Document.md#using-in-plunker)
- [Use API](./Document.md#api)
    
    This plugin provides using jalali and gregorian calendar system together
    on [momentjs](https://momentjs.com/docs/) api.

    ```.locale('fa');``` it will use jalali calendar system

    ```.locale('any other locale');``` it will use gregorian calendar system

#### Usage

  - [Parse](./Document.md#parse)
    ```js
    moment.locale('fa'); // set fa locale for all new moment instances
    var m1 = moment("1367/11/04","YYYY/MM/DD");
    ```
  - [Display](./Document.md#display-jalali-or-miladi-date)
    ```js
     m1.format("YYYY/MM/DD"); // 1367/11/04
    ```
  - [Manipulate](./Document.md#manipulate)
    ```js
    m1.add(1, "day").format("YYYY/MM/DD"); // 1367/11/05
    ```
  - [Validate](./Document.md#validate)
    ```js
    m1.isSame(m1.clone()); // true
    ```
  - [Convert](./Document.md#convert-persianjalali--shamsi-khorshidi-to-gregorian-miladi-calendar-system)
    ```js
    moment('1367/11/04', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD'); // 1989/01/24
    moment.locale('en');
    moment('1989/01/24').locale('fa').format('YYYY/MM/DD'); // 1367/11/04
    //set en locale just for this instance
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