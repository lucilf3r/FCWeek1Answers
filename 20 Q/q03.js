/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */
 function HowManyPairs(shoes) {
     let right=0;
     let left=0;
     let pairs=0;
     for(i=0; i<shoes.length; i++){
         if(shoes[i]=="R"){
             right++;
         } else {
             left++;
         }
         if(right==left){
             pairs++
             right=0;
             left=0;
         }
     }
     return pairs;
 }

 console.log(HowManyPairs("RLRLRRLL"))