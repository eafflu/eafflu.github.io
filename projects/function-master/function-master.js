//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // use method object.values to return an array of all the objects values return in the same line
    return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // use method object.keys to create an array with all the objects keys
    // use the join method to create an array of strings separtated by a space return in one line
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create a results array to hold final result
    // use method object.values to create an array with all the objects values
    let result = Object.values(object);

    // loop through the array, use type of to make sure that every element in the array is a string
    for (let i = 0; i < result.length; i++) {


        if (typeof result[i] !== 'string') {
            // remove any element that is not a string
            result.splice(i, 1);
        }
    }
    // return result.join separated with a space
    return result.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // check to see if collection is an array, if so return 'array', else return 'object' ternary
    return Array.isArray(collection) ? 'array' : 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // isolate and uppercase first character of the string
    // use splice to isolate all the othercharacters in the string not including the first letter
    // use string interpolation to return the joined string and return

    let stringCharUpper = string.charAt(0).toLocaleUpperCase();
    let remainingString = string.slice(1, string.length)

    return `${stringCharUpper}${remainingString}`;

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // convert string to array of words separated by commas
    var result = string.split(' ');
    // element to be returned
    var resulted = [];
    // loop through array

    for (var i = 0; i < result.length; i++) {
        // isolate the first character in every string 

        var firstChar = result[i].charAt(0).toUpperCase()
        // isolate the rest of the string
        var remainingString = result[i].slice(1, result[i].length)
        // push capworded string into resulting array
        resulted.push(`${firstChar}${remainingString}`)

    }

    // return the array as a joined string
    return resulted.join(' ')


}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //isolate the first character of the name string
    let firstCharCap = object.name.charAt(0).toUpperCase();
    // isolate remaining string
    let remainingString = object.name.slice(1, object.name.length);

    // combine capword char with remaining string store in variable
    let result = 'Welcome ' + `${firstCharCap}${remainingString}` + '!';

    //return variable
    return result;

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

    //isolate the first character of the name string    
    let nameCharCap = object.name.charAt(0).toUpperCase();

    //isolate the first character of the species string    
    let speciesCharCap = object.species.charAt(0).toUpperCase();

    //isolate the remaining of the species string
    let remainingNameString = object.name.slice(1, object.name.length);

    //isolate the remaining of the species string
    let remainingSpeciesString = object.species.slice(1, object.species.length);

    // combine the strings to hether respectively store in variable
    let result = `${nameCharCap}${remainingNameString} is a ${speciesCharCap}${remainingSpeciesString}`;

    // return the result
    return result;


}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    // check to see if object has noises property
    // yes, return the value at the array separated by a string
    // yes and the arrays length is > 1
    // no return 'there are no noises' this value will be hard coded
    //return all this in a one lined ternary 

    return object.hasOwnProperty('noises') && object.noises.length === 0 ?
        'there are no noises' : object.hasOwnProperty('noises') ?
        object.noises.join(' ') : 'there are no noises';


}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // use the string method includes to see if word is in string
    return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    // use push method to add the name string into the objects friend array
    object.friends.push(name);
    // return the object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    /* check if object has keys, if not return false, if yes, check to see
     * if the object has the property of name if yes or no use includes method to see
     * return all these conditions in a one lined ternary
     */
    return Object.keys(object).length === 0 ? false : object.hasOwnProperty('name') ?
        object.friends.includes(name) : object.friends.includes(name);

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // declare a result array that will hold non friends
    let nonFriendsList = [];
    // loop
    for (let i = 0; i < array.length; i++) {
        let currentName = array[i].name;
        let currentFriendsList = array[i].friends;
        // does the value of name match the current persons name property?
        // if the curremtName does not match the name
        if (currentName !== name) {
            //  no use includes method on friends property to see if name exists
            if (!currentFriendsList.includes(name)) {
                // if this name is not in the friends array push currentName into
                //NFL
                nonFriendsList.push(currentName);


            }

        }

    }

    return nonFriendsList;


}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // check to see if property, does not exist on the input object
    if (!object.hasOwnProperty(key)) {
        // if the property doesnt exist create it set value to undefined
        object[key] = null;
    }
    // assign the value of key to input value
    object[key] = value;

    // return the updated object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // store all objects keys in array
    let objectsKeys = Object.keys(object);
    // loop
    for (var i = 0; i < array.length; i++) {
        // use includes method to see if the current element exists in the object
        if (objectsKeys.includes(array[i])) {
            // if there is a match use delete to remove propertyfrom the object
            delete object[array[i]];
        }
    }
    // return the updated object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let result = [];
    // loop through array 
    for(var i = 0; i < array.length; i++){
     // isolate the current element in the array
        let currentElement = array[i];
      // if current element doesnt exist in the array
        if(!result.includes(currentElement)){
            // push the element into result
            result.push(currentElement)
        }
    }
        return result;
        // result.push current element
        
      
    
     
  

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}
