
// Objects

// DataTypes

            // Numbers
            // BigInt
            // String
            // Object
            // Boolean
            // null
            // Array
            // NaN
            // undefined

// JSON  -- javascript object notation, links front end to backend - links front end to API

//  two ways to create an object, same result

let bmwCar = new Object();
let renaultCar  = {};

// example with it filled in 

let kyCar = {
    name: "Super Car",
    make: "Bmw",
    model: "M5 cs",
    year: "2019",
    colour: "lilac",
    "greeting":"hello"
}
console.log(kyCar)

// Dot notation object.variable/function()
// Bracket notation

console.log(kyCar.colour)
console.log(kyCar["greeting"])

//  same example above but you can have multiple arrays in the object

let dansCars = {
    car:{
    name: "Sports Car",
    make: "Mercedes",
    model: "C63",
    year: "2016",
    colour: "Blue",
    "greeting":"hello"
    }
}
//  can add extra to end of the list 
dansCars ["Engine"] = " V8 TURBO"
console.log(dansCars.car)
console.log(dansCars.car.name)

// make an array to store cars

let garage = [ kyCar,dansCars, {"make":"Renault", "model":"Clio"}]
console.log(garage)
console.log("\n")  // new line

// ENHANCED FOR LOOP
// initialisation , condition, after effect
//  shows all the makes of all the cars in the garage
for (let car in garage) {
    console.log(garage[car].make)
}

