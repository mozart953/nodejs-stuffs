const fs = require('node:fs');

const stats = fs.statSync('archivo.txt');

console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.isSymbolicLink());
console.log(stats.size);
console.log(stats.atime);
console.log(stats.mtime);

const readFile = fs.readFileSync('archivo.txt', 'utf-8');
console.log(readFile); 
