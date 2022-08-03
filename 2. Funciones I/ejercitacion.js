// La función operar recibe 3 parámetros, los dos primeros son valores numéricos mientras que el tercer parámetro
// es una string que puede tener distintos valores.
// La idea es que la función retorne el resultado de una operación matemática entre los dos números 
// según la string recibida por parámetro. Los valores posibles son: 's' = suma, 'r' = resta, 'm' = multiplicación,
// 'd' = división y 'p' = potencia.
// Ej: los parámetros recibidos son 3, 4 y 'm'. La función debe retonar 12 ya que es el resultado de multiplicar ('m')
// el valor de 3 y el valor de 4.
// Los parámetros recibidos son 8, 2 y 'd'. La función debe retonar 4 ya que es el resultado de dividir ('d')
// el valor de 8 y el valor de 2.
function operar(n1, n2, operador) {
    // TU CÓDIGO AQUÍ.

}

// ¿Te animás a añadir a la función 'operar' la funcionalidad de 'rz' por raíz?
// Aclaración: solo para raíz cuadrada y raíz cúbica.

// En la intersección de dos calles de doble mano cada una, hay un semáforo. Este semáforo es especial ya que se
// pone en rojo en las dos calles y las cuatro manos a la vez. Y espera para colocarse en verde con una condición
// especial: lo hace en orden según que intersección tiene más autos en espera.
// Es decir que cuenta la cantidad de autos esperando en cada intersección por la luz verde y aquella con mayor
// cantidad es la primera en la que se enciende. La segunda es la siguiente y así en orden descendente.
// Completá la siguiente función que recibe por parámetro las cantidades de autos esperando en cada una de las
// cuatro calles. Tiene que retornar un array ordenado de mayor a menor ya que este es el orden en que el semáforo
// va a colocar su luz en verde.
function semaforo(in1, in2, in3, in4) {
    // TU CÓDIGO AQUÍ.

}

// Un taller mecánico se especializa en el pintado de carrocerías. Tal es así que semanalmente reciben un lote de
// coches y deben revisar el pedido de esa semana para saber cuáles coches pintar y cuáles no.
// La función debajo recibe 3 parámetros: un array de coches (strings), un color de pintura (string) y un objeto pedido
// con dos propiedades: modelo y color.
// La función debe retornar el número de coches que se pintarán esa semana. Teniendo en cuenta que se pinten todos
// los coches cuyo modelo coincida con el del pedido. Siempre vigilando que la pintura de esa semana coincida con
// la del pedido también.
function pintorAutomatico(coches, pintura, pedido) {
    // TU CÓDIGO AQUÍ.

}

// La función recibe un array llamado 'notas' que contiene solamente valores numéricos. Escribir el código
// necesario para que la función retorne el promedio del array recibido como parámetro.
function calcularPromedio(notas) {
    // TU CÓDIGO AQUÍ.

}

// La función recibe un array llamado 'valores' que contiene solamente valores numéricos. Escribir el código
// necesario para que la función retorne otro array pero con los valores ordenados de menor a mayor.
// ¡Atención! No se puede utilizar métodos propios de los arrays como por ejemplo: .map, .sort, etcétera.
function ordenarArray(valores) {
    // TU CÓDIGO AQUÍ.

}

//
// No tocar el código debajo:
//

module.exports = {
    operar,
    semaforo,
    pintorAutomatico,
    calcularPromedio,
    ordenarArray
}
