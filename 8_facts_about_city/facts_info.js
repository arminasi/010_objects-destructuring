"use strict"

/*Create a function that takes an object as an argument and returns 
a string with facts about the city. The city facts will need to be
extracted from the object's three properties:*/

function cityFacts(obj) {
    let {name, population, continent} = obj;
    name = obj.name;
    population = obj.population;
    continent = obj.continent;
    return `${name} has a population of ${population} and is situated in ${continent};` 
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}));


console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
}));