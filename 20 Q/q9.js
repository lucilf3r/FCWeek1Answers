/** Q9
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.
 
 Examples
 numToEng(0) ➞ "zero"
 
 numToEng(18) ➞ "eighteen"
 
 numToEng(126) ➞ "one hundred twenty six"
 
 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */

 function numToEng(num){
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
                'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
                'ninety'];
  
    let numString = num.toString();
  
    if (num === 0) return "zero";
  
    
    if (num < 20) {
      return ones[num];
    }
  
    if (numString.length === 2) {
      return tens[numString[0]] + ' ' + ones[numString[1]];
    }
  
    
    if (numString.length == 3) {
      if (numString[1] === '0' && numString[2] === '0')
        return ones[numString[0]] + ' hundred';
      else
        return ones[numString[0]] + ' hundred ' + numToEng(+(numString[1] + numString[2]));
    }
  
    if (numString.length === 4) {
      let end = +(numString[1] + numString[2] + numString[3]);
      if (end == 0) return ones[numString[0]] + ' thousand';
      if (end < 100) return ones[numString[0]] + ' thousand ' + numToEng(end);
      return ones[numString[0]] + ' thousand ' + numToEng(end);
    }
  }

  console.log(numToEng(0))
  console.log(numToEng(123))
  console.log(numToEng(300))
  console.log(numToEng(14))
  console.log(numToEng(1007))