"use strict"

//Write object.keys, object.values and object.entries methods using for..in

const instance = {
    name: "Arthur",
    occupation: "King",
    century: "IX",
    country: "Great Britain",
};

function values(obj) {
    const value = [];
    for(values in obj) {
        value.push(obj[values]);
    }
    return value;
}

let  arrValues = values(instance);

console.log(arrValues);