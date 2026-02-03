//Dot notation
// objectName.property
//let age = person.age;

//Bracket notation
//objectName["property"]
//let ag = person["ag"];
//person.firstname + " is " + person.age;

//Expression
//objectName[expression]
//let ages = person[x];
//person["firstname"] + " is " + person["age"];

//The property name is stored in a variable:
//person[myVariable]
//The property name is not a valid identifier:
//person["last-name"]
//Bracket notation is useful when the property name is stored in a variable

//let n1 = "firstName";
//let n2 = "lastName";

//let name = person[n2] + " " + person[n2];


//change the value of a property and adding new and delete properties:

const man = {
  firstName: "John",
  lastName : "Doe",
  age      :  50
};

man.age = 10;
man.nationality = "English";
delete man.lastName;
console.log(man);


//Use the in operator to check if a property exists in an object:
const pson = {
  
  lastName: "Doe",
};

let result = ("firstName" in pson);
console.log(result);//output: false
