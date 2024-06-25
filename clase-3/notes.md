package.json :

npm init-y

npm install express -E

node --watch ./app.js

npm install





 .gitignore:

 node_modules
.DS_Store
.env
 

    REST API: QUE ES?
REST: 
    es una arquitectura de software 
    200- Roy Fielding 
    Principior :
    Escalabilidad
    Portabilidad :
    Visibilidad 
    Simplicidad :
    Fiabilidad:
    facil de modificar


fundamentos : 

  1-  Resources (Recursos) de Rest:

    cada recurso se identifica con una URL 

  2- Verbos HTTP 

    para definir las operaciones que se pueden realizar co los recursos

3- Representaciones 

*** nin todas las api, tienen que ser json  

json , xml, html, etc...
el cliente deberia poder decidir la representacion del reurso 

4- Stateless:

El cliente  debe enviar toda la informacion necesaria para procesar la request

5- Interfaz uniforme:

6- Separacion de conceptos :
permite que cliente y servidos evolucionen de forma separada 
son estes 6 pilares que sustentan la rest api

*** https://graphql.org/
aun que es para hacer consulta, las apis que puede crear no son rest api

graphQL es un lenguaje de consulta para API y un tiempo de ejecución para completar esas consultas con sus datos existentes. GraphQL proporciona una descripción completa y comprensible de los datos de su API, brinda a los clientes el poder de solicitar exactamente lo que necesitan y nada más, facilita la evolución de las API con el tiempo y habilita potentes herramientas para desarrolladores.





       API (Application Programming Interface) 

     REST (Representational State Transfer), => que utiliza el protocolo HTTP para realizar operaciones sobre recursos (como datos o funciones) de manera estándarizada y predecible.
   Algunas características principales de una REST API son:

Utilización de URLs: Cada recurso es accesible a través de una URL única y específica.

Operaciones HTTP: Utiliza los métodos estándar de HTTP (GET, POST, PUT, DELETE, etc.) para realizar acciones sobre los recursos.

Transferencia de datos: La API envía y recibe datos en formatos comunes como JSON o XML.

Stateless (sin estado): Cada solicitud HTTP contiene toda la información necesaria para procesarla, sin necesidad de mantener un estado de sesión en el servidor.

Las REST APIs son ampliamente utilizadas en el desarrollo de aplicaciones web y móviles, ya que proporcionan una forma flexible y eficiente para que diferentes sistemas intercambien datos y funcionalidades de manera segura y escalable.

Extension : RESTClient

