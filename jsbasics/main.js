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

// ------- Array literals-----------------

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


// -----Object literals--------
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
/*
function helloo(name){
    console.log('Hi ' +name )
}

helloo('Karthik')


function hello(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`) //use template literal
}

hello('Karthik','Shetty')

function convertPercentage(num){
  return num/100;
}
console.log(convertPercentage('karthik')) // gives NaN
console.log(convertPercentage('50'))
*/

// -------Arrow function-------------
/*
const convertPercent = (num) => {
    return num/100;
}
    //in case of single line calling and one paramenter we can reduce and write like below

 const convertPercent = num => num/100;
 console.log(convertPercent('500'))
*/

/*
function message(){ //normal function
     return 'hello';
     }

    // turning it to an arrow fucntion
let message = () => {
    return 'hello world'
}

    // also can be written as below to implicitly return what ever has been given after arrow
let message = () => 'hello'
console.log(message())
 */

  // with ARGUMENT
/*
  function message(a){
      return `hello ${a}`;
  }
  */ 
  //let message = a => `hello ${a}`;
    let message = (a,b)=> `hello ${a} and ${b}`
    console.log(message('Karthik','John'));

//----------Loops-------------------------------
/*
//while loop
let i = 0;
while (i<10)
{
    console.log(i);
    i++;

}

//For loop

for(let i=0;i<10;i++){
    console.log(i)
}

// looping through array

const people = [
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 30,
    
    },
    {
      firstName: 'Mary',
      lastName: 'Smith',
      age: 28,
      
    }
  ]

  for(let i=0; i<people.length; i++)
  {
      console.log(people[i])
      console.log(people[i].firstName)
  }
// OR USE BELOW 
  for(let i of people){
      console.log(i.age)
  }

//high order array method

people.forEach(function(i)
    {
    console.log(i.firstName)
    }
);

//also turn high order array method to an arrow function

people.forEach(i => console.log(i.age));


// also another array method is MAP. 
//MAP gives output in array

const a = people.map(i=>i.firstName)
console.log(a)

//FILTER , filterring out to a new array

const personAgeUnder30 = people.filter(i=>i.age<30)
console.log(personAgeUnder30)
*/


//--------CONDITIONALS-------------------------
/*
let a=1;
let b=2;

function evaluate()
{
    if(a<b)
   {return true}
else
   {return false}
}

//else use below
function evaluate()
{
    return b>a
}

console.log(evaluate())

//ternary operator

let animal = 'cat';
let likesCat = animal === 'cat'?true:false;
// IF animal EQUALS 'cat' THEN RETURN true ELSE false; 
console.log(likesCat);

let animal = 'doge';
switch(animal)
{
case 'cat':
    console.log('its cat')
    break

case 'doge':
     console.log('its doge')
     break

default:  
      console.log('Niether')  
       break     
}
*/

//DOM - Document Object Model
/*
// sinngle element selectors
const list = document.getElementById('list');
const list = document.querySelector('ul')
const list = document.querySelector('#list') // # for ID's
console.log(list);

const listItems = document.querySelector('.list-item') // . for CLASSes
// query selector only selects the first element that it finds the match to, if we want all then need to use querySelectorAll

//multiple element selector (querySelectorAll)
const listItems = document.querySelectorAll('.list-item')
//console.log(listItems);

listItems.forEach(i=>console.log(i.textContent)) // looping through the list items
*/

//DOM manipulation--------
/*
const list = document.querySelector('#list') 

list.firstElementChild.remove();
list.lastElementChild.remove();

list.firstElementChild.textContent = "New item"
list.firstElementChild.innerHTML = "<h1>new<h1>"

list.lastElementChild.style.background = 'red'
*/

//Events
/*
const btn = document.getElementById('myBtn');
//btn.addEventListener ('click', (e)=>{ console.log(e)});
btn.addEventListener ('mouseover', (e)=>{ 
    btn.style.background ='blue'
    console.log(e)});
*/









