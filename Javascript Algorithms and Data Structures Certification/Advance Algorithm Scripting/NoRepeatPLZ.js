
function permAlone(str) {
  //Heap algorithm array
  var arr = str.split(''),
    counter = 0;
  
  //return arr;
  
  //swap index positions of array of strings
  function swap(a,b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function generate(n) {
    if (n===1 && !/([a-z])\1+/.test(arr.join('')))
    {
      counter++;
    }
    else 
    {
      for (var i = 0; i !==n; i++) {
        generate(n-1);
        swap(n % 2 ? 0 : i, n-1);
      }  
    }
  }
  generate(arr.length);
  return counter;
}
