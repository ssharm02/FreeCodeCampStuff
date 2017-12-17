/*
Return Largest Numbers in Arrays 

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Sarthak Sharma ssharm02
*/
function largestOfFour(array)
{
 //an empty multi dimensional array that will hold the largest numbers
 var largestNumber = [0,0,0,0];
//for loop traverse all the rows of the multidimension array
for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if(array[i][j] > largestNumber[i]) {
            largestNumber[i] = array[i][j];
        }
    }
}
  return largestNumber;
}
