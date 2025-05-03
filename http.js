const http = require('http');
const  {findAvailablePort} = require('./net');


const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World xd xd</h1>');
    res.write('<p>What is your name?</p>');
    res.end();
});

findAvailablePort(3001).then(port => {
    server.listen(port, () => {
        console.log(`Server is running on port http://localhost:${server.address().port}`);
    });
}).catch(err => {
    console.error(err);
});

// server.listen(3000, () => {
//     console.log(`Server is running on port http://localhost:${server.address().port}`);
// });



