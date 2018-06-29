# تاریخ جلالی برای ant-design

کتابخانه ای برای افزودن تاریخ شمسی به ant-design

این کتابخانه یک fork از کتابخانه اصلی [jalali-moment](https://github.com/fingerpich/jalali-moment) است.

## معرفی 
سیستم تاریخ جلالی، دقیق‌ترین تقویم هماهنگ با سال اعتدالی و مبنای گاهشمار ایرانی از قرن پنجم خورشیدی به این صورت انجام می‌گرفته است.
عموماً تاریخ ها در سرورها به صورت میلادی ذخیره میگردد و تبدیل آن به شمسی گاهی در جاوااسکریپت و در مرورگر انجام می شود.
این پلاگین استفاده از کتابخانه moment را برای تاریخ شمسی مهیا میسازد.

## نصب

```shell
npm install antd-jalali-moment -S
```
یا
```shell
yarn add antd-jalali-moment
```
## استفاده

بعد از نصب کافی است این کتابخانه را به عنوان alias برای moment قرار دهید

اگر از react-app-rewired استفاده میکنید میتوانید از فایل زیر برای تغییر تنظیمات استفاده کنید.

#### config.overrides.js
```js
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = injectBabelPlugin(['syntax-dynamic-import'], config);
  config.resolve.alias['moment'] = 'antd-jalali-moment'; // this is where we use alias
  return config;
};
```