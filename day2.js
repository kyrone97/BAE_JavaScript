
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

let massiveJSON = {
    "smallerJSON": {
        "students": [{
            "name": "Dan",
            "dob": "128412",
            "location": "Barcelona"
        }, {
            "name": "Cansu",
            "dob":"1839128",
            "location": "Peru"
        }
    ]}
}

console.log(massiveJSON)
// JSON.stringify
// Target a specific student to print out

let getDan = JSON.stringify(massiveJSON.smallerJSON.students[0])

console.log(getDan)

let getCansu = JSON.stringify(massiveJSON.smallerJSON.students[1])

console.log(getCansu)

// JSON.parse

let cookey = ` {"name":"Chris"}`

// turning the string into an object

let parse = JSON.parse(cookey)
console.log(parse)

