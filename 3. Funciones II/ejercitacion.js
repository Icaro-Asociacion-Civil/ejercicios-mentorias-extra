// La función recibe dos objetos como parámetros, llamados 'john' y 'joe'. Cada objeto tiene una propiedad llamada
// 'comidas' que contiene un array de strings listando las comidas favoritas de cada persona.
// Escribe el código necesario para que la función retorne un único array con las comidas favoritas en común que
// tienen 'john' y 'joe'.
// Ej: 
// const john = {
//     comidas: ['pizza', 'empanadas', 'sopa', 'guiso', 'medialunas', 'hamburguesas']
// }
// const joe = {
//  comidas: ['ensalada', 'tostado', 'medialunas', 'papas fritas', 'empanadas', 'guiso']
// }
// debería retornar: ['medialunas', 'empanadas', 'guiso']
function comidasFavoritas(john, joe) {
    // TU CÓDIGO AQUÍ

}

// La función recibe un objeto literal 'clientes' y en dónde cada propiedad de dicho objeto es otro objeto
// representando un cliente.
// Cada cliente entre sus propiedades tiene una llamada 'suscription' cuyos valores posibles son true o false.
// La función debe retornar un número que represente la cantidad total de clientes con una suscripcción activa.
// Es decir cada cliente cuya propiedad suscription === true.
// Ej: considerando el siguiente objeto {
//     juan: {
//         province: 'CABA',
//         age: 24,
//         suscription: false
//     },
//     alejandra: {
//         province: 'Córdoba',
//         age: 25,
//         suscription: true 
//     },
//     micaela: {
//         province: 'Córdoba',
//         age: 27,
//         suscription: true
//     },
//     nicolas: {
//         province: 'Buenos Aires',
//         age: 30,
//         suscription: false
//     },
//     gaston: {
//         province: 'Tucumán',
//         age: 21,
//         suscription: false
//     },
//     martin: {
//         province: 'Chubut',
//         age: 35,
//         suscription: true
//     }
// }
// la función debería retornar 3, ya que solamente 3 'usuarios' tienen una propiedad 'suscription' === true.
function clienteActivo(clientes) {
    // TU CÓDIGO AQUÍ

}

// La función recibe un array de números llamado 'numeros' como parámetro. Y debe devolver un array con el
// menor número en su primera posición y el mayor número en su segunda posición.
// Ej: la función recibe el [3, 5, 77, 32, 44, 12, 1] como parámetro. Y debe retornar [1, 77] ya que son el
// menor y el mayor número respectivamente, dentro del parámetro recibido. 
function soloPuntas(numeros) {
    // TU CÓDIGO AQUÍ

}

// La función recibe un array de strings con distintas frases como parámetro. Y debes escribir el código necesario
// para que de entre todas esas frases la función retorne la palabra más extensa.
// Ej: ["Aquí iría una de las frases", "luego continúa con otra frase de este estilo", "y finalmente una mas corta."]
// la función debería retornar la palabra: 'finalmente' ya que es la más extensa en letras (10) 
// de entre todas las palabras de las frases recibidas dentro del array.
function palabra(frases) {
    // TU CÓDIGO AQUÍ

}

// La función recibe un número entero 'n' como parámetro. Y debes escribir el código necesario para que retorne
// un array con todos los números enteros que sean divisores (de resto 0) del número recibido como parámetro.
// Exceptuando tanto el número 1 y el mismo número 'n'.
// En caso de que no haya divisores de resto 0 la función deberá retornar el string 'Número primo'.
// Ej: 27 retorna: [3, 9]
//     8 retorna: [2, 4]
//     7 retorna: 'Número primo'
function divisores(n) {
    // TU CÓDIGO AQUÍ

}
