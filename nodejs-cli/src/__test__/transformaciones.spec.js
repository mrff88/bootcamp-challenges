const { duplicar, mayor, menor, sumar } = require('../utils/transformaciones')

describe('duplicar', () => {
    it('should return an array with the elements duplicated', () => {
        // Arrange
        const array = [2,6]

        // Act
        const result = duplicar(array)

        // Assert
        expect(result[0]).toBe(4)
        expect(result[1]).toBe(12)
    })
})

describe('mayor', () => {
    it('should return the biggest number', () => {
        // Arrange
        const array = [2,6]

        // Act
        const result = mayor(array)

        // Assert
        expect(result).toBe(6)
    })
})

describe('menor', () => {
    it('should return the smallest number', () => {
        // Arrange
        const array = [2,6]

        // Act
        const result = menor(array)

        // Assert
        expect(result).toBe(2)
    })
})

describe('sumar', () => {
    it('should return the sum of the numbers in the array', () => {
        // Arrange
        const array = [2,6]

        // Act
        const result = sumar(array)

        // Assert
        expect(result).toBe(8)
    })
})