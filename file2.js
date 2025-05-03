const fs = require('node:fs');

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log('Fin del programa');

 fs.readFile('archivo2.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
 });
console.log('Fin del programa 2');