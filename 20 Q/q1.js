/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday an we sell at Wednesday
 */

function bestProfit(arr) {
    let min=arr[0];
    let index=0;
    let max=0;
    for (let i = 0; i <arr.length; i++) {
        if (arr[i]<min) {
            min=arr[i];
            index=i;
        }
    }
    for(let j=index; j <arr.length ; j++){
        if (arr[j]>max) {
            max=arr[j];
        }
    }
    return ([min,max]);
}

console.log(bestProfit([150, 146, 142, 143, 145, 144]))