# Jalali Moment

Display, parse, manipulate and validate jalali (Persian, Khorshidi, Shamsi) or Gregorian (Miladi) dates and times and also 
convert Jalali (Persian, Khorshidi, Shamsi) date to Gregorian (Miladi) or vice versa in javascript or typescript. [DEMO](https://fingerpich.github.io/jalali-moment)

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
- [Install](#install)
- Use jalali moment in
    - [Node.js](#using-in-nodejs)
    - [React](#react)
    - [Typescript](#typescript)
    - [Angular](#angular)
    - [Aurelia](#aurelia)
    - [Vue](#vue)
    - [Es5](#es5)
    - [Plunker](#using-in-plunker)
- [Use API](#api)
    
    This plugin provides using jalali and gregorian calendar system together
    on [momentjs](https://momentjs.com/docs/) api.

    ```.locale('fa');``` it will use jalali calendar system

    ```.locale('any other locale');``` it will use gregorian calendar system

#### Usage

  - [Parse](#parse)
      ```js
      // parse gregorian date
      m = moment('1989/1/24');
      m = moment('1989/1/24', 'YYYY/M/D');// parse a gregorian (miladi) date
      m = moment.from('1989/1/24', 'en');
      m = moment.from('01/1989/24', 'en', 'MM/YYYY/DD');

      // parse jalali date
      m = moment('1367/11/04', 'jYYYY/jMM/jDD');
      m = moment.from('1367/11/04', 'fa');
      m = moment.from('04/1367/11', 'fa', 'DD/YYYY/MM');

      moment.locale('fa'); // set fa locale for all new moment instances
      m = moment('1367/11/04');
      ```
  - [Display](#display-jalali-or-miladi-date)
    ```js
    m.format('jYYYY/jMM/jDD'); // 1367/11/04
    m.locale('fa');
    m.format('YYYY/MM/DD'); // 1367/11/04
    ```
  - [Manipulate](#manipulate)
    ```js
    m.add(1, 'day').locale('fa').format('YYYY/MM/DD'); // 1367/11/05
    ```
  - [Validate](#validate)
    ```js
    m.isSame(m.clone()); // true
    ```
  - [Convert](#convert-persianjalali--shamsi-khorshidi-to-gregorian-miladi-calendar-system)
    ```js
    moment.from('1367/11/04', 'fa').format('YYYY/MM/DD'); // 1989/01/24
    moment('1989/01/24').locale('fa').format('YYYY/MM/DD'); // 1367/11/04
    ```

## Introduction

jalali(Persian) calendar is a solar calendar system. It gains approximately 1 day on the Julian calendar every 128 years. [Read more on Wikipedia](http://en.wikipedia.org/wiki/Jalali_calendar).

Calendar conversion is based on the [algorithm provided by Kazimierz M. Borkowski](http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm) and has a very good performance.

This plugin adds Jalali (Persian, Khorshidi, Shamsi) calendar system to [moment.js](http://momentjs.com) library.

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
moment().locale('fa').format('YYYY/M/D');
```

## Using in browser

#### ES5

```HTML
<!--<script src="bower_components/jalali-moment/dist/jalali-moment.browser.js"></script>-->
<!--<script src="node_modules/jalali-moment/dist/jalali-moment.browser.js"></script>-->
<script src="thisRepositoryPath/dist/jalali-moment.browser.js"></script>
<script>
  moment().locale('fa').format('YYYY/M/D');
</script>
```

#### React
```js
import moment from 'jalali-moment'
...
render() {
    return (
        <div>
            {
            this.props.data.map((post,key) =>
                <div key={key} className="post-detail">
                    <h1>{post.title}</h1>
                    <p>{moment(post.date).locale('fa').format('YYYY/M/D')}</p>
                    <hr />
                </div>
            )}
        </div>
    );
}

```

#### Typescript

```ts
import * as moment from 'jalali-moment';
let todayJalali = moment().locale('fa').format('YYYY/M/D');
```

#### Angular

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
    return MomentDate.locale('fa').format("YYYY/M/D");
  }
}
```
and use it in component template
```HTML
 <div>{{ loadedData.date | jalali }}</div>
```

#### Aurelia

You can create a value converters like following:

``` typescript
import { valueConverter } from 'aurelia-framework';
var moment = require('jalali-moment');


@valueConverter("date")
export class DateValueConverter {
  toView(value: string, format: string = "YYYY/MM/DD", locale: string = "en") {
    if (!value) return null;
    return moment(value).locale(locale).format(format);
  }
}
```

then use this value converter in your ```html``` files:

```html
<require from="path_to_your_date_value_converter"></require>

<h1 style="direction:ltr">
    <span>
        ${myDate|date:myFormat:options.locale}
    </span>
</h1>
```

also, for aurelia developers, there is a plugin, [aurelia-time](https://github.com/shahabganji/aurelia-time), in which there are value converters for jalali-moment and other time and date libraries.

#### Vue

Use [vue-jalali-moment](https://github.com/fingerpich/vue-jalali-moment) library

```html
<span>{{ someDate | moment("dddd, MMMM Do YYYY") }}</span>
```

## API

This plugin tries to mimic [moment.js](https://momentjs.com/) api.
Basically, when you want to format or parse a string,
just add a `j` to the format token like 'jYYYY' or 'jM'. For example:

```js
now = moment(); //get the current date and time,
```

#### Parse

Create a instance of moment from a Jalali (Persian) or Miladi date and time as string.[more](https://momentjs.com/docs/#/parsing/)
###### gregorian date
```js
m = moment('1989/1/24');
m = moment('1989/1/24', 'YYYY/M/D');
m = moment.from('1989/1/24', 'en');
m = moment.from('01/1989/24', 'en', 'MM/YYYY/DD');
```

###### persian date
```js
m = moment('1367/11/4', 'jYYYY/jM/jD');
m = moment.from('1367/11/04', 'fa');
m = moment.from('11/1367/04', 'fa', 'MM/YYYY/DD'); 

// it will change locale for all new moment instance
moment.locale('fa');
m = moment('1367/11/04');
```

#### Display jalali or miladi date

Display moment instance as a string.[more](https://momentjs.com/docs/#/displaying/)
```js
moment.locale('en'); // default locale is en
m = moment('1989/1/24');
m.locale('fa'); // change locale for this moment instance
m.format('YYYY/M/D');// 1367/11/4
m.format('MM'); // 11 display jalali month
m.format('MMMM'); // Bahman
m.format('DD'); // 04 display day by two digit
m.format('DDD'); // 310 display day of year
m.format('w'); // 45 display week of year
m.locale('en');
m.format('M'); // 1 display miladi month
m.format('MM'); // 01 display month by two digit
m.format('MMMM'); // January
m.format('jYYYY/jM/jD [is] YYYY/M/D'); // 1367/11/4 is 1989/1/24
```

#### Manipulate

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
m.endOf('jMonth').format("jYYYY/jMM/jD"); // 1367/6/31
m.startOf('jYear').format("jYYYY/jMM/jD"); // 1367/1/1
```

#### Validate

Check a date and time.[more](https://momentjs.com/docs/#/query/)
```js
m = moment('1367/11/4', 'jYYYY/jM/jD');
m.jIsLeapYear(); // false
m.isLeapYear(); // false
m.isSame(moment('1989-01-01','YYYY-MM-DD'), 'year'); // true
m.isSame(moment('1367-01-01','jYYYY-jMM-jDD'), 'year'); // true
m.isBefore(moment('1367-01-01','jYYYY-jMM-jDD'), 'month'); // false
m.isAfter(moment('1367-01-01','jYYYY-jMM-jDD'), 'jyear'); // false
m.isValid(); // true
moment('1396/7/31','jYYYY/jM/jD').isValid(); // false
```
[validation demo in plunker](https://plnkr.co/caWsmd)

#### Convert persian(Jalali , Shamsi, khorshidi) to gregorian (miladi) calendar system
```js
moment('1392/6/3 16:40', 'jYYYY/jM/jD HH:mm')
    .format('YYYY-M-D HH:mm:ss'); // 2013-8-25 16:40:00
```

#### Convert gregorian (miladi) to jalali (Shamsi, persian)
```js
moment('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss')
    .format('jYYYY/jM/jD HH:mm:ss'); // 1392/6/31 23:59:59
```

### Change calendar system on changing its locale
```js
moment.bindCalendarSystemAndLocale();
```

### An example usage:
To make a datePicker work with jalali(shamsi) calendar system you could use this ability.

## Using in Plunker

#### ES5

```HTML
<script src='https://unpkg.com/jalali-moment/dist/jalali-moment.browser.js'></script>
<script>
  moment().format('jYYYY/jM/jD');
</script>
```
[es5 demo in plunker](https://plnkr.co/caWsmd)

#### Typescript or es6

You could use systemjs to import this library into your project like [this](https://embed.plnkr.co/Gggh1u/)

## Related Projects

#### jalali-angular-datepicker ( angular2 or more)

A highly configurable date picker built for Angular 4 or Angular 2 applications using `jalali-moment` is [fingerpich/jalali-angular-datepicker](https://github.com/fingerpich/jalali-angular-datepicker) created by [@Fingerpich](https://github.com/fingerpich).

#### jalaali-moment

A Jalaali calendar system plugin for moment.js is [jalaali-moment](https://github.com/jalaali/moment-jalaali).

#### aurelia-time

[aurelia-time](https://github.com/shahabganji/aurelia-time) Contains a set of value converters for [Aurelia](http://aurelia.io), one which uses jalali-moment.

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