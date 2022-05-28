const Contenedor = require('./Contenedor');

const contenedor = new Contenedor('./productos.txt');

contenedor.save( {title: 'Remera AC DC', price: 3535} )
//contenedor.getAll()
//contenedor.getById(2)
//contenedor.deleteAll()
//contenedor.deleteById(2)