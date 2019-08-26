/*
 * Datatypes:
 *
 * 0. Datatypes are separated into two categories. Simple/Primitive and Complex
 *
 * 1. Simple/Primitive Datatypes are called so due to the fact that they are immutable. Since they do not have the ability to collect/contain 
 * other values, operations between two simple datatypes will return new values, this operation will not alter the original value.
 * 
 * 1.5. When simple datatypes are 
 *
 * 2. Complex Data Types
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";
