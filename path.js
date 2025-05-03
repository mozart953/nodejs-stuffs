const path = require('node:path');

console.log(path.sep);

console.log(path.join('src', 'app.js'));

const baseName = path.basename('src/app/texto.js');
console.log(baseName);


const extName = path.extname('src/app/texto.js');
console.log(extName);






