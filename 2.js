
function decodeString(s){
  var num = ''
  var str = ''

  var newStr = ''
  var ops = []

  for (var i = 0; i < s.length; i++){

    /*
    first we make an array of all the operations. The string and the number of times that string should be printed
    If we find an open bracket and the index is greater than 1, take whatever has been captured in str and num so far and store it in an object,
    then reset str to blank
    */
    if ((s[i] === '[' && i > 1) || (s[i] === ']' && str !== '')) {
      ops.push({num, str})
      num = s[i - 1]
      str = ''
    }
    /* the above code is really for edge cases. If we use the code directly below, the very first bracket has no str yet, so when we push it would be a blank
    So we only push when we've passed the first bracket, and then at the end when we reach a closed bracket, and our string isn't empty

    */
    //This captures the number value when a bracket is found
    if (s[i] === '['){
      num = s[i - 1]
    }
    //checks if it's not a bracket or not a number, it's part of the string and gets added to str
    if (s[i] !== '[' && s[i] !== ']' && isNaN(s[i] * 1)){
      str = str + s[i]
    }


  }

  //Here we take our outermost number, and everything inside will be looped this many times. In the '2[b3[a]]' example, this is the 2
   for (var j = 0; j < (ops[0].num); j++){
    //before the inner loops start running, add the string value of the outermost value, in the example this is b
     newStr = newStr + ops[0].str
     //here we want to run from the 2nd object in the array until the last one, since we're already taking care of the outer loop above.
     //If we had '[2'b3[a4[d]]]', this would run from 1 to 2, where index 1 is {num: 3, str: a} and 2 is {num:4, str: d}
     for (var k = 1; k <= ops.length - 1; k++){
      //finally, once we get to the array index, we want to add the str num number of times. So when we get to array index 1, we want to add 'a' 3 times, when we get to index 2, we want to add 'd' 4 times to the string
       for (var m = 0; m < ops[k].num; m++){
         newStr = newStr + ops[k].str
       }
     }
   }
   return newStr
  }

