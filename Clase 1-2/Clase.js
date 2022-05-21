class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getFullName(){
        return `El nombre completo del usuario es: ${this.nombre} ${this.apellido}`;
    };

    addMascota(mascota){
        this.mascotas.push(mascota);
        return `Las mascotas son: ${this.mascotas}`;
    };

    countMascotas(){
        return this.mascotas.length;
    };

    addBook(nombre, autor){
        this.libros.push({ nombre: nombre, autor: autor });
        return `Libro añadido con éxito: ${nombre} de ${autor}`
    };

    getBookNames(){
        for(const libro of this.libros){
            return libro.nombre
        }
    }
}

const usuario = new Usuario('Lucas', 'Martinez', [] , [] )

console.log(usuario.getFullName())
console.log(usuario.addMascota('Leggy'))
console.log(usuario.countMascotas())
console.log(usuario.addBook('JavaScript Guia Completa', 'Alessandra Salvaggio'))
console.log(usuario.getBookNames())
