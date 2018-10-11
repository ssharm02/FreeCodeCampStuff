// const notes = ['note 1', 'note 2', 'note 3'];

// notes.forEach(function(item, index) {
//     console.log(index);
//     console.log(item)
// })

// const todos = ['buy spider man', 'goto gym', 'get debit card', 'clean car'];

// todos.forEach(function(item, index) {
// const num = index + 1;
// console.log(`${num}. ${item}`)
// })
// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)
// console.log(notes2.indexOf({}))


const notes2 = [{
title: "My next trip",
body: "I would like  a good job",
}, 
{
title: "shopping ",
body: "do xyz"
},
{
title: "food",
body: "buy pizza"
}]

// const findNote = function(notes2, noteTitle) {
//     const index = notes2.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase();
//     })
//     return notes2[index];
// };

//FindIndex vs Find!  
const findNote = function(notes2, noteTitle) {
    const note = notes2.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    })
    return note;
};
const note = findNote(notes2, 'feel aishi')
console.log(note)

//delete to do function
const todos2 = [{
    text: 'buy spider man',
    completed: true
},
{
    text: 'goto gym',
    completed: false
},
{
    text: 'clean car',
    completed: false,
},
{
    text: "take buddy walking",
    completed: true
}
];

const todoDelete = function(todos, todoText) {
    const index = todos2.findIndex(function(todo) {
        return todo.text.toLocaleLowerCase() === todoText.toLowerCase();
    })
    if (index > -1) {
        console.log(todos.splice(index, 1))
        todos.splice(index, 1);
    }
}
todoDelete(todos2, "clean car");
console.log(todos2)
