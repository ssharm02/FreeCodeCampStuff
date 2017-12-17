/*
Factorialize a Number 
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Sarthak Sharma ssharm02
*/

function factorialize(num) {
   if (num == 1 || num == 0) 
   return 1;
  
  //getting a factorial using for loop
  //start with a number and decrement it using for loop
  //inside the for loop multiply the number as it decrements
  for (var i = num -1; i >= 1; i--)
    num = num * i;  
  
  ////geting a factorial using recursion
  return num;//(num*factorialize(num-1));
}
