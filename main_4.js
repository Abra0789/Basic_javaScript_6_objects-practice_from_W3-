//object method


//Methods are actions that can be performed on objects.

//Methods are functions stored as a property values.

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());
console.log(person.fullName(person));
//The this keyword makes it possible to use the same method with different objects.
//this.firstName refers to the firstName property of the person object
//this.lastName refers to the lastName property of the person object
//In an object method, this refers to the object.
//this lets methods access object properties
//Used alone, this refers to the global object

const p = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getId: function() {
    return this.id;
  }
};
//this- who is calling me
//person.getId() → this = person
//So this.id → person.id


//getId is a method

//It’s a function stored inside the person object.

//this refers to the object that calls the method

let number = p.getId();
console.log(number);
//2nd way to see output

const get = p.getId.bind(p);
console.log(get()); // 5566




//In the example above, this refers to the person object.
//this.firstName means the firstName property of the person object.
//this.lastName means the lastName property of the person object.




//syntax
//objectName.methodName()

//If you call a method with parentheses, it will execute as a function:
//name = person.fullName();

//If you call a method without parentheses, it will return the function definition:
//name = person.fullName;


//add a method to an object by assigning a function to a property:
//Create an Object
const per = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
};

// Add a Method
per.name = function() {
  return (this.firstName+ " " + this.lastName).toUpperCase();
};

let fullName = per.name();
console.log(fullName);