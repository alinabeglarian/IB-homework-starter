const superagent = require('superagent')

const getTatooineResidents = () => {
    return superagent
    .get('https://swapi.co/api/planets/1/')
    .then(result => result.body)
    .then(data => data.residents)
    .catch(error => console.log(error))
}

const promiseMeAString = (input) => {
    return new Promise((resolve, reject) => {
            if (input !== null) {
                resolve('You kept the Promise!')
            }
            else {
                reject("You have failed me!")
            }
        })
}

module.exports = { getTatooineResidents, promiseMeAString }