interface CelestialBody {
    name: string
    mass: number
}

interface Star extends CelestialBody {
    age: number
    planets: PlanetInfo[]
}

interface PlanetInfo extends CelestialBody {
    population: number
    createSattelite: (name: string) => void
}

let sun: Star

sun.name = 'Sol'
sun.mass = 1.989 * (10 ** 30)
sun.age = 4.603 * (10 ** 9)
sun.planets = []

class MilkyWayPlanet implements PlanetInfo {
    name: string
    mass: number
    population: number

    constructor(name: string, mass: number, population: number) {
        this.name = name
        this.mass = mass
        this.population = population
    }

    createSattelite(name: string) {
        // ..
    }
}

// adicionando novos tipo a uma interface já existente
interface PlanetInfo {
    satellites?: string[]
}