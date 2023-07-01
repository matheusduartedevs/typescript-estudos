import { Spaceship } from "./export"

interface BattleSpaceship extends Spaceship {
    weapons: number
}

let xwing: BattleSpaceship = {
    name: 'X-wing',
    pilot: 'Luke',
    speed: 50,
    weapons: 4
}