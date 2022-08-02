const { Animal, Mamifero, Perro } = require('../5. Objetos & Clases II/ejercitacion')

describe('Objetos & Clases II', () => {
    describe('Clase Animal', () => {
        it('Debería retornar un constructor de animal que construya correctamente objetos Animal', () => {
            const animal = new Animal('Kala', 5)
            expect(animal.nombre).toEqual('Kala')
            expect(animal.edad).toEqual(5)
        })

        it('Debería tener un método gruñir que retorne *Gruñido*', () => {
            const animal = new Animal('Kala', 5)
            
            expect(animal.gruñir()).toEqual('*Gruñido*')
        })
    })

    describe('Clase Mamifero', () => {
        it('Debería retornar el constructor de la clase padre correctamente para construir objetos Mamifero', () => {
            const mamifero = new Mamifero('Kala', 5)

            expect(mamifero.nombre).toEqual('Kala')
            expect(mamifero.edad).toEqual(5)
        })

        it('Debería retornar adicionalmente a las propiedades de la clase Animal la propiedad sangre_caliente', () => {
            const mamifero = new Mamifero('Kala', 5)

            expect(mamifero.sangre_caliente).toEqual(true)
        })

        it('Debería retornar adicionalmente a las propiedades de la clase Animal la propiedad domesticado', () => {
            const mamifero = new Mamifero('Kala', 5)

            expect(mamifero.domesticado).toEqual(undefined)
        })
    })

    describe('Clase Perro', () => {
        it('Debería retornar el constructor de la clase padre correctamente para construir objetos Perro', () => {
            const perro = new Perro('Kala', 5, 'Juan')

            expect(perro.nombre).toEqual('Kala')
            expect(perro.edad).toEqual(5)
        })

        it('Debería retornar su propio constructor de clase sobrescribiendo al padre correctamente para construir objetos Perro', () => {
            const perro = new Perro('Kala', 5, 'Juan')

            expect(perro.sangre_caliente).toEqual(true)
            expect(perro.domesticado).toEqual(true)
            expect(perro.dueño).toEqual('Juan')
        })

        it('Debería sobrescribir el método de su clase abuela retornando "¡Grrr, grrr!" al invocar .gruñir()', () => {
            const perro = new Perro('Kala', 5, 'Juan')

            expect(perro.gruñir()).toEqual('¡Grrr, grrr!')
        })

        it('Debería definir su propio método .jugar() que reciba una string por parámetro y retorne la frase correctamente', () => {
            const perro = new Perro('Kala', 5, 'Juan')

            expect(perro.jugar('pelota')).toEqual('¡Jugando con pelota!')
            expect(perro.jugar('rama')).toEqual('¡Jugando con rama!')
            expect(perro.jugar('medias')).toEqual('¡Jugando con medias!')
        })
    })
})