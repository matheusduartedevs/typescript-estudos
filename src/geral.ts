// inferencia
let a: number = 10
// annotation
let b = 10

// object
const myNumbers: number[] = [1, 2, 3]

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, 'teste', ['a', 'b']]

// enum
enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}

const camisa = {
    name: 'Camisa',
    size: Size.M
}