//Display Objects

// Create an Object that added in string
const person = {
  name: "John",
  age: 30,
  city: "New York"
};


// Add Properties
let text = person.name + "," + person.age + "," + person.city;
console.log(text);

// using loops
// Create an Object
const prsn = {
  name: "John",
  age: 30,
  city: "New York"
};

let txt = "";
for (let x in prsn) {
  txt += prsn[x] + " ";  
}
//x is loop variable
//x is the key in the object (from the for...in loop).

//For the first iteration: x = "name", so prsn[x] = prsn["name"] = "John"

//Second iteration: x = "age", so prsn[x] = 30

//Third iteration: x = "city", so prsn[x] = "New York"

console.log(txt);



//Using Object.values()
//Object.values() creates an array from the property values:

const per = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array
const myArray = Object.values(per);

// Stringify the Array
let tx = myArray.toString();
console.log(tx);


//Object.entries() makes it simple to use objects in loops:
const fruits = {Bananas:300, Oranges:200, Apples:500};

let t = "";
for (let [fruit, value] of Object.entries(fruits)) {
  t += fruit + ": " + value + " ";
}
console.log(t);



//The result will be a string written in JSON notation:
//{"name":"John","age":50,"city":"New York"}


const pson = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let texts = JSON.stringify(pson);
console.log(texts);