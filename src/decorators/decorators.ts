function Decorator() {
    return function (target, key, descriptor) {
        descriptor.value = function (value: number) {
            console.log(`Calculando ${value} elevado ao quadrado`)
            return value ** 2
        }
    }
}

class Planeta {
    name: string

    constructor(name: string) {
        this.name = name
    }

    @Decorator()
    calculate(value: number) {
        //..

        return value * 2
    }
}

const planeta = new Planeta('Terra')

const result = planeta.calculate(5)

console.log(`Resultado: ${result}`)