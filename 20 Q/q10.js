/** Q10
  * Create a function that squares every digit of a number.
 
 Examples
 squareDigits(9119) ➞ 811181
 
 squareDigits(2483) ➞ 416649
 
 squareDigits(3212) ➞ 9414
 Notes
 The function receives an integer and must return an integer.
  */

 function squareDigits(arr){
     let result ="";
 
     Array.from(String(arr), Number).forEach(element => {
         let num=parseInt(element);
         result += (num*num)
     });
     return parseInt(result);
 }

 console.log(squareDigits(9119))
 console.log(squareDigits(2483))
 console.log(squareDigits(3212))