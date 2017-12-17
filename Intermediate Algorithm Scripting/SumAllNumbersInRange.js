/*
Sum All Numbers in a Range 
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Sarthak Sharma ssharm02
*/


function sumAll(arr) {
var sum = 0;
//apply finds max or min number
//use mat.max and math.min to find the high and lowest number
//in the array
var max = Math.max.apply(null, arr);
var min = Math.min.apply(null, arr);
  //iterate through min and max using for loop and add it to the
  //sum
  for (var i = min; i <= max; i++) {
    sum += i;
}
  return sum;
}
