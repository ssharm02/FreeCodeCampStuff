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
function forecast(arr) {
  // change code below this line
  let betterWeather = arr.slice(2,4);
  console.log(betterWeather)
  return betterWeather;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//ES6 spread operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
  newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

//check presence of element using indexOf
function quickCheck(arr, elem) {
  // change code below this line
if (arr.indexOf(elem) >= 0) {
  return true;
}
return false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(["squash", "onions", "shallots"], "onions"));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));

function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
Object.assign(foods, {
bananas: 13,
grapes: 35,
strawberries: 27
});
// change code above this line

console.log(foods);

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);

//access property naame with bracket notation
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
if (users.hasOwnProperty('Alan', 'Jeff', 'Sarah', 'Ryan') == true) {
  return true;
} 
return false;
  // change code above this line
}

console.log(isEveryoneHere(users));

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));

//modify array stored in an object
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
  // change code below this line  
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, 'Pete'));