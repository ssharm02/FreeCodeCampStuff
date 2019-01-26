function sym(args) {
  //slice all arguments into single array
  var argsArray = [].slice.call(arguments);

  //call back function to itterate through multiple arrays for reduce
  function symDiff(arr1, arr2) {
    //create array to store unique values
    var uniqueVals = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) < 0 && uniqueVals.indexOf(arr1[i]) < 0) {
        uniqueVals.push(arr1[i]);
      }
    }
    //use for each loop
    arr2.forEach(function(item) {
      if (arr1.indexOf(item) < 0 && uniqueVals.indexOf(item) < 0) {
        uniqueVals.push(item);
      }
    });
    return uniqueVals;
  }
  return argsArray.reduce(symDiff);
}
