let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);

console.log(sequence.pop());

console.log(sequence);

let anObject = { left: 1, right: 2 };

console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);

let anObject2 = { x: 0, y: 1, z: 2 };
console.log(Object.keys(anObject2));

//copying all property from one object to another

let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
console.log(object1 == object3);

let todoList = ["learn react", "finish free code camp", "apply for jobs"];

function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log(todoList);
console.log(getTask());
console.log(rememberUrgently("get new rbc card"));
console.log(todoList);

let numArray = [0, 1, 2, 3, 4];
console.log(numArray.slice(2, 4));
console.log(numArray.slice(2));

function remove(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

//rest parameter - pass however many numbers as arguments

function max(...numbers) {
  let result = -Infinity;
  for (let number in numbers) {
    if (number > result) result = number;
  }
  return result;
}

console.log(max(4, 5, 1, 4, 5, 77));

//Eloquent Javascript Exercise Array and Objects chapter
function range(start, end) {
  let range = [];

  for (let i = start; i <= end; i++) {
    //   console.log(i);
    range.push(i);
  }
  // console.log(range);
  return range;
}
function sum(range) {
  let sum = 0;
  for (let i = 0; i < range.length; i++) {
    sum += range[i];
  }
  // console.log(sum);
  return sum;
}
console.log(sum([10, 20]));
//console.log(range(10, 20));
console.log(sum(range(1, 10)));

function reverse(...arg) {
  let reverseArray = [];
  console.log(arg);
  let arg2 = [1, 2, 3, 4, 5];
  for (let i = arg.length - 1; i >= 0; i--) {
    console.log(i);
    reverseArray.push(arg[i]);
  }
}

console.log(reverse([1, 2, 3, 4, 5]));

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
