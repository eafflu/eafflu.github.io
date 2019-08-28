/*
 * Datatypes:
 *
 * 0. Any type of value is known as a data type.Datatypes are separated into two 
 * categories. Simple/Primitive and Complex
 *
 * 1. Simple/Primitive Datatypes are called so due to the fact that they are 
 * immutable. Since they do not have the ability to collect/contain other values
 * operations between two simple datatypes will return new values,this operation 
 * will not alter the original value.
 *
 *
 * 1. Complex datatypes are called so due to the fact that they are mutable. 
 * They have the ability to collect/contain 
 * multiple types of values and multiple values, operations may/may not alter
 * original value unless copies are made.
 *
 *
 * 
 * 1a. Number: Data with the type of number. 
 * 1b. String: Data with the type of string
 * 1c. Boolean: The values true & false, not represented as *strings
 * 1d. NAN: Any value that cannot be evaluated to a number.
 * 1e. undefined: Data with a value that is undefined
 * 1f. null: An intentional absence of value
 * 1g. Infinity & -infinity: numeric value representing infinity.
 *
 * 2. Complex Data Types
 *
 * 2a. Function : Reusable, encapsulated blocks of code,
 * these private variable scopes
 *
 * 2b. Array: 0-indexed, can contain any different type of data
 * in order. 
 *
 * 2c. Object: Collection of key value pairs/properties, each key points to a 
 * value.
 *
 * 3. Copy by value vs Copy by reference: Primitive types are copied 
 * by values, complex data types are copied by reference see example below
 */

if (true) {
    let element = 20;
    console.log(element + 2) // <= prints 22
}

if (true) {
    let element ='yee' ;
    console.log(element.length) // <= prints 3
}

// conditional statements rely on a boolean value of to run
if (false) {
    // this block of code will not run because the contition is a false
    let element = false;
    console.log(element) // <= You'll never see me!
}

if (true) {
    // null is not undefined, it is an intentional absence of a value
    let element = null;
    console.log(element) // <= prints null
}

if (true) {
    
    
    let element;
    //the variable is declared, yet never assigned a value
    console.log(element) // <= prints undefined
}

if (true) {
    let element = NaN;
    console.log(element) // <= prints NAN
}

if (true) {
    // arrays can contain multiple pieces & types of data
    let element = [1, "hey", true, {}, []];
    
    console.log(Array.isArray(element)) // <= prints true 
    
    // bracket notation
    // access first element in array
    console.log(element[0]); // <= prints 1
    // access last element in array
    console.log(element[element.length -1]) // <= prints []
    
    element.push('hi');
    console.log(element) // <= prints [1, "hey", true, {}, [], 'hi'];
    
    element.pop()
    console.log(element) // <= prints [1, "hey", true, {}, []];

  
}

if (true) {
    let element = {
        
    // The data type of all keys strings 
    // The values of each key may vary and can be any data type
        'eyes': 'brown',
        'color': function(){
            console.log(this.eyes)
        },
        'nickName': 2
    };
    console.log(element) // <= prints {'eyes': 'brown','color': function(){ console.log(this.eyes) }, 'nickName': 2};
    
    // dot notation
    console.log(element.eyes) // <= prints brown
    console.log(element.nickName) // <= prints 2
    console.log(typeof element['color'] ) // <= prints 'function'
    
    // <= prints
    // bracket notation
// <= prints
}

if (true) {
    let element = Infinity;
    console.log(element) // <= prints Infinity 

}

if (true) {
    let element = -Infinity; // <= prints -Infinity 
    console.log(element)    

}

// copy by value copy by reference
if (true) {
    let element = 20
    let elementCopiedByVal = element;
    
    elementCopiedByVal = "I'm so into you"
    
    // changing the value doesnt alter the original value
    console.log(element)     // <= prints 20

}

if (true) {
    let element = {}
    let mary = 'Mary J Blige';
    
    element.mrWrong = {
        'song': 'Mr. Wrong',
        'artist':  mary,
        'method': function dance(){
            
        }
        
    }
    let elementCopiedByVal = element;
    
    elementCopiedByVal.song = "I'm so into you";
    
    
    // changing the value alters the original value because of of reference
    console.log(element.song)     // <= prints 'I'm so into you'

}
//







