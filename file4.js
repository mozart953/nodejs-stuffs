const { readFile } = require('node:fs/promises');

(async function() {
    try {
        const data = await readFile('archivo.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
        process.exit(1);
    }
})();