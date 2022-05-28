
const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('productos.txt');
const express = require('express')
const app = express();

const productos = contenedor.getAll()
//contenedor.save( {title: 'Remera AC DC', price: 3535} )
//contenedor.getById(2)
//contenedor.deleteAll()
//contenedor.deleteById(2)


//OBJ

const PORT = 8080

//Verbos



app.get('/', (req, res) => {
    res.send(
             `<h1 style="color: blue;">Con la ruta /productos verá lo disponible</h1>
              <h1 style="color: red;">Con la ruta /productoRandom verá productos random</h1>
              `)
})

app.get('/productos', (req, res) => {
    productos
    .then( response => {
        res.send(response)
    })
    .catch(error => `Error: ${error}`)
})


function getRandom(length) {
    return parseInt((Math.random() * (length) ) + 1)
}

app.get('/productoRandom', (req, res) => {
    const length = productos.length
        productos
        .then(response => {
            res.send(response[getRandom(response.length - 1)])
        })
        .catch(error => `Error: ${error}`)
})
// Levantado de server

const server = app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})

server.on('error', error => console.log(`Error: ${error}`))