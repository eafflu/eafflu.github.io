/*
 * String Manipulation:
 *
 * 0. Strings can be manipulated with operators and methods specific to strings. 
 * Strings can be accesed the same way we access values in arrays using bracket
 * notation. All strings have three properties .constructor, .length, .prototype
 * 
 * 0a. Constructor Property: Returns the string's constructor property
 * 
 * 0b. Length Property: Returns the length of the string
 *
 * 0c. Prototype Property: Allows you to add properties and methods to an object
 *
 * 1. With Operators: using the addition operator we can combine two string data
 * types to form a new combined string
 *
 * 2. With methods: using pre determined methods in javascript, we can use 
 * string methods to manipulate any string
 */

let hungry = true;
let pizza = 'pizza';


if (hungry) {
    
// We can use the addition operator to concatenate two strings together 
    console.log("I'm Going To Get" + `${pizza}`); // Prints <= I'm Going To Get pizza
}

// String Interpolation: a method which lets us inject directly into a string
console.log(`${hungry}${pizza}`); // Prints <= truepizza

// Length Property
let vacationSpot = 'iceland';
console.log(vacationSpot.length); // <= prints 7

// String Access

// accessing the first element in any string
console.log(vacationSpot[0]); // <= prints i

// accessing the last element in any string
console.log(vacationSpot[vacationSpot.length - 1]); // <= prints d


///////////////////////String Methods//////////////////////////////////////////

// charAt(): returns the character at the specified index/position

if (true) {
    let str = "Hey y'all";
    let result = str.charAt(0);
    console.log(result); // <= prints H
}

// charCodeAt(): returns the Unicode of the character at the specified index

if (true) {
    let str = "Hey, Y'all";
    let result = str.charCodeAt(0);
    console.log(result); // <= prints 72
}

// corcat(): Joins two or more strings and returns a new joined string

if (true) {
    let str = "Hey Y'all";
    let str2 = "Hey Y'all";
    let result = str.concat(str2);
    console.log(result); // <= prints Hey Y'allHey Y'all
}

// endsWith() checks whether a string ends with specified string/characters

if (true) {
    let str = "Hey Y'all";
    let result = str.endsWith('all');
    console.log(result); // <= prints true
}


// includes(): checks whether a string contains the specified string/characters

if (true) {
    let str = "Hey Y'all";
    let result = str.includes('H');
    console.log(result); // <= prints true
}

// indexOf(): returns the position of the first found occurence of a specified
 //value in a string

if (true) {
    let str = "Hey Y'all";
    let result = str.indexOf('H');
    console.log(result); // <= prints 0
}

// lastIndexOf(): Returns the position of the last found occurence of a 
 //specified value in a string

if (true) {
    let str = "Hey Y'all";
    let result = str.lastIndexOf('l');
    console.log(result); // <= prints 8
}

// match(): Searches a string for a match against a regular expression and
 //returns the matches

if (true) {
    let str = "Hey Y'all";
    let result = str.match(/all/g);
    console.log(result); // <= prints ['all']
}

// localeCompare(): Compares two strings in the current locale/scope

if (true) {

    let str = "Hey";
    let str2 = "Y'all";
    let str3 = "Hey"

    // returns -1 when str is sorted before str2
    let result = str.localeCompare(str2);

    // returns 0 when str is equal to str3
    let result2 = str.localeCompare(str3);

    // returns 1 when str2 is sorted before str3
    let result3 = str2.localeCompare(str3);

    console.log(result); // <= prints -1
    console.log(result2); // <= prints 0
    console.log(result3); // <= prints 1
}

// repeat(): Returns a new string with a specified number of copies of an 
 //existing string

if (true) {
    let str = "Hey Y'all";
    let result = str.repeat(2);
    console.log(result) // <= prints Hey Y'allHey Y'all
}



// replace(): Searches a string for a specified value of regular expression,
 //returns the position of the match

if (true) {
    let str = "Hey Y'all";
    let result = str.replace("Y'all", "Girl!");
    console.log(result); // <= prints Hey Girl
}

// search(): Searcnes a string for a specified value or regular expression, 
 //and returns the postion of the match

if (true) {
    let str = "Hey Y'all";
    let result = str.search("Y'all");
    console.log(result); // <= prints 4
}

// slice(): Extracts part of a string and returns a new string

if (true) {
    let str = "Hey Y'all";
    let result = str.slice(0, 2);
    console.log(result); // <= prints He
}

// split(): Split a string into an array of substrings

if (true) {
    let str = "Hey Y'all";
    let result = str.split(' ');
    console.log(result); // <= prints ['hey', "Y'all"] 
}

// startsWith(): Checks whether a string begins with specified characters, 
 //returns a boolean

if (true) {
    let str = "Hey Y'all";
    let result = str.startsWith("Hey");
    console.log(result); // <= prints true
}

// substring(): extracts the characters from a string betwween two specified 
 //characters

if (true) {
    let str = "Hey Y'all";
    let result = str.substring(1, 4);
    console.log(result); // <= prints ey
}


// substr(): Extracts the characters from a string, beginning at a specified 
 //start position, and through the specified number of character

if (true) {
    let str = "Hey Y'all";
    let result = str.substr(1, 4);
    console.log(result); // <= prints ey Y
}

// toLocaleLowerCase(): Converts a string to lowercase letter based on he hosts
 //locale

if (true) {
    let str = "hey y'all";
    let result = str.toLocaleLowerCase();
    console.log(result); // <= prints hey y'all
}

// toLocaleUpperCase():  Converts a string to lowercase letter based on he hosts
//locale

if (true) {
    let str = "Hey Y'all";
    let result = str.toLocaleUpperCase();
    console.log(result); // <= prints HEY Y'ALL
}

// toString(): Returns the value of a string object

if (true) {
    let str = "Hey Y'all";
    let result = str.toString();
    console.log(result); // <= prints "Hey Y'all"
}

// toUpperCase(): Converts a string to uppercase letters

if (true) {
    let str = "Hey Y'all";
    let result = str.toUpperCase();
    console.log(result); // <= prints HEY Y'ALL
}

// toLowerCase(): Converts a string to lowercase letters

if (true) {
    let str = "Hey Y'all";
    let result = str.toLowerCase();
    console.log(result); // <= prints hey y'all
}


// trim(): Removes whitespace from both ends of a string

if (true) {
    let str = " Hey Y'all ";
    let result = str.trim();
    console.log(result); // <= prints "Hey Y'all" 
}

// valueOf(): Returns the primitve value of a string object

if (true) {
    let str = "Hey Y'all";
    let result = str.valueOf();
    console.log(result); // <= prints Hey Y'all
}
