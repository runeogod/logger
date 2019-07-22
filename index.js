"use strict"; //Remove this line if you want to use arrow functions E.g: secondFunction = () => { .. }

const ogenErrorReporting = require('./src/model/ogenErrorReporting');
const validator = require('validator');
const Database = require('./src/config/database');

function main() {
    errorHandler();
}

function secondFunction() {
    errorHandler();
}

function errorFormat(input) {
 let functionError = input.split('(');
 let lineError = input.match(/\(([^)]+)\)/)[1].split(':');
 let fileError = lineError[0];

 let data = {
    function: functionError[0].split('at')[1].replace(/\s/g, ''),
    file: fileError,
    line: lineError[1],
    date: new Date().toISOString()
 }

 let r = ogenErrorReporting.create(data, function (err, res) {
    if (err) throw err;
    console.log(res);
 });
}
function errorHandler() {
    var stack;
    try {
        throw new Error();
    } catch (e) {
        stack = e.stack;
    }
    var m = stack.match(/.*?errorHandler.*?\n(.*?)\n/);
    if (m) {
        var caller_name = m[1];
        errorFormat(caller_name);
    }
}

main();
secondFunction();