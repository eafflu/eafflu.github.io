/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, let or const followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 *
 * 3. There are three keywords used to declare variables var, let and const
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'Edem';
console.log(myName); // prints => Edem

// 3. re-assignment //
myName = 'Akua';
console.log(myName); // prints => Akua

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// Let

/*
 * 0. Variables created using the let keyword are not hoisted to the top of the global scope. They are block scoped meaning and 
 * they are hoisted to the top of the scope they are declared in these can  also be reassigned. 
 * 
 * 1. Unlike variables created with the var keyword, let variables will trigger a reference error if we try to log
 * the variable before it is declared
 * 
 * 2. Unlike const variables let variables do not need to be initialized right away.
 */
 
 //console.log(myFirstCar) => Will trigger a reference error and break the code;
 
 // Declared
 
let myFirstCar;

// Initialized

myFirstCar = 'Mercedes G-Class Off Road SUV';
console.log(myFirstCar) // Prints => Mercedes G-Class Off Road SUV

// Reassigned / Updated

myFirstCar = 'Mercedes G-Class 63 AMG';
console.log(myFirstCar) // Prints => Mercedes G-Class 63 AMG

 
 
 
 


// Const

/*
 * 0. Variables created using the const keyword are not hoisted to the top of the global scope or their scope. They are block scoped
 * and must be declared and intitialized immediately because their values can never change. Constants last forever while you are in their scope
 * 
 * 1.Const variables trigger a syntax error if left declared and undefined;
 * 
 * 
 * 2. By convention all const variables are named in uppercase and it's best practice to declare all function expressions with the const keyword
 */

// const HOME_LAND; <--This will trigger a syntax error saying "unexpected token ;"
const LOCATION = (countryString) =>{
    return 'My family lives in ' + countryString;
}

let result = LOCATION('Ghana');
console.log(result); // Prints => My family lives in Ghana

// Hoisting

/*
 * 0. Before any of the code in a program is executed all var and function declarations are dragged to the top of the program
 * this process is known as hoisting. This is why if we try to refer a var variable before it is declared we get undefined and not a 
 * reference error.
 *
 * 1. Initializations are not hoisted to the top, just the declarations
 * 
 * 2. Let and const declarations are not hoisted to the top of the program scope/
 *
 *
 */

console.log(favoriteFood); // Prints => Undefined 
var favoriteFood = 'Crab Legs';
console.log(favoriteFood); // Prints => Crab Legs


//console.log(favoriteTypeOfCuisine); // Throws Error => favoriteTypeOfCuisine is not defined
//console.log(FAV_PHO_JOINT); // Throws Error => FAV_PHO_JOINT is not defined

let favoriteTypeOfCuisine = 'Asian';
const FAV_PHO_JOINT = 'Namese';


// Scope