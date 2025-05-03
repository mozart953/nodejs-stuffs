const fs = require('node:fs');

const directory = process.argv[2] ?? './';

fs.readdir(directory, (err, files) => {          
    if (err) {
        console.log(err);
    } else {
        files.forEach(file => {
            console.log(file);
        });
    }
});

