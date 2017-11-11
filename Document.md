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

## Table Of Content
- [Install](README.md#install)
- Use jalali moment in
    - [Node.js](README.md#using-in-nodejs)
    - [Typescript](README.md#typescript)
    - [Angular](README.md#angular-2-or-4)
    - [Aurelia](README.md#aurelia)
    - [Es5](README.md#es5)
    - [Plunker](README.md#using-in-plunker)
- [Use API](README.md#api)

    This plugin provides using jalali and gregorian calendar system together
    on [momentjs](https://momentjs.com/docs/) api.

    ```.locale('fa');``` it will use jalali calendar system

    ```.locale('any other locale');``` it will use gregorian calendar system

#### Usage

  - [Parse](README.md#parse)
    ```js
    moment.locale('fa'); // set fa locale for all new moment instances
    var m1 = moment("1367/11/04","YYYY/MM/DD");
    ```
  - [Display](README.md#display-jalali-or-miladi-date)
    ```js
     m1.format("YYYY/MM/DD"); // 1367/11/04
    ```
  - [Manipulate](README.md#manipulate)
    ```js
    m1.add(1, "day").format("YYYY/MM/DD"); // 1367/11/05
    ```
  - [Validate](README.md#validate)
    ```js
    m1.isSame(m1.clone()); // true
    ```
  - [Convert](README.md#convert-persianjalali--shamsi-khorshidi-to-gregorian-miladi-calendar-system)
    ```js
    moment('1367/11/04', 'YYYY/MM/DD').locale('en').format('YYYY/MM/DD'); // 1989/01/24
    moment.locale('en');
    moment('1989/01/24').locale('fa').format('YYYY/MM/DD'); // 1367/11/04
    //set en locale just for this instance
    ```
