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

Métodos de solicitud HTTP:

https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

HTTP define un conjunto de métodos de solicitud para indicar la acción deseada que se realizará para un recurso determinado. Aunque también pueden ser sustantivos, estos métodos de solicitud a veces se denominan verbos HTTP . Cada uno de ellos implementa una semántica diferente, pero un grupo de ellos comparte algunas características comunes: por ejemplo, un método de solicitud puede ser seguro , idempotente o almacenable en caché .

switch
declaración para seleccionar uno de los muchos bloques de código que se ejecutarán.
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch

installar la extencion REST Client
tener un fichero

o thunder client => mas visual

o RapidAPI Client => puede crear los tipo de typesScript

Express es un framework de aplicaciones web para Node.js que proporciona un conjunto robusto de características para desarrollar aplicaciones web y APIs de manera rápida y sencilla. Es conocido por su minimalismo y flexibilidad, lo que lo convierte en uno de los frameworks más populares para Node.js.

### Características principales de Express:

1. **Routing**: Permite definir rutas HTTP (GET, POST, PUT, DELETE, etc.) para manejar solicitudes y respuestas de manera organizada.

2. **Middlewares**: Permite la definición de funciones middleware que se ejecutan en secuencia para manejar solicitudes HTTP. Estas funciones tienen acceso al objeto de solicitud (`req`), el objeto de respuesta (`res`), y la siguiente función middleware en el ciclo de solicitud-respuesta.

3. **Manejo de solicitudes y respuestas**: Facilita la manipulación de datos de solicitud (como parámetros de ruta, datos del cuerpo, encabezados) y la construcción de respuestas HTTP (estableciendo código de estado, headers, y enviando contenido).

4. **Plantillas**: Aunque Express en sí mismo no tiene un sistema de plantillas incorporado, es común usarlo junto con motores de plantillas como EJS, Pug (anteriormente conocido como Jade), Handlebars, entre otros.

5. **Integración con bases de datos**: Express puede integrarse con una variedad de bases de datos tanto SQL (como MySQL, PostgreSQL) como NoSQL (como MongoDB) mediante librerías o módulos específicos.

6. **Facilidad de extensión**: A través de middlewares y módulos de terceros, Express se puede extender fácilmente para agregar funcionalidades adicionales como autenticación, manejo de sesiones, logging, entre otros.

### ¿Por qué usar Express?

- **Rápido desarrollo**: Express simplifica el proceso de desarrollo de aplicaciones web y APIs, proporcionando una estructura organizada y flexible.
- **Amplia comunidad y soporte**: Es uno de los frameworks más populares para Node.js, por lo que cuenta con una comunidad activa que ofrece soporte y una gran cantidad de recursos y módulos adicionales.

- **Flexibilidad**: Aunque es minimalista, Express es lo suficientemente flexible como para adaptarse a diferentes tipos de aplicaciones y necesidades.

- **Compatible con middleware**: Soporta una amplia gama de middlewares que facilitan la integración de diversas funcionalidades adicionales.

En resumen, Express es una herramienta poderosa y popular para el desarrollo de aplicaciones web y APIs en Node.js, gracias a su simplicidad, flexibilidad y robustez.

https://expressjs.com/es/

Express
Infraestructura web rápida, minimalista y flexible para Node.js
$ npm install express --save

https://expressjs.com/en/starter/installing.html

middleware :

Los middleware son funciones o conjuntos de funciones que tienen acceso tanto a la solicitud (request) como a la respuesta (response) en una aplicación basada en Node.js y Express. Se utilizan principalmente para realizar tareas intermedias entre la recepción de una solicitud y el envío de una respuesta desde el servidor. Los middleware se pueden utilizar para una variedad de propósitos, como la manipulación de datos, la autenticación de usuarios, el manejo de errores, el registro de solicitudes, entre otros.

Funcionamiento de los Middleware
En una aplicación Express, los middleware son funciones que tienen acceso a tres parámetros:

req(pedido):
res(respetar
next: Uno fuenext(), el sitio

Middleware de registro de solicitudes:

j

Copiar código
const logRequest = (req, res, next) => {
console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

next(); // Llama a la siguiente función middleware
};

app.use(logRequest);
Por la tarde

Middleware de manejo de errores:

j

Copiar código
const errorHandler = (err, req, res, next) => {

    cons

console.error(`Error: ${err.message}`);
res.status(500).json({ error: 'Internal Server Error' });
};

app.use(errorHandler);
Este middleware captura errores que ocurren en otras partes de la aplicación y responde con un código de estado 500 y un mensaje de error genérico.

Middleware para la autenticación de usuarios:

javascript

Copiar código
const authenticateUser = (req, res, next) => {
// Verificar si el usuario está autenticado
if (req.isAuthenticated()) {
return next(); // Usuario autenticado, continuar
}

    }

// Usuario no autenticado, redirigir al inicio de sesión
res.

redirect('/login');
};

app.
};

get('/profile', authenticateUser, (req, res) => {
res.
r
send('Profile Page');
});
