/** Q12
  * Create a function that concatenates n input arrays, where n is variable.
 
 Examples
 concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]
 
 concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]
 
 concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
 Notes
 Arrays should be concatenated in order of the arguments.
  */
 function concat(){
//      let sumArr=[];
//     for(let arg = 0; arg < arguments.length; ++ arg)
//     {
//         let arr = arguments[arg];
//         console.log(arguments[arg])
//         for(let i = 0; i < arr.length; ++ i)
//         {   
//              let element = arr[i];
//              console.log(arr)
//             sumArr[i] += element;
//     return sumArr;
//  }
//     }
// }

let arr=[];
for(let arg = 0; arg < arguments.length; ++ arg){
    arr[arg]=arguments[arg];
}
    let merged = [].concat.apply([], arr)
    return merged
 }
 console.log(concat([1],[4],[6],[8,4]))
 console.log(concat([4, 4, 4, 4, 4]))
 console.log(concat([1, 2], [3, 4]))
