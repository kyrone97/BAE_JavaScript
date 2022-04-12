function blackjack( a, b) {
  if (a > 21 && b > 21) {
      return 0;
  }else if (a > 21) {
      return b;
  } else if (b > 21) {
      return a;
  }
   
   let sumA = 21 - a;
   let sumB = 21 - b;
   
  if (sumA > sumB) {
      return b;
  } else {
      return a;
  }
   }

   console.log(blackjack(10,21,))
   console.log(blackjack(20,18,))
   console.log(blackjack(1,22,))
   console.log(blackjack(22,23,))


//    Incorrect 
   function uniqueSum (q, t, u) {
       if (q === t || t === u || q === u)
       sum === 0  
       else sum = q + t + u
       return sum
      
   }

    console.log(uniqueSum(1,2,3,))
    console.log(uniqueSum(3,3,3,))
    console.log(uniqueSum(1,1,2,))