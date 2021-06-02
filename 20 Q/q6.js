/** Q6
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.
 
 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]
 
 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]
 
 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */
 function sortArray(arr){
    let i, len = arr.length, el, j;
  
    for(i = 1; i<len; i++){
      el = arr[i];
      j = i;
  
      while(j>0 && arr[j-1]>el){
        arr[j] = arr[j-1];
        j--;
     }
  
     arr[j] = el;
    }
  
    return arr;
  }
  console.log(sortArray([2, -5, 1, 4, 7, 8]))
  console.log(sortArray([38, 57, 45, 18, 47, 39]))
  console.log(sortArray([23, 15, 34, 17, -28]))