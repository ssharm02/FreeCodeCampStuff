/*
Sorted Union 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Sarthak Sharma ssharm02

*/

function uniteUnique(arr1) {
  //create a duplicate array from the original array
  var placeHolder = arr1;
  //itterate through the length of arguments
  for (var i = 0; i < arguments.length; i++){
  //itterates through the current index values of arguments  
    for(var j = 0; j < arguments[i].length;j++) {
      //not contained within placeholder returns -1 if does not
      if (placeHolder.indexOf(arguments[i][j])===-1) {
        //add unique values to placeHolders
        placeHolder.push(arguments[i][j]);
      }
    }
  }
  //set original array to placeHolder array
  arr1=placeHolder;
  return arr1;
}