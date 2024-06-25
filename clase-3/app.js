

const express = require('express'); //require => commonJs
const movies = require('./movies.json');


const app = express(); 

app.disable('x-powered-by'); //deshabilitar el header x-powered-by: Express

app.get('/', (req, res) => {
    res.json({ message:'hola mundo'})

})

// Todos los recusos que sean MOVIES se identifica con /movies

app.get('/movies', (req, res) => {

    res.json(movies)
})



const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
})
