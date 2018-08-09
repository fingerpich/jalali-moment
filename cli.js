#!/usr/bin/env node
var program = require("commander");
// var inquirer = require("inquirer");
var package = require("./package.json");
var jm = require("./jalali-moment.js");

program
    .version(package.version, "-v, --version");

program
    .command("togregorian <date>")
    .description("convert jalali date to gregorian")
    .option("-f, --format", "input format")
    .option("-o, --oformat", "output format")
    .action(function (date, cmd) {
        console.log(jm.from(date, "fa", cmd.readFormat || "YYYY/MM/DD").format(cmd.outformat || "YYYY/MM/DD"));
    });

program
    .command("tojalali <date>")
    .description("convert a gregorian date to jalali")
    .option("-f, --format", "input format")
    .option("-o, --oformat", "output format")
    .action(function (date, cmd) {
        console.log(jm(date, cmd.readFormat || "YYYY/MM/DD").locale("fa").format(cmd.outformat || "YYYY/MM/DD"));
    });

program.parse(process.argv);
