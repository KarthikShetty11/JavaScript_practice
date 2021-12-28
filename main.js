//DATA TYPES
/*
let name ='John';
let age = 30;
let lovesCats = true;
let color = null;
let list;

let message = `${name} is ${age}`;
console.log(message)

age/=5
console.log(age)
*/

// ------------------- Array literals--------------------------------

/*
const numbers = new Array(1,2,3,4,5,6); //or const numbers = []
numbers[2] = 9;
console.log(numbers);
console.log(numbers[2])

const colors = ['red','blue','green','yellow']
colors[4] = 'black'

colors.push('white')


let lastColor = colors.pop(); //colors.pop();

let firstColor = colors.shift();

console.log(firstColor)
console.log(lastColor)
console.log(colors)

console.log(colors.indexOf('yellow'))

const myArray = ['red',4,true,null,[1,2,3]]
console.log(myArray)
console.log(myArray[4][2])
*/


// --------------Object literals-------------------------------------------------------------
/*
const person={
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets:['dogs', 'cats'],
    address:{
        street:'123 Street',
        city: 'Houston',
        state: 'Texas'
    }
}

//DOT Notation
console.log(person.age);

let key = 'firstName';

// Bracket Notation
console.log(person['lastName']);
console.log(person[key])

console.log(person.pets[0])
console.log(person.address)
console.log(person.address.state)
console.log(person.address['state'])

person.email='john@gmail.com';
console.log(person)
console.log(person.email)

delete person.age;
console.log(person)

//deconstructing(pull the objects out which are only needed)
const { firstName,lastName, address:{city}} = person
console.log(firstName, lastName , city)
*/

//array of object----------------------------
/*
const people = [
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    pets:['dogs', 'cats'],
    address:{
        street:'123 Street',
        city: 'Houston',
        state: 'Texas'
             }
  },
  {
    firstName: 'Mary',
    lastName: 'Smith',
    age: 30,
    pets:['dogs', 'cats'],
    address:{
        street:'123 Street',
        city: 'Houston',
        state: 'Texas'
             }
  }
]

const peopleJSON = JSON.stringify(people) //converts array to string i.e JSON
console.log(peopleJSON)

console.log(JSON.parse(peopleJSON)) //parse back
*/

//--Functions------------------------------------------

function hello(){
    console.log('Hello')
}

