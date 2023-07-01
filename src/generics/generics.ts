function first(array) {
    return array[0]
}

function last<ArrayType>(array: ArrayType[]): ArrayType | undefined {
    return array[array.length - 1]
}

const names = ['Matheus', 'Lucas', 'Miguel', 'Ana']

const firstName = first(names)

const lastName = last(names)

interface Ship {
    name: string
    pilot: string
}

interface FighterClass extends Ship {
    weapons: number
    shields: number
}

interface Transport extends Ship {
    capacity: number
}

interface Speeder extends Ship {
    speed: number
    acceleration: number
}

function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) {
    const newShip = ship
    newShip.name = newName
    newShip.pilot = newPilot
    return newShip
}

const falcon: Ship = {
    name: 'Millenium Falcon',
    pilot: 'Han'
}

const lukeShip: FighterClass = {
    name: 'Red Five',
    pilot: 'Luke',
    weapons: 4,
    shields: 1
}

const copy1 = cloneShip(falcon, 'Milano', 'Peter')
const copy2 = cloneShip(lukeShip, 'Black One', 'Poe')