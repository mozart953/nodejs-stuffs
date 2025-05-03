const sistema = require('node:os');

console.log('Plataforma:', sistema.platform()); 
console.log('Arquitectura:', sistema.arch());
console.log('CPUs:', sistema.cpus());
console.log('Memoria libre:', sistema.freemem());
console.log('Nombre del host:', sistema.hostname());
console.log('Carga promedio:', sistema.loadavg());
console.log('Memoria total:', sistema.totalmem());
console.log('Memoria disponible:', sistema.freemem());
console.log('Tiempo de ejecución:', sistema.uptime()/60/60/24);


