//Return the remaining elements of an array after chopping off n elements from the head.
//Coded by Sarthak Sharma ssharm02
//The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
  
  arr.splice(0, howMany);
  return arr;
}