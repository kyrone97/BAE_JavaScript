// FOR LOOP EXAMPLE

// for ([initial - expression]; [condition]; [iterator]) {
//   statement;
// }
// Below is an example in which the variable 'i' is incremented at each iteration.

for (let i = 0; i < 10; i++) {
   console.log(i);
 }
// Lets break this down...

// Declare a variable i and initialise it to 0.
// Set the condition to execute the loop until i is not < 10.
// Increment the value of i
// As the condition is satisfied, we are going to print out the value of i to the console
// Repeat until the condition is no longer satisfied i.e. when i=10;

// WHILE LOOPS

let puppies = 0;
let notEnoughPups = true;

while (notEnoughPups) {
  console.log("Another pup");
  puppies++;

  if (puppies > 238) {
    notEnoughPups = false;
  }
}
console.log("Oh so many puppies!");

// Lets go through the code line by line:

// Declare and initialise puppies to 0
// Declare and initialise notEnoughPups to true
// While notEnoughPups is true:
// Print to the console and increment the value of puppies
// Check whether the value of puppies is greater than 238
// If the condition is satisfied then set notEnoughPups to false
// If not, repeat again
// The while loop will repeat 237 times before the final console.log() statement is executed.

// Exercise one 

let k = 100;
while (k <= 200) {
  k++;
  console.log(`k = ${k}`);
}

// Exercise two

let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}

// Exercise Three
 for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 } 

//  Exercise five
let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}