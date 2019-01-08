//Destructuring a process in ES6 where we extract values into variables from data stored in objects and arrays

/*We create an object person and pass in a first and last property. Then we extract the values and map them to new variables firstname and lastname.

const {first:firstname}=person

The above expression translates to "Extract property first from object person and map it to a new variable firstname

*/
const person={"first":"David","last":"Dut"};
const {first:firstname,last:lastname}=person;
console.log(firstname);
console.log(lastname);
