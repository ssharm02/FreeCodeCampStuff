/*
Diff Two Arrays 
Compare two arrays and return a new array with any 
items only found in one of the two given arrays, 
but not both. In other words, return the 
symmetric difference of the two arrays.

Sarthak Sharma ssharm02
*/


function diffArray(arr1, arr2) {
  
  //pushing unique values to the new array variable
  var newArr = [];
 //go through the first array
  for (var i = 0; i < arr1.length; i++) {
    //if array1 has unique values not present in array2
    if(arr2.indexOf(arr1[i])===-1){
      //push the new values into the newArr varible
      newArr.push(arr1[i]);
    }
  }
  //go through the second array
  for (var j = 0; j < arr2.length; j++) {
    //if array 2 has unique values not present in array 1
    if(arr1.indexOf(arr2[j])===-1){
      //push the unique values from array2 to newArray
      newArr.push(arr2[j]);
    }
  }
  
  return newArr;
}
