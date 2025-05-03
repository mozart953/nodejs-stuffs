/**
 * El objeto 'process' en Node.js
 * 
 * El objeto 'process' es un objeto global que proporciona información y control sobre el proceso actual de Node.js.
 * Es una instancia de EventEmitter y está disponible en todos los módulos sin necesidad de importarlo.
 * 
 * Algunas de las funcionalidades más importantes:
 * 
 * 1. Información del proceso:
 *    - process.pid: ID del proceso
 *    - process.platform: Sistema operativo (win32, linux, darwin, etc.)
 *    - process.version: Versión de Node.js
 *    - process.arch: Arquitectura del procesador (x64, arm, etc.)
 * 
 * 2. Control del proceso:
 *    - process.exit(code): Termina el proceso con un código de salida
 *    - process.kill(pid): Envía una señal a otro proceso
 * 
 * 3. Variables de entorno:
 *    - process.env: Objeto que contiene las variables de entorno
 * 
 * 4. Entrada/Salida estándar:
 *    - process.stdin: Stream de entrada estándar
 *    - process.stdout: Stream de salida estándar
 *    - process.stderr: Stream de error estándar
 * 
 * 5. Argumentos de línea de comandos:
 *    - process.argv: Array con los argumentos pasados al script
 * 
 * Ejemplos de uso:
 */

// Mostrar información del proceso
console.log('ID del proceso:', process.pid);
console.log('Sistema operativo:', process.platform);
console.log('Versión de Node.js:', process.version);
console.log('Arquitectura:', process.arch);

// Acceder a variables de entorno
console.log('Directorio de inicio:', process.env.HOME || process.env.USERPROFILE);

// Argumentos de línea de comandos
console.log('Argumentos recibidos:', process.argv);

// Manejar la terminación del proceso
process.on('exit', (code) => {
    console.log(`Proceso terminado con código ${code}`);
});

// Manejar señales del sistema
process.on('SIGINT', () => {
    console.log('Recibida señal SIGINT (Ctrl+C)');
    process.exit(0);
});


console.log(process.env);



