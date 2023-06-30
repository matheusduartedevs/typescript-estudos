type PlanetSituation = 'Habitado' | 'Habitável' | 'Inabitável' | 'Inexplorado'

type PlanetCoordinates = [number, number, number, number]

type CreatePlanet = {
    name: string,
    coordinates: PlanetCoordinates
    situation: PlanetSituation,
    satellites: string[]
}

const planets: CreatePlanet[] = []

function addPlanet(name: string, coordinates: PlanetCoordinates, situation: PlanetSituation) {
    planets.push({
        name,
        coordinates,
        situation,
        satellites: []
    })

    alert(`O planeta ${name} foi registrado com sucesso`)
}

function findPlanet(name: string) {
    const planet = planets.find(planet => planet.name === name)

    return planet ?? false
}

function updateSituation(situation: PlanetSituation, planet: CreatePlanet) {
    planet.situation = situation

    alert(`A situação do planeta ${planet.name} foi atualizada para ${situation}`)
}

function addSatellite(name: string, planet: CreatePlanet) {
    planet.satellites.push(name)

    alert(`O satélite ${name} foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite(name: string, planet: CreatePlanet) {
    planet.satellites = planet.satellites.filter(satellite => satellite !== name)

    alert(`O satélite ${name} fooi removido do planeta ${planet.name}`)
}