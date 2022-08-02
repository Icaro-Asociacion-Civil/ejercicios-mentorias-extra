// Define la clase 'Animal' debajo que reciba en su constructor los parámetros: nombre (string) y edad (number);
// además define un método llamado 'gruñir' que retorne '*Gruñido*'.
class Animal {
    // AQUÍ TU CÓDIGO:

}

// Define la clase 'Mamifero' debajo que extienda la clase 'Animal' y al constructor agrégale el
// parámetro: sangre_caliente (boolean) que sea verdadero y domesticado (undefined).
class Mamifero extends Animal {
// AQUÍ TU CÓDIGO:


}

// Define la clase 'Perro' debajo que extienda la clase 'Mamifero' y al constructor agrégale el
// parámetro: dueño (string) y domesticado (boolean) que sea verdadero. Además sobrescribe extendiendo el método
// llamado 'gruñir' para que retorne '¡Grrr, grrr!'.
// Por último define un método llamado 'jugar' que reciba un parámetro (string) e imprima el string:
// '¡Jugando con [parámetro recibido]!'
class Perro extends Mamifero {
// AQUÍ TU CÓDIGO:


}


// No toques el código debajo.

module.exports = {
    Animal,
    Mamifero,
    Perro
}