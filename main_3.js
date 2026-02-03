//Property values in an object can be other objects:

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}
console.log(myObj.myCars["car1"]);
console.log(myObj.myCars.car2);
console.log(myObj["myCars"]["car3"]);

let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2]);