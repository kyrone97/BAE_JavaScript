
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

let kyCars = {
    car:{
    name: "Super Car",
    make: "Bmw",
    model: "M5 cs",
    year: "2019",
    colour: "lilac",
    "greeting":"hello"
    }
}
//  can add extra to end of the list 
kyCars ["Engine"] = " V8 TURBO"
console.log(kyCars.car)
console.log(kyCars.car.name)