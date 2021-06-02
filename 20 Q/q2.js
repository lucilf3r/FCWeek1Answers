/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

 function CheckOverlap(t1Start, t1End, t2Start, t2End) {
     var time1= new Date(t1End);
     var time2= new Date(t2Start);
     if(time1.getTime() >= time2.getTime()){
         return("overlap")
     } else{
         return("no overlap")
     }
 }
 console.log(
    CheckOverlap(
        "5/13/2021 13:00","5/14/2021 13:00", "5/14/2021 13:00","5/16/2021 13:00"
    )
  );
 
  console.log(
    CheckOverlap(
        "5/13/2021 13:00","5/14/2021 13:00", "5/15/2021 13:00","5/16/2021 13:00"
    )
  );