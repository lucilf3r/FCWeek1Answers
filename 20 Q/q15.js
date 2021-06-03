/** Q15
  * Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
 
 Examples
 testJackpot(["@", "@", "@", "@"]) ➞ true
 
 testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
 
 testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
 
 testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
 
 testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
 Notes
 The elements must be exactly identical for there to be a jackpot.
  */

 function testJackpot(arr){
    for(var i=1; i<arr.length; i++){
        if(arr[0]!==arr[i]){
            return false;
        }
    }
    return true;
 }

 console.log(testJackpot(["@", "@", "@", "@"]))
 console.log(testJackpot(["abc", "abc", "abc", "abc"]))
 console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))
 console.log(testJackpot(["SS", "SS", "SS", "Ss"]))