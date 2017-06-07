# jalali-moment

A Jalali (Jalali, Persian, Khorshidi, Shamsi) calendar system plugin for moment.js. [DEMO](https://fingerpich.github.io/jalali-moment)

[![MIT License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url] 
[![Package Quality][packageQuality-image]][packageQuality-url]
[![dependencies Quality][dependencies-quality]][dependencies-quality-url]
[![dev dependencies Quality][dev-dependencies-quality]][dev-dependencies-quality-url]
[![Codacy Badge][codacy-quality]][codacy-quality-url]
[![Codacy Badge][codacy-coverage]][codacy-coverage-url]

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

Install via bower
```shell
bower install jalali-moment --save
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

### ES5

```HTML
<!--<script src="bower_components/jalali-moment/dist/jalali-moment.browser.js"></script>-->
<!--<script src="node_modules/jalali-moment/dist/jalali-moment.browser.js"></script>-->
<script src="thisRepository/jalali-moment/dist/jalali-moment.browser.js"></script>
<script>
  moment().format('jYYYY/jM/jD')
</script>
```

### Plunker
```HTML
<script src='https://unpkg.com/jalali-moment/dist/jalali-moment.browser.js'></script>
<script>
  moment().format('jYYYY/jM/jD')
</script>
```

### Plunker and Typescript
You could use systemjs to import this library into your project like [this](https://embed.plnkr.co/Gggh1u/)

## API

This plugin tries to mimic `momentjs` api. Basically, when you want to format or parse a string, just add a `j` to the format token like 'jYYYY' or 'jM'. For example:

```js
const m = moment('1367/11/4', 'jYYYY/jM/jD');
m.format('jYYYY/jM/jD [is] YYYY/M/D'); //1367/11/4 is 1989/1/24
m.jYear(); //1367
m.jMonth(); //10
m.jDate(); //4
m.jDayOfYear(); //310
m.jWeek(); //45
m.jWeekYear(); //1367
moment.jIsLeapYear(m.jYear()); //false

moment('1392/6/3 16:40', 'jYYYY/jM/jD HH:mm').format('YYYY-M-D HH:mm:ss'); // 2013-8-25 16:40:00

moment('2013-8-25 16:40:00', 'YYYY-M-D HH:mm:ss').endOf('jMonth').format('jYYYY/jM/jD HH:mm:ss'); // 1392/6/31 23:59:59

moment('1981 5 17', 'YYYY jM D').format('YYYY/MM/DD'); // 1981/07/17
```

#### Load Persian
To add Persian language, use loadPersian method:

```js
moment().format('jYYYY/jMMMM/jD'); // 1367/Bahman/4
moment.loadPersian();
moment().format('jYYYY/jMMMM/jD'); // 1367/بهمن/4
moment.loadPersian(true);
moment().format('jYYYY/jMMMM/jD'); // ۱۳۶۷/بهمن/۴
moment.unloadPersian();
moment().format('jYYYY/jMMMM/jD'); // 1367/Bahman/4
```

## Related Projects

### jalali-angular-datepicker ( angular2 or more)

A highly configurable date picker built for Angular 2 applications using `jalali-moment` is [fingerpich/jalali-angular-datepicker](https://github.com/fingerpich/jalali-angular-datepicker) created by [@Fingerpich](https://github.com/fingerpich).

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
[dev-dependencies-quality-url]: https://david-dm.org/fingerpich/jalali-moment#info=devDependencies

[codacy-quality]:https://api.codacy.com/project/badge/Grade/1aa5b7aadfc24238bdf825d58cb2cba1
[codacy-quality-url]:https://www.codacy.com/app/zarei-bs/jalali-moment?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fingerpich/jalali-moment&amp;utm_campaign=Badge_Grade

[codacy-coverage]:https://api.codacy.com/project/badge/Coverage/1aa5b7aadfc24238bdf825d58cb2cba1
[codacy-coverage-url]:https://www.codacy.com/app/zarei-bs/jalali-moment?utm_source=github.com&utm_medium=referral&utm_content=fingerpich/jalali-moment&utm_campaign=Badge_Coverage