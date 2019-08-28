/*
 * Operators:
 *
 * 0. Operators act on our data. Operands are the values that operators act on.
 
 * 0a. Assignment: Ooerators used to assign/initialize variables values
 *
 * 0b. Aritmhetic: Mathematical operations are performed using these operators
 *
 * 0c. Comparison: Comparison operations evaluate to a boolean
 *
 * 0d. Logical: Logical operators are typically used with logical/bolean values.
 * they return a Boolean value unlessed used on non boolean values
 *
 * 0e. Unary: An operator that takes a single operand/argument and perfroms an 
 * operation
 *
 * 0f. Ternary: The conditional (ternary) operator is the only JavaScript 
 * operator that takes three operands.used as a shortcut for the if statement.
 *
 * 0g. Binary: compare TWO values/operands, evaluates to a boolean
 */


// Binary operations

console.log(2 < 3) // <= prints true
console.log(20 - 40 + 50 /2 > 400) // <= prints false
console.log(20 >= 20) // <= prints true
console.log(20 <= 20) // <= prints true

/* Strict comparison uses an additional "=" sign and uses the type and value to 
compare. Always use strict comparison!!  */

console.log('20' === '20' ) // <= prints true
console.log('2' == 2) // <= prints true

console.log(20 !== 20) // <= prints false
console.log('20' != 20) //  <= prints false


// when using '&&' operations on both sides must resolve to true or else false
console.log(50 < 20 && 40 === 40) // <= prints false

// when using || operations on either side may evaluate to true 
console.log(100 < 20 || 40 === 40) // <= prints true

// Assigning using assignment value
let rainy = true;

// Bang operator: Flips the truthiness of a value, 
 //can be used to see whether a variable is declared or has a value
if(!rainy){
    // since there is a rainy variable declared this console log will never fire
    console.log("You Can keep the umbrella in house");
}

if(!!1){
    
    // this evaluates to true so code will run
    console.log('Hey') // <= prints Hey
}

if(!!-1){
    
    // this evaluates to true so code will run
    console.log('Hey')  //  <= prints Hey
    
}

if(!!0){
    
    // this evaluates to true so code will NOT run
    console.log('Hey') 
}

// Operators can be used to perform arithemetc calculations on numbers

console.log(20 + 20)  //  <= prints 40
console.log(20 - 20) //  <= prints 0
console.log(20 * 20) //  <= prints 400
console.log(20 / 20) //  <= prints 1
console.log(20 % 20) //  <= prints 0



//unary operations

let angelNumber = 20;
console.log(-angelNumber)  //  <= prints -20
console.log(--angelNumber)  //  <= prints 19
console.log(angelNumber--)  //  <= prints -19
console.log(angelNumber++)  //  <= prints 18
console.log(++angelNumber)  //  <= prints 20

console.log(typeof("Hey"))  //  <= prints string

let flag = true
let fla = null
console.log(!flag)  //  <= prints false

console.log(!flag)  //  <= prints false
console.log(!fla)  //  <= prints true

// Ternary operations

// if true
console.log(true ? "$2.00" : "$10.00"); // <= prints $2.00

// if false
console.log(false ? "$2.00" : "$10.00"); // <= prints $10.00

