// Day 04 Functions; Scope; Hoisting; and Literals

// Literals
// They represent values in JS that have been hardcoded

let butlerMascot = 'Bulldog'
let myAge = 40 //this value is hardcoded
let arr = [] //this value is NOT hardcoded

// Hoisting
/*
-General way of thinking about how code creation and execution works in JS
-JS puts [var]iable declarations and function declarations into memory during compile phase of the code.
    This makes it feel that those are "on top" or loaded first
*/
// var myName = 'Paul'
// // variable declaration = variable value
// console.log(myName); //let or const are NOT hoisted, only functions and var[iables]. 


// sayHello();

// function sayHello() {//function declarations are hoisted
//     console.log('This is a function declaration')
// }

// func() // cannot access func() before initialization
// let func = function(){//function expressions are NOT hoisted
//     console.log('This is a function expresion')
// }

//Scope 
// Hierarchy of variables in our code - commonly referred to as gloabal, local, parent, or child scope.

let coffeeOrigin = 'Ethiopia' //Global scope

function exampleFunction() {
    let x = 'Local scope - declared inside function' //local scope
    console.log(coffeeOrigin) 
    console.log(x) 
}
exampleFunction();

// Global scope can be accessed by local function scope
// Local scope cannot be accessed by global scope

// MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope


// Functions
// block of code designed to perform a particular task
// TBD

// function addNums = function(x,y) {
//         let result = x + y;
//         return result
// }
                                        //these two are the same thing

function addNums(x, y){
    let result = x + y;
    return result
}

let mystuff = addNums(5,6) //let mystuff = 11 <<-- inside memory location

console.log(mystuff)


