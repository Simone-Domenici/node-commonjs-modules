const person = require('./names.js')
const hobbiesList = require('./hobbies.js')

function people(){
    const {firstName , lastName} = person('Simone' , 'Domenici')
    const {hobbies} = hobbiesList('Calcio' , 'Videogiochi' , 'Anime')
    return {
        firstName,
        lastName,
        hobbies 
    }  
}

console.log(people())