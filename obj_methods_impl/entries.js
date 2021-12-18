"use strict"

//Write object.keys, object.values and object.entries methods using for..in

const instance = {
    name: "Arthur",
    occupation: "King",
    century: "IX",
    country: "Great Britain",
};
  
  
function entries(obj) {
   const mainArr = [];
   let arr = [];
   for(info in obj) {
     arr.push(info);
     arr.push(obj[info]);
     mainArr.push(arr);
     arr = [];
   }
   return mainArr;
}
  
  console.log(entries(instance));