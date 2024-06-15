Nodemon es un desarrollo programa de utilidad que puede monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones.
installar nodemon 
npm install --save-dev nodemon
ejemplo de nodemon en el pacage.jason:
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "dependencies": {
    // Your dependencies here
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}


"scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
}

Peticion :
npm run dev:1
npm run dev:2
npm run dev:3
npm run dev

ejecutar: 
npm fund
npm audit fix --force

Un buffer en programación es una región de memoria física utilizada para almacenar datos temporalmente mientras se transfieren de un lugar a otro. Los buffers son esenciales para manejar la comunicación y el procesamiento eficiente de datos, especialmente en operaciones de entrada/salida (E/S), donde la velocidad de transferencia de datos puede variar entre dispositivos o procesos.

### Usos de un Buffer

1. **Entrada/Salida (I/O) Eficiente**: En operaciones de E/S, como la lectura de archivos o la transmisión de datos a través de la red, los buffers permiten acumular datos en bloques antes de procesarlos, mejorando así la eficiencia.
2. **Sincronización de Datos**: Cuando dos procesos o dispositivos operan a diferentes velocidades, un buffer puede actuar como un intermediario para manejar esta discrepancia.
3. **Reducción de la Latencia**: En la transmisión de datos en tiempo real, como el audio o el video en streaming, los buffers ayudan a reducir la latencia y garantizar un flujo continuo de datos.

### Buffers en Node.js

En Node.js, los buffers son objetos usados para representar una secuencia de bytes fijos, como un array de enteros, pero con una manipulación más eficiente y cercana a nivel de sistema.
