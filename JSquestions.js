// Create an object called darthVader with the keys allegiance, weapon and sith and the values of empire, lightsabre and true. Finally log darthVader

 let darthVader = {
     allegiance: "Empire",
     weapon: "lightsaber",
     sith: true
 };

console.log(darthVader);

// Create the following log statements using the darthVader Object

// Darth Vader's allegiance is to the Empire;

// Darth Vader's weapon of choice is a lightsabre;

// Darth Vader is a sith? true;

// Darth Vader is a Jedi? false;

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// Create an array with the name myArray with 2 elements hello,everyone..

// Next print the length of the array

// Next use the push() method to add 3 elements to the array

// Next print the length of the array

// Next use shift() to remove an element

// Finally print the contents of the array using a for of loop.

let myArray = ["hello","everyone"]
console.log(myArray.length)
console.log(myArray.push("my", "name","is"))
console.log(myArray.length)
console.log(myArray.shift())
console.log(myArray.length)
// this is the same as iterating through each element in the array will print all eleme ts in the array
for(let allElements of myArray)
console.log(allElements)