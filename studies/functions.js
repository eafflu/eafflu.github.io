/*
 * Functions:
 *
 * 0. Functions allow us to encapsulate a block of code, and execute as we
 * need to.
 *
 * 1. declaration & execution: Declaration is creating the function, execution
 * is invoking, calling, using, executing or applying the function
 * 
 * 2. Parameters vs Arguments: Functions recieve inputs, these are private
 * placeholders for the function, placeholders are replaced with arguments
 * at call time.
 *
 * 3. Named Functions vs Anonymous: can be named or assigned to variables using
 *  names. Anonymous functions have no name and can be passed as arguments
 * this is why functions AKA first class functions
 *
 * 4. Function Expression: When we assign a variable the value of a function
 *
 * 5. To Input Or Not To Input: Not all functions need inputs, why? See ex.
 *
 * 6. Scope: What's yours is not always mine! Parents do not have access to 
 * variables declared in nested/child functions.
 *
 * 7. Closures: Keeping things alive in javascript. Closures are used to keep
 * access of certain values even after the function has been called
 *
 */

// function declaration 

// use the function keyword to declare a function with parameters

function calc(num1, num2) {
        //{ parameters: num1, num2}
  
  // return key word will give function call a value         
  return num1 * num2;
}

// function execution
// we can use our function buy referencing the name, and providing arguments
console.log(calc(5, 5)); // <= prints 25
     //{ arguments: 5, 5}

// assigning variable value of function for later use
let result = calc(5, 5) 
console.log(result); // <= prints 25

// this is a function expression because its assigned to a variable
let namedFuncExpression = function add(num1, num2){
    console.log(num1 + num2)
    return num1 + num2
}

namedFuncExpression(1, 2) // <= prints 3
let resulted = namedFuncExpression(1, 2) // <= prints 3

var anonymousFuncExpression = function (a, b) {return a * b};
var anoymousFuncExpression = anonymousFuncExpression(4, 3); // prints 12

// Input is not always needed

function sayHello(){
    console.log('Wuzzaam');
}

sayHello() // <= prints Wuzzaam

function sayHelloWithInput(input){
    console.log('Wuzzaam ' + input);
}
sayHelloWithInput('you')  // <= prints Wuzzaam you




// Scope

/*
 * 0.Scope is a specific space that will have access to certain variables after 
 * they have been declared. new spaces are created inside if 
 * blocks , loop blocks and function blocks.
 *
 * 1. Global Scope: variables declared in the global scope will be accessible 
 * throughout the program
 * 
 * 2. Local Scope:  variables declared in a local scope, will only be accescible
 * within that respective scope, not globally
 *
 */
 
function accessories(message, choice) {
    
   
    var shoes = "Red shoes today girl" ;
    
    // type will only be available in this scope
    let type = "sandals";

    // HEEL will only be available in this scope
    const HEEL = true;
    return `${shoes} ${choice}`
}


//console.log(shoes); //Triggers referenceError: shoes not defined
// console.log(type); Triggers referenceError: type not defined
// console.log(HEEL); Triggers referenceError: HEEL not defined


// Closures

function Adder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = Adder(5);
var add10 = Adder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12

