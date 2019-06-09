// var let const
// variable setting
//  mostly dont want to use var because of conflicts
// try to use let and const 
// one strategy is to always use const unless you need to reassign
let age = 22; // every year the age changes
age = 23;
console.log(age);

// var is function scoped, let is block scoped
// defining a let variable after the same variable is used is an error
// var is harder to debug because it's hard to tell where it is defined

const name = "Tyler";
console.log(name);
// name = "Tyler 2"; // error

// Data Types
// String Numbers Boolean null undefined Symbol(es6, not common)
const name2 = 'Tyler';
const age2 = 22;
const isCool = true;
const rating = 4.5; // No float or decimal this is just a number
const x = null;
const u = undefined; // can explicity say or do let u; same behavior

console.log(typeof name2);
console.log(typeof age2);
console.log(typeof isCool);
console.log(typeof rating);
console.log(typeof x); // return value is bogus, implementation is wierd
console.log(typeof u);


// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template Strings
const hello = `My name is ${name} and I am ${age}`;
console.log(hello);


// String properties and methods
const s = 'Hello World ';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());

const t = 'tech, comp, it, code';
console.log(t.split(', ')); // arguement is what you split by, split into array


// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits); // Arrays can have multiple data types
console.log(fruits.length);
console.log(fruits[2]); // 0 based arrays
fruits[2] = 'grapes'; //  cannot reassign the array but can change data inside
console.log(fruits);

fruits.unshift('Strawberries'); // front add
fruits.push('mangoes'); // back add
console.log(fruits);
fruits.pop(); // removes last item
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('grapes'));

const foods = ['Hotdog', 'Pizza'];
const foods2 = foods.concat(fruits);
console.log(foods2);


// Object Literalls
const person = {
    firstName: 'Tyler',
    lastName: 'Kranig',
    age: 22,
    languages: ['Java', 'Racket', 'C#'],
    address: {
        street: 'name of street',
        city: 'cityName',
        state: 'stateName'
    }
}

console.log(person.firstName, 
            person.lastName, 
            person.languages[2], 
            person.address.street);

const { firstName, lastName, address: { city } } = person; // assigns vars of the same name
console.log(firstName, city);

person.email = 'tkranig';
console.log(person.email);

const todos = [
    {
        id: 1,
        text: 'trash',
        isCompleted: false
    },
    {
        id: 2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'run',
        isCompleted: false
    }
]
console.log(todos);
console.log(todos[0].text);


// JSON formating, google json converter to get free formatter
[
    {
       "id": 1,
       "text": "trash",
       "isCompleted": false
    },
    {
       "id": 2,
       "text": "meeting",
       "isCompleted": true
    },
    {
       "id": 3,
       "text": "run",
       "isCompleted": false
    }
 ]

 const todoJSON = JSON.stringify(todos);
 console.log(todoJSON);


// For Loops - similar to other languages
for(let i = 0; i < 10; i++) {
    console.log(`For Loop number: ${i}`);
}

// While Loops - similar to other languages
let i = 0; // also notice that we can use i again here
           // because i is block defined in that for loop
while(i < 10) {
    console.log(`For Loop number: ${i}`);
    i++;
}

// Looping through an Array
for(let i = 0; i < todos.length; i++){
    console.log(todos[i]);
}

for(let todo of todos){
    console.log(todo);
}

// High order array methods
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
const todoFilt = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoFilt);


// Conditionals
const x2 = 10;
if(x2 == '10') { // does not match the data types
    console.log('x is 10');
}
if(x2 === '10') { // matches the data types
    console.log('x is 10');
} else {
    console.log('x is not 10');
}

const x3 = 10; // Turnary operator
const color = x3 > 10 ? 'red' : 'blue';
console.log(color);

//swithces
switch(color){
    case 'red': 
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


// Functions
function addNums(num1 = 1, num2 = 1) { // can have default values if nothing passed
    return num1+num2;
}
console.log(addNums(5, 4));
console.log(addNums()); // NAN

// arrow function
const addNumsA = (num1 = 1, num2 = 1) => num1+num2;

console.log(addNumsA(5, 4));

const mult = num => num*num;
console.log(mult(10));

// lexical this exists as well




// OBJECT ORIENTED PROGRAMMING PRE CLASSES or ES5
function Person(firstName, lastName, dob) { // constructor
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = () => this.dob.getFullYear();
    this.getFullName = () => `${this.firstName} ${this.lastName}`;
}
//Instantiate
const person1 = new Person('tyler', 'kranig', '03/24/1997');
console.log(person1);
console.log(person1.dob.getFullYear());

// adding functions to objects
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// this introduces an issue because the methods are created every single object
// using prototypes is a little more efficient, it wont copy the functions
Person.prototype.getBirthYear2 = function() {
    return this.dob.getFullYear();
}
console.log(person1.getBirthYear2());
console.log('');

// ES6 Classes are added, same stuff is done under the hood, syntactic sugar
// the functionality is the exact same
class Person2 {
    constructor(firstName, lastName, dob) { // constructor
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const per = new Person2('tyler', 'kranig', '03/24/1997');
console.log(person1.getBirthYear());
console.log(person1.getFullName());




// DOM
// Selectors, either single or multiple
console.log(window);
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1')); // ended jquery, selects first
console.log(document.querySelectorAll('.item')); // can run array methods here
console.log(document.getElementsByClassName('item')); // cant use array methods
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// Manipulating the DOM
const ul = document.querySelector('.items');
// ul.remove(); // removes entire list
// ul.lastElementChild.remove(); // removes item3
ul.firstElementChild.textContent = 'Hello'; // Changes text of first item
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>HELLO</h1>' // add HTML dynamically

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault(); // stops the submit from going
//     // console.log(e.target.id);
//     document.querySelector('#my-form').style.background = '#ccc';
//     // document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '') {
        msg.innerHTML = 'Please enter all fields';
        msg.classList.add('error');
        setTimeout(() => msg.remove(), 3000);
    } else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        users.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
        console.log('success');
    }
}