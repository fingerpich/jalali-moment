# jalali-moment

Display, parse, manipulate and validate jalali (Persian, Khorshidi, Shamsi) or Gregorian (Miladi) dates and times and also 
convert Jalali (Persian, Khorshidi, Shamsi) date to Gregorian (Miladi) or vice versa in javascript or typescript.
[DEMO](https://fingerpich.github.io/jalali-moment)

[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url] 
[![Package Quality][packageQuality-image]][packageQuality-url]
[![dependencies Quality][dependencies-quality]][dependencies-quality-url]
[![dev dependencies Quality][dev-dependencies-quality]][dev-dependencies-quality-url]
[![Codacy Badge][codacy-quality]][codacy-quality-url]
[![Codacy Badge][codacy-coverage]][codacy-coverage-url]

## Introduction

Jalali calendar is a solar calendar system. It gains approximately 1 day on the Julian calendar every 128 years. [Read more on Wikipedia](http://en.wikipedia.org/wiki/Jalali_calendar).

Calendar conversion is based on the [algorithm provided by Kazimierz M. Borkowski](http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm) and has a very good performance.

This plugin adds jalali (Persian, Khorshidi, Shamsi) calendar system to [moment.js](http://momentjs.com) library.

## Install

Install via **npm**
```shell
npm install jalali-moment -S
```
Install via **yarn**
```shell
yarn add jalali-moment
```
Install via **bower**
```shell
bower install jalali-moment --save
```

## Using in Node.js

Install it via npm or yarn then use it as the following code

```js
var moment = require('jalali-moment');
moment().format('jYYYY/jM/jD');
```

## Using in browser

#### ES5

```HTML
<!--<script src="bower_components/jalali-moment/dist/jalali-moment.browser.js"></script>-->
<!--<script src="node_modules/jalali-moment/dist/jalali-moment.browser.js"></script>-->
<script src="thisRepositoryPath/dist/jalali-moment.browser.js"></script>
<script>
  moment().format('jYYYY/jM/jD');
</script>
```

#### Typescript

```ts
import * as moment from 'jalali-moment';
let todayJalali = moment().format('jYYYY/jM/jD');
```

#### Angular 2 or 4

```ts
import * as moment from 'jalali-moment';
```
Add a pipe
```ts
@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let MomentDate = moment(value);
    return MomentDate.format("jYYYY/jM/jD");
  }
}
```
and use it in component template
```HTML
 <div>{{ loadedData.date | jalali }}</div>
```

## Using in Plunker

#### ES5

```HTML
<script src='https://unpkg.com/jalali-moment/dist/jalali-moment.browser.js'></script>
<script>
  moment().format('jYYYY/jM/jD');
</script>
```


#### Typescript or es6

You could use systemjs to import this library into your project like [this](https://embed.plnkr.co/Gggh1u/)

## API

This plugin tries to mimic [moment.js](https://momentjs.com/) api.
Basically, when you want to format or parse a string, 
just add a `j` to the format token like 'jYYYY' or 'jM'. For example:

```js
now = moment(); //get the current date and time,
```

#### Parse

Create a instance of moment from a string.[more](https://momentjs.com/docs/#/parsing/)
```js
m1 = moment('1367/11/4', 'jYYYY/jM/jD');// parse a jalali (persian) date
m2 = moment('1989/1/24', 'YYYY/M/D');// parse a gregorian (miladi) date
```

#### Display

Display moment instance as a string.[more](https://momentjs.com/docs/#/displaying/)
```js
m.format('jYYYY/jM/jD');// 1367/11/4 
m.format('jMM'); // 11 display jalali month
m.format('M'); // 1 display miladi month
m.format('MM'); // 01 display month by two digit
m.format('MMMM'); // January
m.format('jMMMM'); // Bahman
m.format('jDD'); // 04 display day by two digit
m.format('jYYYY/jM/jD [is] YYYY/M/D'); // 1367/11/4 is 1989/1/24
m.jDayOfYear(); // 310
m.jWeek(); // 45
m.jWeekYear(); // 1367
moment.jIsLeapYear(m.jYear()); // false
```

#### manipulate

There are a number of methods to modify date and time.[more](https://momentjs.com/docs/#/manipulating/)
```js
m.jYear(1368); // set jalali year
//  If the range is exceeded, it will bubble up to the year.
m.jMonth(3); // month will be 4 and m.format("M")=='4' , jMonth Accepts numbers from 0 to 11.
m.jDate(10); // set a date
m.format("jYYYY/jMM/jD"); // 1368/4/10
m.subtract(1, "jyear"); // add a Jalali Year
m.format("jYYYY/jMM/jD"); // 1367/4/10
m.add(2, "jmonth"); // add Jalali Month
m.format("jYYYY/jMM/jD"); // 1367/6/10
```

#### Convert jalali (Shamsi) to gregorian (miladi) calendar system 
```js
moment('1392/6/3 16:40', 'jYYYY/jM/jD HH:mm')
    .format('YYYY-M-D HH:mm:ss'); // 2013-8-25 16:40:00
```

#### Modify and convert gregorian (miladi) to jalali (Shamsi)
```js
moment('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss')
    .endOf('jMonth')
    .format('jYYYY/jM/jD HH:mm:ss'); // 1392/6/31 23:59:59
```

all features are documented in [here](https://momentjs.com/docs/).

## Load Persian
To add Persian language, use loadPersian method:

```js
moment().format('jYYYY/jMMMM/jD'); // 1367/Bahman/4
moment.loadPersian();
moment().format('jYYYY/jMMMM/jD'); // 1367/بهمن/4
moment.loadPersian(true); //use persian digits
moment().format('jYYYY/jMMMM/jD'); // ۱۳۶۷/بهمن/۴
moment.unloadPersian();
moment().format('jYYYY/jMMMM/jD'); // 1367/Bahman/4
```

## Use jalali calendar system primarily
This plugin adds Jalali calendar system to moment.js which is using gregorian calendar system 
so we could use both calendar system concurrently but 
you could use Jalali calendar as default system like the following code:  

```js
moment().format('YYYY/MMMM/D'); // 1989/January/24
moment.useJalaliSystemPrimarily();

moment().format('YYYY/MMMM/D'); // 1367/Bahman/4
moment().subtract(1,'year').format('YYYY/MMMM/D'); // 1366/bahman/4
moment().subtract(1,'month').format('YYYY/MMMM/D'); // 1367/dey/4

moment.useJalaliSystemSecondary();
moment().format('YYYY/MMMM/D'); // 1989/January/24
```

For example:
to make a datepicker work with jalali calendar system you could use this feature.

## Related Projects

#### jalali-angular-datepicker ( angular2 or more)

A highly configurable date picker built for Angular 4 or Angular 2 applications using `jalali-moment` is [fingerpich/jalali-angular-datepicker](https://github.com/fingerpich/jalali-angular-datepicker) created by [@Fingerpich](https://github.com/fingerpich).

#### jalaali-moment

A Jalaali calendar system plugin for moment.js is [jalaali-moment](https://github.com/jalaali/moment-jalaali).

## License

MIT

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