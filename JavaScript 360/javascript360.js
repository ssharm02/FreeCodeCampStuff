//Array Concat property

let example1 = [1, 2, 3, 4];
let example2 = [5, 7, 7, 8];
let example3 = [true, false];
example1 = example1.concat(example2, example3);

console.log(example1);

//Array CopyWithIn

let example = [true, false, 1, 2, 3, 4, 5];

example = example.copyWithin(2, 0);
let y = example.copyWithin(-2);

console.log(example);

console.log(y);

//Array to Object using iterator
let example = [true, false, 1, 2, 3, 4, 5];

let iterator = example.entries();
for (let i = 0; i < example.length; i++) {
  iterator.next().value;
  console.log(iterator);
}
//Array Every function

let example = [1, 2, 3, 4, 5].every(element => {
  return element > 1;
});

console.log(example);
//Array Fill function

let example = [1, 2, 3, 4, 5];
//value, index begin, end poit
example.fill(1, 3, 4);

console.log(example);

//Array Filter function
let example = [1, 2, 3, 4, 5].filter(element => {
  return element < 4;
});

console.log(example);
//Array Find

let example = [1, 2, 3, 4, 5, 6, 7].find(element => {
  return element > 4;
});

console.log(example);
//Array Find Index

let example = [1, 2, 3, 4, 5, 6].findIndex(element => {
  return element > 3;
});

console.log(example);
//Array ForEach

let example = [1, 2, 3, 4, 5, 6, 7, 8].forEach((element, index, array) => {
  console.log(element);
  console.log(index);
  console.log(array);
});

//Array Includes

let example = [1, 2, 3, 4, 5, 6, 7, 8];

let y = example.includes(3, 4);

console.log(example);
console.log(y);

//Array indexOf

let example = [1, 2, 3, 4, 5, 6, 7, 8];

let y = example.indexOf(8);

console.log(y);

//Array last index of

let example = [1, 2, 3, 4, 5, 6, 7, 8, 4];

let y = example.lastIndexOf(4);

console.log(y);

//Array Map
let example = [1, 2, 3, 4, 5, 6, 7, 8, 4];

let y = example.map((element, index, array) => {
  return element + 2;
});

console.log(y);

//Array Map
let example = [1, 2, 3, 4, 5, 6, 7, 8, 4];

let y = example.map((element, index, array) => {
  if (element > 3) {
    return element * 5;
  }
  return element + 2;
});

console.log(y);

let z = [1, 2, 3, 4, 5, 6, 7, 8];

let x = z.reduce((a, b) => a + b, 0);
console.log(x);
//Array Pop
let example = [1, 2, 3, 4, 5, 6, 5, 7, 8, 4];

let x = example.pop();

console.log(x);
console.log(example);

//Array push
let example = [1, 2, 3, 4, 5, 6, 5, 7, 8, 4];

let a = 10;

example.push(a, 20, 390);

console.log(example);

//Array Reduce
let example = [1, 2, 3, 4, 5, 6, 5, 7, 8, 4].reduce(
  (currentTotal, currentValue) => {
    console.log(currentTotal);
    let target = 6;
    if (currentTotal === target) {
      console.log(currentTotal);
      console.log("index value is ", currentValue);
      return currentTotal + currentValue;
    }

    return currentTotal + currentValue;
  }
);

//Array Shift - remove first value from array
let example = [1, 2, 3, 4, 5, 6, 5, 7, 8, 4];

let example2 = example.shift();

console.log(example);

//Array Slice - copy array from certain elemt to certain element
let example = [1, 2, 3, 4, 5, 6, 5, 7, 8, 4];

let example2 = example.slice(2, 4);

console.log(example2);

//Array some
let example = [1, 2, 3, 4, 5, 6, 5, 7, 8, 4].some(element => {
  return element > 5;
});
console.log(example);

//Array Sort
let example = [1, 102, 3, 4, 5, 6, 5, 7, 8, 4].sort((a, b) => {
  return a - b;
});

console.log(example);

//Array String
let example = [1, 102, 3, 4, 5, 6, 5, 7, 8, 4];

let bobo = example.toString();

console.log(bobo);
//Array Unshift - adds element at the beginning of the array
let example = [1, 102, 3, 4, 5, 6, 5, 7, 8, 4];

let bobo = example.unshift(0);

console.log(example);

//terinanary operator
function someStuff(a, b) {
  let example = a > b ? "a" : "b";
  return example;
  //return (2+2===4) ? 'Hello World' : 'hello Yo';
}
console.log(someStuff(10, 2));

//JavaScript Object.assign
//Objects Assign

let example = { hello: "World", bye: "Wow" };
let example2 = Object.assign({}, example);
example2.hello = "Today";
console.log(example);
console.log(example2);

//Objects KEy value pair

let example = { hello: "World", bye: "Wow", test: { example2: "example3" } };
let y = Object.entries(example);

console.log(y);

//Objects keys

let example = { hello: "World", bye: "Wow", test: { example2: "example3" } };
let y = Object.keys(example);

console.log(y);
//Objects hasOwnProperty

let example = { hello: "World", bye: "Wow", test: { example2: "example3" } };
let y = example.hasOwnProperty("test");

console.log(y);
//Objects values
let example = { hello: "World", bye: "Wow", test: { example2: "example3" } };
let y = Object.values(example);

console.log(y);

const notes = [
  {},
  {
    title: "My next trip",
    body: "Going to Japan"
  },
  {
    title: "Code More",
    body: "Code more in Javascript"
  },
  {
    title: "Talk to more girls",
    body: "Starting dating women"
  }
];

// console.log({} === {})

// const index = notes.findIndex((notes, index) => {
//     return notes.title === 'My next trip'
// })

// console.log(index)

const findNote = function(notes, noteTitle) {
  const index = notes.findIndex((notes, index) => {
    return notes.title === noteTitle;
  });
  return notes[index];
};

const note = findNote(notes, "Code More");
console.log(note);

const findNote = function(notes, noteTitle) {
  const note = notes.find((notes, index) => {
    return notes.title === noteTitle;
  });
  return notes;
};

const note = findNote(notes, "Code More");
console.log(note);

const favFood = ["Pizza", "fires", "chow mein", "swedish meatballs"];

let testArray = [];

testArray = [...favFood];

console.log(testArray);

const toolBox = ["hammer", "screwdriver", "ruler"];

for (const item in toolBox) {
  console.log(item);
}
const findToold = toolBox.includes("hammer");
console.log(findToold);

const age = [16, 14, 18, 20];

const greatage = age.some(function(person) {
  return person >= 10;
});

console.log(greatage);

const prices = [24, 25, 38, 46, 34, 32];

const stuff = prices.filter(price => price >= 30);

console.log(stuff);

const priceList = [200, 300, 350, 450, 5000];

const modifyPrice = priceList.map(item => item * 0.75);

console.log(modifyPrice);

const weeklyExpense = [300, 400, 500, 145, 234, 55];

const test3 = weeklyExpense.reduce((first, last) => first + last);

console.log(test3);
