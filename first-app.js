// console.log("Hello from Node.JS")
// const fs = require('fs');//fs means file system
// fs.writeFileSync('hello.txt',"Hello from Node JS");
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {firstName, lastName} = person;
  console.log(firstName,lastName);
