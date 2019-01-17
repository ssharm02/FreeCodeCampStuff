/*Write a function that splits an array (first argument) 
into groups the length of size (second argument) and returns them as a two-dimensional array.
Sarthak Sharma ssharm02
*/

function chunkArrayInGroups(arr, size) {
  //temporary array
  let temp = [];
  //Go through the array length
  for (let i = 0; i < arr.length; ) {
    //Push however many variables in an array depending on the size (multi dimensional array)
    temp.push(arr.splice(i, size));
  }
  return temp;
}

console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6], 2));
