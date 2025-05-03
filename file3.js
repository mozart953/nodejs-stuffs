const fs = require('node:fs/promises');

fs.readFile('archivo.txt', 'utf-8').then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


