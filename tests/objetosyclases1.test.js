const { desarmar, crearClasePersona, crearFamilia } = require('../4. Objetos & Clases I/ejercitacion')

describe('Objetos & Clases I', () => {
    describe('desarmar', () => {
        const nave = {
            chasis: 'XT-746',
            computadora: 'IBM-NASA-4215',
            capsula: '#482',
            motor: 'Fusión en frío',
            encendido: () => {
                return {
                    demora: '3.7 segundos',
                    combustible: '500 litros'
                }
            }
        }

        const milleniumFalcon = {
            piloto: 'Han Solo',
            copiloto: 'Chewbacca',
            forma: 'circular',
            estado: 'perseguida',
            encendido: () => {
                return {
                    hiperespacio: true,
                    destino: 'Naboo'
                }
            }
        }

        it('Debería retornar: ["#482", "Fusión en frío", "IBM-NASA-4215", "XT-746", ["3.7 segundos", "500 litros"]]', () => {
            expect(desarmar(nave)).toEqual(expect.arrayContaining(["#482", "Fusión en frío", "IBM-NASA-4215", "XT-746", ["3.7 segundos", "500 litros"]]))
        })

        it('Debería retornar: ["Chewbacca", "circular", "Han Solo", "perseguida", [true, "Naboo"]]', () => {
            expect(desarmar(milleniumFalcon)).toEqual(expect.arrayContaining(["Chewbacca", "circular", "Han Solo", "perseguida", [true, "Naboo"]]))
        })
    })

    describe('crearClasePersona', () => {
        it('Debería retornar un constructor de persona que correctamente construya objetos "Persona"', () => {
            const Persona = crearClasePersona()
            const persona = new Persona('Juan', 25, 'argentina', 'CABA')

            expect(persona.nombre).toEqual('Juan')
            expect(persona.edad).toEqual(25)
            expect(persona.nacionalidad).toEqual('argentina')
            expect(persona.residencia).toEqual('CABA')
        })

        it('Debería tener un método defineProfesion que asigne correctamente una profesion al objeto construido', () => {
            const Persona = crearClasePersona()
            const persona = new Persona('Juan', 25, 'argentina', 'CABA')
            persona.defineProfesion('desarrollador')

            expect(persona.profesion).toEqual('desarrollador')
        })

        it('Debería tener un método defineHobbies que asigne correctamente hobbies al objeto construido', () => {
            const Persona = crearClasePersona()
            const persona = new Persona('Juan', 25, 'argentina', 'CABA')
            persona.defineHobbies(['hacer deporte', 'leer', 'mirar series', 'jutarse con amigos'])

            expect(persona.hobbies).toEqual(['hacer deporte', 'leer', 'mirar series', 'jutarse con amigos'])
        })
    })

    describe('crearFamilia', () => {
        it('Debería retornar correctamente un array de objetos Personas al invocar la función', () => {
            expect(crearFamilia(['Juan', 24, 'argentino', 'CABA'], ['Andrés', 25, 'argentino', 'CABA'], ['Sol', 23, 'argentina', 'CABA'])).toEqual(expect.arrayContaining([{ nombre: 'Juan', edad: 24, nacionalidad: 'argentino', residencia: 'CABA' }, { nombre: 'Andrés', edad: 25, nacionalidad: 'argentino', residencia: 'CABA' }]))
        })

        it('Debería retornar correctamente un array de objetos Personas incluso con los valores asignados para sus métodos', () => {
            expect(crearFamilia(['Lionel', 36, 'argentino', 'Paris', 'futbolista', ['juntarse con amigos', 'jugar a la play']], ['Antonella', 35, 'argentina', 'Paris', 'modelo'])).toEqual(expect.arrayContaining([{ nombre: 'Lionel', edad: 36, nacionalidad: 'argentino', residencia: 'Paris', profesion: 'futbolista', hobbies: ['juntarse con amigos', 'jugar a la play'] }, { nombre: 'Antonella', edad: 35, nacionalidad: 'argentina', residencia: 'Paris', profesion: 'modelo' }]))
        })
    })
})