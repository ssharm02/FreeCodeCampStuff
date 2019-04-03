function whatIsInAName(collection, source) {
  let arr = [];

  arr = collection.filter(function(obj) {
    console.log(obj);
    for (let i in source) {
      if (source[i] != obj[i]) {
        return false;
      }
    }
    return true;
  });
  console.log(arr);
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
