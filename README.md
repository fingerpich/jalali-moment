# jalali-moment

A Jalali (Jalali, Persian, Khorshidi, Shamsi) calendar system plugin for moment.js. [DEMO](https://fingerpich.github.io/jalali-moment)

[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url] 
[![Package Quality][packageQuality-image]][packageQuality-url]

Jalali calendar is a solar calendar. It gains approximately 1 day on the Julian calendar every 128 years. [Read more on Wikipedia](http://en.wikipedia.org/wiki/Jalali_calendar).

This plugin adds Jalali calendar support to [momentjs](http://momentjs.com) library.

Calendar conversion is based on the [algorithm provided by Kazimierz M. Borkowski](http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm) and has a very good performance.

## Where to use it

Like `momentjs`, `jalali-moment` works in browser and in Node.js.


### Install

Install via NPM
```shell
npm install jalali-moment -S
```


### Node.js

```js
var moment = require('jalali-moment');
moment().format('jYYYY/jM/jD');
```

### Angular

```ts
import * as moment from 'jalali-moment';
```
add a jalali pipe
```ts
@Pipe({
  name: 'jalali'
})
export class JalaliPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let MomentDate=moment(value);
    return MomentDate.format("jYYYY/jM/jD");
  }
}
```
and use it in component template
```HTML
 <div>loadedData.date|jalali</div>
```

### Typescript
```ts
import * as moment from 'jalali-moment';
let todayJalali = moment().format('jYYYY/jM/jD');
```

### Browser(es5)
```HTML
<script src="thisRepo/dist/jalali-moment.js"></script>
<script>
  moment().format('jYYYY/jM/jD')
</script>
```

### Plunker
```HTML
<script src='https://unpkg.com/jalali-moment/dist/jalali-moment.js'></script>
<script>
  moment().format('jYYYY/jM/jD')
</script>
```
[for example](https://embed.plnkr.co/Gggh1u/)


## API

This plugin tries to mimic `momentjs` api. Basically, when you want to format or parse a string, just add a `j` to the format token like 'jYYYY' or 'jM'. For example:

```js
const m = moment('1367/11/4', 'jYYYY/jM/jD')
m.format('jYYYY/jM/jD [is] YYYY/M/D'); 1367/11/4 is 1989/1/24
m.jYear(); 1367
m.jMonth(); 10
m.jDate(); 4
m.jDayOfYear(); 310
m.jWeek(); 45
m.jWeekYear(); 1367
moment.jIsLeapYear(m.jYear()); false

moment('1392/6/3 16:40', 'jYYYY/jM/jD HH:mm').format('YYYY-M-D HH:mm:ss') // 2013-8-25 16:40:00

moment('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD HH:mm:ss') // 1392/6/31 23:59:59

moment('1981 5 17', 'YYYY jM D').format('YYYY/MM/DD') // 1981/07/17
```

To add Persian language, use loadPersian method:

```js
moment.loadPersian()
```

## Related Projects

### jalali-angular-datepicker ( angular2 or more)

A highly configurable date picker built for Angular 2 applications using `jalali-moment` is [fingerpich/jalali-angular-datepicker](https://github.com/fingerpich/jalali-angular-datepicker) created by [@Fingerpich](https://github.com/fingerpich).
In this I needed a plugin on moment.js to have Jalali date so at first I had been using [moment-jalaali](https://github.com/jalaali/moment-jalaali) but I can't so I forked it and add some new feature to it.

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