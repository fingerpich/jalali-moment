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

## API

This plugin tries to mimic [moment.js](https://momentjs.com/) api.
Basically, when you want to format or parse a string, 
just add a `j` to the format token like 'jYYYY' or 'jM'. For example:

```js
now = moment(); //get the current date and time,
```

#### Parse

Create a instance of moment from a Jalali (Persian) or Miladi date and time as string.[more](https://momentjs.com/docs/#/parsing/)
```js
m = moment('1367/11/4', 'jYYYY/jM/jD');// parse a jalali (persian) date
m = moment('1989/1/24', 'YYYY/M/D');// parse a gregorian (miladi) date
```

#### Display jalali or miladi date

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
m.isSame('1989-01-01', 'year'); // true
m.isSame(moment('1367-01-01','jYYYY-MM-DD'), 'jyear'); // true
m.isBefore(moment('1367-01-01','jYYYY-MM-DD'), 'jyear'); // false
m.isAfter(moment('1367-01-01','jYYYY-MM-DD'), 'jyear'); // false
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
