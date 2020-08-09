//Write a function called power that accepts a base and an exponent.  The function should return the power of the base to the exponent.  This function should mimic the functionality of Math.pop() - do not owrry about negatives.

function power(base, exp){
   if(exp === 0){
       return 1
   } else {
       return base * power(base, exp - 1)
   }
}

power(2,0) // 1
power(2,2) // 4
power(2,4) // 16