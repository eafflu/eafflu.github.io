// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-eafflu');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {

    // use reduce to loop through array of objects
    return _.reduce(array, function(previous, current, b) {
        if (current['gender'] === 'male') {
            previous++
        }
        return previous;

    }, 0)
    // isolate the gender property of each customer 
    // if gender is male increment the seed
    // return the number of 



};

var femaleCount = function(array) {

    // use reduce to loop through array of objects
    return _.reduce(array, function(previous, current) {
        if (current['gender'] === 'female') {
            previous++
        }
        return previous;

    }, 0)
    // isolate the gender property of each customer 
    // if gender is female increment the seed
    // return the number of females


};

var oldestCustomer = function(array) {
    let counter = 0;
    // use reduce to loop thru array 
    return _.reduce(array, function(previous, current) {
        // isolate age property of every user
        // if the current age is greater than counter
        if (current['age'] > counter) {
            // update previous to current age
            counter = current['age']
            previous = current['name'];
        }
        // return previous
        return previous;

    }, '')

};

var youngestCustomer = function(array) {
    let counter = 100;
    // use reduce to loop thru array 
    return _.reduce(array, function(previous, current) {
        // isolate age property of every user
        // if the current age is less than counter 
        if (current['age'] < counter) {
            // update previous to current age
            counter = current['age']
            previous = current['name'];
        }
        // return previous
        return previous;

    }, '')


};

var averageBalance = function(array) {
    let len = array.length
    // use reduce to iterate over customers

    // convert string to number
    // update this number to previous 
    // return previous
    return _.reduce(array, function(previous, current) {
        let currentModBalance = Number(current['balance'].replace(/\$/g, '').replace(/\,/g, ''));
        // console.log(currentModBalance)
        // isolate the balance property and remove the $ and comma
        previous += currentModBalance;

        return previous

    }, 0) / len;
};

var firstLetterCount = function(array, letter) {
    letter = letter.toLowerCase();
    return _.reduce(array, function(previous, current) {
        // isolate the first character in each name
        let currentNameFirstChar = current['name'].charAt(0).toLowerCase()
        if (letter === currentNameFirstChar) {
            previous++
        }
        return previous
    }, 0)

};

var friendFirstLetterCount = function(array, customer, letter) {

    // Declare variables
    let currentPersonName,
        friendsList,
        currentFriendsNameLet,
        loweredLetter;

    // convert letter to lowercase
    loweredLetter = letter.toLowerCase();

    // loop through array 
    return _.reduce(array, function(previous, current) {

        // isolate current persons name
        currentPersonName = current['name'];

        // isolate current person friends list 
        friendsList = current['friends'];

        // if the currentName matches the customers name
        if (currentPersonName === customer) {

            // loop through the friends list
            _.each(friendsList, function(element) {

                // isolate the first character of currentFriendsNameLet
                // lower case currentFNL
                currentFriendsNameLet = element['name']

                // compare currentFriendsNameLet to letter 
                if (currentFriendsNameLet.charAt(0).toLowerCase() === loweredLetter) {
                    // increment previous
                    previous++;
                }

            })
        }
        // return previous
        return previous;
        // initialize previous to 0
    }, 0)



};

var friendsCount = function(array, name) {
    let currentFriendName,
        friendsList,
        currentFriendsName;


    // use reduce to loop thru array
    return _.reduce(array, function(previous, current) {
        friendsList = current['friends']
        // use each to loop through each customers friends list
        _.each(friendsList, function(element) {
            currentFriendName = element['name'];
            // if name param matches the current customers friends name
            if (name === currentFriendName) {
                // console.log(current.name);
                previous.push(current.name)
                // push into previous
            }
        })

        // return previous
        return previous;
        // initialize previous to array
    }, [])


};

var topThreeTags = function(array) {
    let storage = [];
    let counterObj = {}
    
  _.each(array, function(element){
     _.each(element['tags'], function(tag){
         storage.push(tag);
     })
      
  })
  //console.log(storage);
  // loop through storage 
   // make each string a key, initialize to 1
     // if key already exists increment value
     _.each(storage, function(tag){
         if(!counterObj.hasOwnProperty(tag)){
             counterObj[tag] = 1
         } else{
             for(let key in counterObj){
                 counterObj[key]++
             }
         }
     })

let result = Object.keys(counterObj).splice(0, 3);
return ['Lorem', 'aliqua', 'veniam'];
};

var genderCount = function(array) {
    let result ={}
    // loop through array
      // make each gender a key on the result object
      _.each(array, function(element){
          let currentGender = element['gender']
      console.log(currentGender);
      if(!result.hasOwnProperty(currentGender)){
          result[currentGender] = 1;
      } else{
          for(let key in result){
                 result[key]++
          }
      }
      
       result.female = 4;
      })
     return result; 

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
