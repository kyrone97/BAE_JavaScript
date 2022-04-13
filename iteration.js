

// function blackjack(cardOne, cardTwo){
//     if ( cardOne && cardTwo > 0){
//       if (cardOne > cardTwo && cardOne <= 21)
//       return `card one wins ${cardOne}`
//       else if ( cardTwo > cardOne && cardTwo <=21)
//       return `card two wins ${cardTwo}`
//       else if ( cardOne && cardTwo > 21)
//       return "both values are past 21"
//   }
// }

//    console.log(blackjack(10,21,))
//    console.log(blackjack(20,18,))
//    console.log(blackjack(1,22,))
//    console.log(blackjack(23,23,))

   

// //    Incorrect 
//    function uniqueSum (a, b, c) {
//        if (a=== b, b === c, a === c)
//        sum = 0  
//        else sum = a + b + c
//        return sum
      
//    }

//     console.log(uniqueSum(1,2,3,))
//     console.log(uniqueSum(3,3,3,))
//     console.log(uniqueSum(1,1,2,))

// function BlackJack()

// Ternary Example
// (1 + 1 === 2) ? console.log("True") : console.log("False")

// FizzBuzz

// % modulus - finds the remainder

function fizzBuzz(num) {
    if(num % 15 === 0 )
        return "FizzBuzz"
    else if ( num % 5 === 0) 
        return " Buzz"
    else if (num % 3 === 0)
        return "Fizz" 
    else 
        return num
    
}
console.log(fizzBuzz(3))

//  we no longer want a parameter -- print first 100 numbers (use for loop on above code)

function fizzBuzzz() {
    for (let i = 0; i <= 100; i++){

    if (i === 0)
        console.log(0)
    else if(i % 15 === 0 )
        console.log("FizzBuzz")
    else if ( i % 5 === 0) 
        console.log("Buzz")
    else if ( i % 3 === 0)
        console.log("Fizz") 
    else 
        console.log(i)
    }
}
fizzBuzzz()