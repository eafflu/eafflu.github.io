/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'Leopard';
animal['name'] = 'Amare';
animal.noises = [];

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []
noises[0] = 'Hiss';
noises.push('Growl');
noises.unshift('Snarl');
noises[noises.length -1] = 'Rawr';
noises.push('Scratch')


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push('Slash');


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = { 
    species: 'duck', 
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
    }
animals.push(duck);
var antelope = { 
    species: 'antelope', 
    name: 'Afua', 
    noises: ['grunt', 'snort', 'buzz']
    }
animals.push(antelope);
    var hyena = { 
    species: 'hyena', 
    name: 'Hai', 
    noises: ['laugh', 'giggle', 'cackle'],
    friends: []
    }
animals.push(hyena)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Arrays store elements at a zero index, making it the perfect data structure for a list

var friends = [];
// Generate Random index in any array
var getRandom = function(array){
    // return index of random element in the array
   return Math.floor(array.length * Math.random());
}
// Create a random index variable that will change to a random index
// each time the function is called
var randomIndex = getRandom(animals);
console.log(randomIndex);
// Using bracket notation use the random index to push an animal in friends
friends.push(animals[randomIndex].name);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
