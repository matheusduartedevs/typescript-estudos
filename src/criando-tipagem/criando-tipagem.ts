// tipo literal
let literal: 'Hello, World'

// literal = 'Hi, World' => erro

// union types
let option: number | boolean
option = 2
option = false
//option = "Yes" => erro

// aliases
type Planet = 'Mercúrio' | 'Vênus' | 'Terra' | 'Marte' | 'Júpiter' | 'Saturno' | 'Urano' | 'Netuno'

let planet: Planet

if (planet === 'Terra') {
    console.log('Planeta Terra')
}

type GreetingCallback = (name:string) => void

function greet(callback:GreetingCallback) {
    let name = 'matheus'

    callback(name)
}