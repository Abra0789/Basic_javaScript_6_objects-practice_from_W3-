//Values are written as properties (key:value pairs):

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
console.log(person);

//Car Properties - car.name = Fiat
//Car Methods - car.start()
//Different cars have the same properties, but the property values can differ from car to car.
//Different cars have the same methods, but the methods can be performed at different times.

//car.start()
//car.drive()
//car.brake()
const car = {
  type: "Fiat",
  model: "500",
  color: "white"
};

console.log(car.type);

//output: Fiat - In website

//type, model, and color are properties

//"Fiat", 500, and "white" are property values

//using empty objects
// Create an Object
const perso = {};

// Add Properties
perso.firstName = "John";
perso.lastName = "Doe";
perso.age = 50;
perso.eyeColor = "blue";

console.log(perso);


// Using new objects
const p = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
});
console.log(p);

//Dot notation
//objectName.propertyName
//person.firstName;

//Bracket notation
//objectName["propertyName"]
//person["firstName"];



//Objects can also have methods.

//Object methods are actions that can be performed on objects.

//Object methods are function definitions stored as property values:

const per = {
  firstName: "John",
  lastName : "Doe",
  age      : 50,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(per);


//In the example above, this refers to the person object:

//this.firstName means the firstName property of person.

//this.lastName means the lastName property of person.

//In an object method, this refers to the object.

// Create an Object
const pers = {
  name: "John",
  age: 30,
  city: "New York"
};

let text = pers;
console.log(text);







// Create an Object
const human = {
  name: "John",
  age: 30,
  city: "New York"
};

// Add Properties
let txt = human.name + "," + person.age + "," + human.city;
console.log(txt);