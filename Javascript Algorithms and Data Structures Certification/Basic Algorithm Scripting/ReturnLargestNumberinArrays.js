/*
Return Largest Numbers in Arrays 

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Sarthak Sharma ssharm02
*/
function largestOfFour(array) {
  //an empty multi dimensional array that will hold the largest numbers
  let largestNumber = [0, 0, 0, 0];
  //for loop traverse all the rows of the multidimension array
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > largestNumber[i]) {
        largestNumber[i] = array[i][j];
      }
    }
  }
  return largestNumber;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);

function largestNum(arr) {
  return arr.map(function (subArray) {
    return Math.max.apply(null, subArray)
  });
}

console.log(
  largestNum([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);