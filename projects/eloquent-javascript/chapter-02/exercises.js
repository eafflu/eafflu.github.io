////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {

  // create a loop, initialize i to '#'' when the length of i is greater or =num
  // on each iteration increment '#' to i
  for (let i = '#'; i.length <= num; i += '#') {
    console.log(i);

  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  
  for(var i = start; i <= end; i++){
  i % 5 === 0 &&   i % 3  === 0 ? console.log('fizzbuzz') : i % 3 === 0 ? console.log('fizz') : i % 5 === 0 ? console.log('buzz') : console.log(i);
  }
  // print all numbers from 1 - 100
    // if the number is divisible by 3 & 5 FizzBuzz
    // " " 5 Buzz
    // ' '  Fizz
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
  /*
  
  Write a program that creates a string that represents an 8×8 grid, using
  newline characters to separate lines.
  At each position of the grid there is either a space or a "#"
  character. The characters should form a chessboard.
  */

function drawChessboard(size) {
 
  
let string = '';
let even = ' #'
let odd = "# "
let result = []
// create an incrementing loop that starts at 0
// ends at and and includes number
let evenMatch = string.padEnd(size, even) +'\n'
let oddMatch = string.padEnd(size, odd) + '\n'
for(let i = 0; i < size; i++){
  // if the loop iteration is even 
    // log the string padded with the even pattern add new line after
  // else 
    // log the string and padded with odd pattern 
  
//console.log(string)
//console.log(evenMatch.length)
//string += evenMatch + '/n'
//console.log(string.length);


  i%2 === 0 ? result.push(string += evenMatch)  :  result.push(string += oddMatch)
 
}
console.log(string)


}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
