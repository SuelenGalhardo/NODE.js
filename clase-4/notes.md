**COMMONJS  - SISTEMA DE modulos de node.js , compartir codigo para no repiti-lo
clasico de toda la vida , HEMOS UTILIZADO HASTA AHIORA 

tiene: require module.exports 



HOY VAMOS MIGAR LA APLICACION A ---


** ESMODULES- moderno y recomendado 

import/export


reto- bastante interesante :  el primero que tienes que hacer, es ir al package.json y poner commonjs, y ponerlo type: "module"

la arquitectura MVC (Modelo-Vista-Controlador) es un patrón de diseño ampliamente utilizado en el desarrollo de software, especialmente en aplicaciones web. Separa la aplicación en tres componentes principales, cada uno con su propia responsabilidad, lo que facilita el desarrollo, la organización y el mantenimiento del código.

Componentes de la Arquitectura MVC:
Modelo (Model):

Responsabilidad:Gestión
Ejemplo: En una aplicación de gestión de usuarios, el modelo podría ser una clase User que contiene propiedades como name,email, y métodos para crear, leer, actualizar y eliminar usuarios.
Vista:

Responsabilidad: Presentar los datos al usuario en una interfaz de usuario. La vista es responsable de renderizar el contenido en el navegador y de interactuar con el usuario.
Ejemplo: En la misma aplicación de gestión de usuarios, una vista podría ser una página HTML o una plantilla que muestra una lista de usuarios o un formulario para añadir un nuevo usuario.
Controlador:

Responsabilidad: Actuar como intermediario entre el modelo y la vista. El controlador recibe las entradas del usuario (como clics o datos de formularios), procesa esas entradas (generalmente interactuando con el modelo), y selecciona la vista apropiada para presentar los resultados.
Ejemplo:EnUser y pasar esos datos a la vista correspondiente.


Estructura del Proyecto:
/myapp
├── app.js
├── controllers
│   └── userController.js
├── models
│   └── userModel.js
├── views
│   └── userView.ejs
└── routes
    └── userRoutes.js








