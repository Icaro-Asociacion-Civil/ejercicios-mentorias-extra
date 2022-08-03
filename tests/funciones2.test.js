const { comidasFavoritas, clienteActivo, soloPuntas, palabra, divisores } = require('../3. Funciones II/ejercitacion')

describe('Funciones II', () => {
    describe('comidasFavoritas', () => {
        const john = {
            comidas: ['pizza', 'empanadas', 'sopa', 'guiso', 'medialunas', 'hamburguesas']
        }
        const joe = {
            comidas: ['ensalada', 'tostado', 'medialunas', 'papas fritas', 'empanadas', 'guiso', 'asado']
        }
        const mary = {
            comidas: ['hamburguesas', 'tostado', 'papas fritas', 'pizza', 'sopa', 'asado']
        }

        it('Debería retornar: ["empanadas", "guiso", "medialunas"]', () => {
            expect(comidasFavoritas(john, joe)).toEqual(expect.arrayContaining(["empanadas", "guiso", "medialunas"]))
        })

        it('Debería retornar: ["hamburguesas", "pizza", "sopa"]', () => {
            expect(comidasFavoritas(john, mary)).toEqual(expect.arrayContaining(["hamburguesas", "pizza", "sopa"]))
        })

        it('Debería retornar: ["asado", "papas fritas", "tostado"]', () => {
            expect(comidasFavoritas(joe, mary)).toEqual(expect.arrayContaining(["asado", "papas fritas", "tostado"]))
        })
    })

    describe('clienteActivo', () => {
        const clientes = {
            juan: {
                province: 'CABA',
                age: 24,
                suscription: false
            },
            alejandra: {
                province: 'Córdoba',
                age: 25,
                suscription: true 
            },
            micaela: {
                province: 'Córdoba',
                age: 27,
                suscription: true
            },
            nicolas: {
                province: 'Buenos Aires',
                age: 30,
                suscription: false
            },
            gaston: {
                province: 'Tucumán',
                age: 21,
                suscription: false
            },
            martin: {
                province: 'Chubut',
                age: 35,
                suscription: true
            }
        }

        const clientes2 = {
            dario: {
                province: 'Córdoba',
                age: 31,
                suscription: true
            },
            octavio: {
                province: 'Córdoba',
                age: 27,
                suscription: false
            },
            julian: {
                province: 'Buenos Aires',
                age: 24,
                suscription: true
            },
            milagros: {
                province: 'Santa Cruz',
                age: 22,
                suscription: true
            },
            sofia: {
                province: 'Córdoba',
                age: 22,
                suscription: false
            },
            lucia: {
                province: 'Entre Ríos',
                age: 21,
                suscription: true
            },
            ignacio: {
                province: 'Salta',
                age: 36,
                suscription: true
            },
            agustina: {
                province: 'Misiones',
                age: 18,
                suscription: false
            }
        }

        it ('Debería retornar 3', () => {
            expect(clienteActivo(clientes)).toEqual(3)
        })

        it('Debería retornar 5', () => {
            expect(clienteActivo(clientes2)).toEqual(5)
        })
    })

    describe('soloPuntas', () => {
        const nums1 = [3, 5, 77, 32, 44, 12, 1]
        const nums2 = [55, 17, 14, 82, 34, 125, 101]

        it('Debería retonar [1, 77]', () => {
            expect(soloPuntas(nums1)).toEqual([1, 77])
        })

        it('Debería retornar [14, 125]', () => {
            expect(soloPuntas(nums2)).toEqual([14, 125])
        })
    })

    describe('palabra', () => {
        const palabra1 = ["Aquí iría una de las frases", "luego continúa con otra frase de este estilo", "y finalmente una mas corta"]
        const palabra2 = ["Supercalifrajilísticoespialidoso", "valen las palabras sueltas", "pero por supuesto que valen"]

        it('Debería retornar "finalmente"', () => {
            expect(palabra(palabra1)).toEqual('finalmente')
        })

        it('Debería retornar "Supercalifrajilísticoespialidoso"', () => {
            expect(palabra(palabra2)).toEqual('Supercalifrajilísticoespialidoso')
        })
    })

    describe('divisores', () => {
        it('Debería retornar: [2, 4]', () => {
            expect(divisores(8)).toEqual([2, 4])
        })

        it('Debería retornar: [3, 9]', () => {
            expect(divisores(27)).toEqual([3, 9])
        })

        it('Debería retornar: "Número primo"', () => {
            expect(divisores(7)).toEqual('Número primo')
        })
    })
})