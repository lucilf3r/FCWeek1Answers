/** Q11
  * Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
 
 Example
 fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
 
 fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 Notes
 Make sure to return an array.
  */

 function fizzBuzz(num){
     let arr=[];
    for(let i=0; i<num; i++){
        let j=i+1;
        if(j%3==0 && j%5==0){
            arr[i]="FizzBuzz";
        } else if(j%3==0) {
            arr[i]="Fizz";
        } else if(j%5==0){
            arr[i]="Buzz"
        }else{
            arr[i]=j;
        }
    }
    return arr;
 }

 console.log(fizzBuzz(10))
 console.log(fizzBuzz(15))