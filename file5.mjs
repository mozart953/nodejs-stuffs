import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('archivo.txt', 'utf-8'),
    readFile('archivo2.txt', 'utf-8')
]).then(([data1, data2]) => {
    console.log(data1);
    console.log(data2);
});
