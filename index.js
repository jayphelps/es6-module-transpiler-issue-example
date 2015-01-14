var fs = require('fs');
var ES6Transpiler = require('es6-module-transpiler').Compiler;
var source = fs.readFileSync('./input.js', 'utf-8');
var compiler = new ES6Transpiler(source, 'input');

console.log(compiler.toAMD());