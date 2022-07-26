// La función recibe un objeto 'nave' como parámetro. Y su función es desarmar los componentes de la 'nave', es
// decir sus propiedades. Además tiene un método llamado 'encendido' que devuelve otro objeto más con información
// sobre el encendido de la 'nave'.
// La función debe retornar un array con los valores de cada propiedad de la 'nave' que recibe como parámetro. Y
// un subarray con los valores de las propiedades del objeto devuelto por su método.
function desarmar(nave) {
    // AQUÍ TU CÓDIGO

}

// La siguiente clase llamada 'Persona' debe construir una persona con los siguientes parámetros recibidos por su
// constructor: nombre (string), edad (number), nacionalidad (string) y residencia (string).
function crearClasePersona () {
    class Persona {
        // AQUÍ TU CÓDIGO





        // Creo un método para la clase 'Persona' construida arriba que le asigne a la clase una profesion (string) recibida como
        // parámetro. Y llámalo defineProfesion.





        // Crea otro método para la clase 'Persona' construida más arriba que le asigne  a la case hobbies (array de strings)
        // recibidos como parámetro a la clase. Y llámalo defineHobbies.




    }

    return Persona
}

// La siguiente función recibe un número variable de parámetros en forma de arrays. Cada array contiene los valores
// necesarios para crear un objeto Persona (clase construida más arriba). E incluso algunos arrays contienen los 
// valores para ejecutar algunos de los métodos de la clase declarada más arriba.
// En cualquier caso los parámetros siempre vendrán en orden: [nombre, edad, nacionalidad, residencia, profesion, [...hobbies]]
// Ej: ['Juan', 25, 'argentino', 'CABA', 'desarrollador web', ['jugar al futbol', 'ver series', 'salir con amigos']]
// Escribe el código necesario para crear objetos Personas a partir de los parámetros recibidos y devuelve un array
// con todos los miembros creados a partir de los arrays recibidos como parámetros.
// ¡ATENCIÓN! si te confunde la sintaxis del parámetro recibida investigá sobre el concepto de Rest Parameters (ES6)
function crearFamilia(...miembros) {
    // #TIP: Si realizaste correctamente el ejercicio anterior, deberías poder utilizar la clase 'Persona' al asginar
    // dentro de una variable el resultado de invocar la funcion 'crearClasePersona' y luego, invocando esa misma
    // variable crear nuevos objetos 'Persona'.
    // AQUÍ TU CÓDIGO

}


// No tocar el código debajo.

module.exports = {
    desarmar,
    crearClasePersona,
    crearFamilia
}