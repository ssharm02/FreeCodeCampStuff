let myNestedArray = [ //level 1
    // change code below this line
    ['unshift', false, 1, 2, 3, 'complex', 'nested'], //level 2
    [ 
      ['loop', 'shift', 6, 7, 1000, 'method', 'deep'], //level 3
      [ 
        ['concat', false, true, 'deeper', 'spread', 'array'], //level 4
        [
          ['deepest', 'mutate', 1327.98, 'splice', 'slice', 'push'] //level 5
        ]
      ]
    ],
    ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];

let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend);
    // change code below this line  
  return user.data.friends;
    // change code above this line
  }
  
  console.log(addFriend(user, 'Pete'));

  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
  var splitA = arr2.slice(0,n);
  
  var splitB = arr2.slice(n);
  
  var midP = arr1;
  
  return splitA.concat(midP,splitB);
    return arr2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  //javascript array can hold different data types
  let yourArray = ['sarthak', 55, true, 'flower', 44.5]; // change this line

  //changing values of array
  let myArray = ["a", "b", "c", "d"];
// change code below this line
myArray[1] = 'sarthak';
//change code above this line
console.log(myArray);

//array push and unshift
function mixedNumbers(arr) {
  // change code below this line
arr.unshift('I', 2, 'three');
arr.push(7, 'VIII', 9);
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));

//pop and shift
function popShift(arr) {
  let popped = arr.pop(); // change this line
  let shifted = arr.shift(); // change this line
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));

//removing array element from the middle array.splice
function sumOfTen(arr) {
  // change code below this line
  arr.splice(1,2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

//add an item using splice
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 1, 'DarkSalmon', 'BlancedAlmond');
  // change code above this line
  return arr;
} 
 
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

//Array.slice copying array items