

const fs = require('node:fs');
fs.readdir('.', (err , files ) => {
if (err) {
    console.error('error al leer el directorio: ', err);
        
}

files.forEach(file =>{
    console.log(file);
})
})

//callback el err siempre es el primero parametro. te obliga a pensar que el error esta alli esperando
//ls "node 6.ls.ja"  listado de fichero 

//stat 