const person = require('./names.js')
const hobbiesList = require('./hobbies.js')

const params = process.argv.slice(2)

function people(){
    const {firstName , lastName} = person(params[0] ?? 'Simone' ,params[1] ?? 'Domenici')
    const {hobbies} = hobbiesList(params[2] ?? 'Calcio' ,params[3] ?? 'Videogiochi' ,params[4] ?? 'Anime')
    return {
        firstName,
        lastName,
        hobbies 
    }  
}

console.log(people())