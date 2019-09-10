////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
var result =[]
  // base cas
  // if both numds are the same return []
  if(start === end){
    return result;
  }
  // base case
  // if there is a step
  // if step is negative and the start < end return []
  if(step){
  if(step < 0 && start < end){
    return result
  } else{
    for(let i = start; i <= end; i+=step){
      result.push(i)
    }
  }
  }
  
  else{
    for(let i = start; i <= end; i++){
      result.push(i)
    }
  }
  return result;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
 
// base case 

// when we have reached the index of the last element in the array

return array.reduce(function(prev, current){
  return prev + current;
}, 0)
// return the result


// loop thru array add current element to the next element

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let result = array.slice(0);
  return result.reverse()

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
return array.reverse()
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
 let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}


////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
 
// delare a result array
let result = []
// use a do while loop because i want to run this at least once
do{
// push the value into the array
  result.push(list.value)
// while the list has a value at the rest property aka its not null
} while (list = list.rest)
// return the result
return result
  

// return the array at the end

 
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* 
Then add a helper function prepend, which takes an element and a list and 
creates a new list that adds the element to the front of the input list, 
*/
function prepend(value,list) {
  // a list is an object so this must return an object
  // list has a value which is the same as the element, and a rest property?
  // the value at the list needs to be what the input element is
  // with the element as the first property
  // return a whole object hardcoded with the rest property
  return {value, rest: list }

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/* and nth,
which takes a list and a number and returns the element at the given position in
the list (with zero referring to the first element)
or undefined when there is no such element.
*/

// recursion
function nth(list,num) {
// base cases?
// we want to stop when the list has no value and return undefined
if(!list){
  return undefined
} 
// also when the number is 0 or the first element return the value of the list
else if(num === 0){
  return list.value
} else {


// recursive case
//how can i get the number to decrement down to 0?
//return
// call nth i need to decrement n and also provide list.rest since thats the obj
return nth(list.rest, num - 1);
}
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Write a function deepEqual that takes two values and 
returns true only if they are the same value or are objects with the same 
properties, where the values of the properties are equal when compared with a 
recursive call to deepEqual.

To find out whether values should be compared directly 
(use the === operator for that) or have their properties compared,
you can use the typeof operator. If it produces "object" for both values, 
you should do a deep comparison. But you have to take one 
silly exception into account: because of a historical accident, typeof null also
produces "object".
*/

function deepEqual(val1, val2) {
  


  
  // only want to do a comparison if both of the values are not null
  // and if both of the values do have types of objects
  // if this evaluates to true
  if(Array.isArray(val1) && Array.isArray(val2)){
      return val1.every(function(element, index){
    return deepEqual(val1[index], val2[index]);
    
  
     
     
   })
    
    
  }
  else if(val1 !== null && typeof val1 === 'object' && val2 !== null && typeof val2 === 'object'){
    // isolate the keys of val 1 in array
    var keys1 = Object.keys(val1);
    // isolate the keys of val 2 in array
    var keys2 = Object.keys(val2)
   // console.log(keys1, keys2)
    // use each to loop through the first object
    
   return keys1.every(function(element, index){
     if(element === keys2[index]){
       var values1 = Object.values(val1);
    // isolate the values of val 2 in array
    var values2 = Object.values(val2)
    console.log(values1, values2)
    
    //
    
    return deepEqual(values1, values2);
    
  
     
     }
   })
    
  } else {
    return val1 === val2
  }
    // check to see if the current property exists in the second object
    // or use recursion to see if the values of the properties are not null and not and object
    // update status to false
    // or else update status to true
    

  
// return status;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
