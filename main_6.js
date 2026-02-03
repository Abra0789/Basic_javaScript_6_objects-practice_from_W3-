//object constructor
//create many objects of the same type
//To create an object type we use an object constructor function.

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

console.log(myFather);
//in this constructor this has no value

// Use new Person() to create many new Person objects:
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

console.log(myMother);
console.log(mySister);
console.log(mySelf);



//A constructor function can also have methods:

function Per(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;

  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}
const myDad = new Per("John", "Doe", 50, "blue");
console.log(myDad);


//error type
const myMom = new Person("Sally", "Rally", 48, "green");

// Add a Name Method
myMom.changeName = function (name) {
  this.lastName = name;
}

// Change Name
myMom.changeName("Doe");
console.log(myMom);

//Adding a new method must be done to the constructor function prototype:
Person.prototype.changeName = function (name) {
  this.lastName = name;
}

myMother.changeName("Doe");