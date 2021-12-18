"use strict"

//Write object.keys, object.values and object.entries methods using for..in

const instance = {
    name: "Arthur",
    occupation: "King",
    century: "IX",
    country: "Great Britain",
};

function object_keys(obj) {
    const vars = [];
    for(keys in obj) {
        vars.push(keys);
    }
    return vars;
};

let newArr = object_keys(instance);
console.log(newArr);