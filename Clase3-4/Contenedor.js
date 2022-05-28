const fs = require('fs');

class Contenedor {
    constructor(fileName) {
        this.fileName = fileName;
    }

    async save(product) {

        let products = await this.getAll()
        let id;
         if (products.length === 0) {
             id = 1
         } else {
             id = products[products.length - 1].id + 1;
         }

         const producto = {
             ...product,
             id: id
         };

         products.push(producto)

         try {
             const saveObj = await fs.promises.writeFile(this.fileName, JSON.stringify(products, null, 2));
             console.log(`Producto añadido con exito, ID: ${id}`)
             return id;
         } catch (error) {
             throw new Error(`Error en carga de producto: ${error}`);
         }
    }
    async getById(id) {
        try {
            const products = await this.getAll();
            const getID = products.find(product => product.id === id )
            console.log(getID)
            return getID
        } catch (error) {
            console.log(`Error al leer el ID del producto: ${error}`);
        }
    }
    async getAll() {
        try {
            const products = await fs.promises.readFile(this.fileName, 'utf-8');
            return JSON.parse(products)
            
        } catch (error) {
            console.log(`Error al leer el producto: ${error}, ${[]}`);
        }
    }
    async deleteById(id) {
        const products = await this.getAll();
        console.log(products)
        const removeID = products.findIndex(ids => ids.id == id)
        console.log(removeID)
        products.splice(removeID, 1);
  

        try {
           await fs.promises.writeFile(this.fileName, JSON.stringify(products, null, 2))
            console.log(`Archivo eliminado con exito`)
        } catch (error) {
            console.log(`Error al remover el producto: ${error}`);
        }
    }
    async deleteAll() {
        try {
            await fs.promises.unlink(this.fileName);
            console.log('Archivo eliminado con exito')
        } catch (error) {
            throw new Error(`Error al eliminar archivo: ${error}`);
        }
    }
}

module.exports = Contenedor;