var request = require('request');
const url = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonDetails = (pokemon) => {
    return new Promise((resolve,reject) => {
        request(`${url}${pokemon}`,(error,response,body) => {
            if(error) {
                console.log(error);
                console.log(response && response.statusCode);
                reject();
            } else {
                let {name,id} = JSON.parse(body)
                resolve(`${name} , ${id}`);
            }
        })        
    })
}

getPokemonDetails('ditto').then((data) => {
    console.log(data);
    return getPokemonDetails('pikachu')
}).then((data) => {
    console.log(data);
    return getPokemonDetails('axew')
}).then((data) => {
    console.log(data);
})