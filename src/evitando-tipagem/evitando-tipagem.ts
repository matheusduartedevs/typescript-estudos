function sendSpaceship2(spaceship: { pilot: string, copilot?:string }) {
    // ...
}

sendSpaceship2({ pilot: 'Han Solo', copilot: 'Chewbacca' })

sendSpaceship2({ pilot: 'Luke' }) // daria erro sem o '?:'

let input: unknown

input = 'teste'
input = 20
input = []