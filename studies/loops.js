/*
 * Loops:
 *
 * 0. Loops are contstructs that are already built into the javascript language.
 * They allow us to execute a block of code as many times as needed. They also
 * give us the ability to iterate over objects, arrays and string datatypes. 
 * Iteration gives us access to each element in the collection or string
 *
 * 1. For Loop: Used to iterate over arrays using an index. Can be used on 
 * strings too!
 *
 * 2. For-in: Used to iterate over objects and only objects!
 *
 * 3. While: This loop will allow you to run a specific set of code while
 * a certain condition is true.  Used to manipulate data on a case by case 
 * basis.
 * 
 * 4. For-Of: Allows you to iterate over any iterable object 
 *
 */

let arr = [1, 2, 3, 4, 5];

// dynamic forward loop on array 

// dynamic means the contents/length of the arr can change and loop still works

for (var index = 0; index < arr.length; index++) {
    // every for loop has 3 parts

    // {start}   ; {    stop    }    ; {update}



    // this log will fire on each iteration of the loop
    // this allows us to access each element in our array
    console.log(arr[index]); // <= prints 1, 2, 3, 4, 5

    // this gives us access to each elements index
    console.log(index); // <= prints 0, 1, 2, 3, 4

}
// dynamic backwards for loop on array
for (var index = arr.length - 1; index >= 0; index--) {
    // every for loop has 3 parts

    // {start}   ; {    stop    }    ; {update}



    // this log will fire on each iteration of the loop
    // this allows us to access each element in our array
    console.log(arr[index]); // <= prints 5, 4, 3, 2, 1

    // this gives us access to each elements index
    console.log(index); // <= prints 4, 3, 2, 1, 0

}

// hardcoded forward

// since we have predetermined our stop condition
// this loop will run 6 times only
for (var index = 0; index <= 5; index++) {

    console.log(index); // <= prints 0, 1, 2, 3, 4, 5

}

// hardcoded backwards
for (var index = 5; index >= 0; index--) {

    console.log(index); // <= prints 5, 4, 3, 2, 1, 0

}

// looping over an object
var multiplier = 2;
var object1 = {a: 1, b: 2, c: 3};

for (var key in object1) {
  multiplier *= object1[key];
}

console.log(object1); // <= prints {a: 2, b:4, c:6}



// while 
var counter = 0;

// must start with while keyword
while (counter < 3) {
    
 // increment so that loop can keep working
  counter++;
  
  // the way to terminate/end/return out of a loop
  break;
}

console.log(counter); // <= prints 2


// for of

let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value); // <= Prints 11, 21, 31
}
