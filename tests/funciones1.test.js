const { operar, semaforo, pintorAutomatico, calcularPromedio, ordenarArray } = require('../2. Funciones I/ejercitacion')

describe('Funciones I', () => {
    describe('operar', () => {
        it('Debería retornar 10 para 7,3 y "s"', () => {
            expect(operar(7, 3, 's')).toEqual(10)
        })

        it('Debería retornar 4 para 20, 16 y "r"', () => {
            expect(operar(20, 16, 'r')).toEqul(4)
        })

        it('Debería retornar 60 para 20, 3 y "m"', () => {
            expect(operar(20, 3, 'm')).toEqual(60)
        })

        it('Debería retonar 13 para 39, 3 y "d"', () => {
            expect(operar(39, 3, 'd')).toEqual(13)
        })

        it('Debería retornar 125 para 5, 3 y "p"', () => {
            expect(operar(5, 3, 'p')).toEqual(125)
        })

        it('Debería retornar 3 para 9, 2 y "rz"', () => {
            expect(operar(9, 2, 'rz')).toEqual(3)
        })
    })

    describe('semaforo', () => {
        it('Debería retornar [9, 7, 3, 1]', () => {
            expect(semaforo(3, 7, 1, 9)).toEqual([9, 7, 3, 1])
        })

        it('Debería retornar [77, 59, 32, 17]', () => {
            expect(semaforo(17, 32, 59, 77)).toEqual([17, 32, 59, 77])
        })

        it('Bonus: Deberia retornar [14, 31, 41, 77]', () => {
            expect(semaforo(77, 14, 41, 31, 'reverse')).toEqual([14, 31, 41, 77])
        })
    })

    describe('pintorAutomatico', () => {
        const coches = ['gol', 'gol', 'a3', 'corolla', 'agile', 'gol', 'gol', 'a3', 'gol', 'agile', 'agile', 'corolla', 'gol', 'agile', 'corolla', 'gol', 'gol', 'agile', 'agile', 'agile', 'agile', 'agile', 'a3', 'corolla', 'agile', 'a3', 'agile', 'agile' ]
        const pedido1 = {modelo: 'gol', color: 'violeta'}
        const pedido2 = {modelo: 'agile', color: 'rosa'}
        const pedido3 = {modelo: 'a3', color: 'azul'}

        it('Debería retornar 8', () => {
            expect(pintorAutomatico(coches, 'violeta', pedido1)).toEqual(8)
        })

        it('Denería retornar 3', () => {
            expect(pintorAutomatico(coches, 'blanco', pedido3)).toEqual(0)
        })

        it('Denería retornar 12', () => {
            expect(pintorAutomatico(coches, 'rosa', pedido2)).toEqual(12)
        })
    })

    describe('calcularPromedio', () => {
        const first = [11, 1, 3]
        const second = [12, 5, 7]
        const third = [3.5, 1, 4.5]

        it('Debería retornar 5', () => {
            expect(calcularPromedio(first)).toEqual(5)
        })

        it('Debería retornar 8', () => {
            expect(calcularPromedio(second)).toEqual(8)
        })

        it('Debería retornar 3', () => {
            expect(calcularPromedio(third)).toEqual(3)
        })
    })

    describe('ordenarArray', () => {
        const first = [77, 21, 31, 9, 20, 2]
        const second = [45, 23, 24, 6, 88, 82, 5, 3]

        it('Debería retornar: [2, 9, 20, 21, 31, 77]', () => {
            expect(ordenarArray(first)).toEqual([2, 9, 20, 21, 31, 77])
        })

        it('Debería retornar: [3, 5, 6, 23, 24, 45, 82, 88]', () => {
            expect(ordenarArray(second)).toEqual([3, 5, 6, 23, 24, 45, 82, 88])
        })
    })
})