/*
Factorialize a Number 
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Sarthak Sharma ssharm02
*/

function factorialize(num) {
  if (num === 1 || num === 0) {
    return 1;
  }

  //use the for loop - subtract -1 and go all the way until it equals 1
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  ////geting a factorial using recursion
  return num; //(num*factorialize(num-1));
}
console.log(factorialize(5));

//Use while loop
function factor2(num) {
  let result = num;

  if (num === 1 || num === 0) {
    return 1;
  }
  while (num > 1) {
    num--;
    result = num * num;
  }
  return result;
}

console.log(factor2(5));

//es6 syntax
const factorial = (x, acum = 1) => (x ? factorial(x - 1, x * acum) : acum);