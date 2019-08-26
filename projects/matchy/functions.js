/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search = function (animals, name) {
    // initialize result to null
    // this will allow null to be returned if match is not found;
    let result = null;

    // loop through array of animals
    for(let i = 0; i < animals.length; i++){
      // if the name matches a string in the animals array
        if(animals[i].name === name){
            // update result to the matching object
            result = animals[i];
        }
        
    }
    // return result;
      return result;
       
    
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var replace = function(animals, name, replacement){
    //use for loop to loop through animals array
      for(let i = 0; i < animals.length; i++){
    // if name provided to function, matches an animals name in the array
    if (animals[i].name === name){
      
    
      // use splice to remove one animal at the current index and replace it with replacement
     animals.splice(i, 1, replacement)   
    }
          
      }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var remove = function(animals, name){
    // loop through animals
    for(let i = 0; i < animals.length; i++){
      // if name matches animals name in the array
        if(animals[i].name === name){
        // use splice to remove the one animal at the current index
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var add = function(animals, animal){
   // check if animal has a name and species property and its length of both values is greater than 0
   if(animal.hasOwnProperty('name') && animal.name.length > 0 && animal.hasOwnProperty('species') && animal.name.length > 0){
 
  if(search(animals, animal.name) === null){
      animals.push(animal);
  }
   }
}
   
    
  


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
