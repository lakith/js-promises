let request = require('request');
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

let pokemans = ['ditto','pikachu','axew'];
let promises  = [];

pokemans.forEach((pokemon) => {
    promises.push(getPokemonDetails(pokemon));
})

Promise.allSettled(promises).then((data) => {
    console.log("Fastest");
    console.log(data);
}).catch(e => console.log(`Custom :: ${e}`))