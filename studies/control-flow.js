/*
 * Control Flow:
 *
 * 0. The order in which the computer executes the statement in any given script
 * code is run in order from top to bottom an left to right. Often, conditionals
 * and loops change the control flow(order of execution) of our program.
 *
 * 1. Conditional Statements: Allow us to make decsions in our program by asking
 * true or false questions. if true code runs, if false code will not run. 
 * chaning if-elseif-else statemenst allows us to achieve this! Switch statement
 * -s allow us to do this as well, the syntax is just different.
 *
 * 1a.If: The starting key word for a conditional statement (true/false question)
 *
 * 1b.Else If: Follows the end of the first conditional if evaluates to false
 *
 * 1c.Else: Follows the last conditional, if all previous else & if fails this 
 * code will execute. Also known as the default.
 *
 * 2. Switch: Another way to control the flow of the program. See Example below.
 * 
 * 
 * 
 *
 */


// if 
if(true){
    
    console.log('Dope') //
}

// else-if 


if(false){
    console.log('Hella false')
} else if(false){
    console.log('Dope'); // Nothing logs
}else if(2 > 2){
    console.log('Dope'); // Nothing logs
}else if(3 < 1){
    console.log('Dope'); // Nothing logs
}else if(20 === 21){
    console.log('Dope'); // nothing logs
}else if(2 -1 > 5 + 6){
    console.log('Dope'); // nothing logs
}else {
    // the log below will fire because this is our default
    console.log('All else failed/all previous conditions evaluated to false!');
}

// else

if(false){
    console.log('Hella false')
} else if(true){
    console.log('Dope')
} else {
    console.log('Nice try,good job though')// <=prints Nice try,good job though
}


// Switch Program: 

// random array of numbers
var randomArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// random number generated based on the position of the numbers in the array
// NOTE: This number will change everytime we run the code!

var randomNumber = randomArray[Math.floor(Math.random() * randomArray.length)];
console.log(`${randomNumber}`);

// string that will contain the message for our program
var choice = "";





// every switch statement must commence with the switch keyword
// the parameter randomNumber can be any boolean expression, or datatype
switch (randomNumber) {
    
// A randomNumberis the value to be compared per case
    case 0:
        choice = "Pho";
        console.log(choice);
        break;
    case 1:
        choice = "Vegan";
        console.log(choice);
        break;
    case 2:
        choice = "Seafood";
        console.log(choice);
        break;
    case 3:
        choice = "Tacos";
    console.log(choice)
        break;
    case 4:
        choice = "Fruit";
        console.log(choice);
        break;
    case 5:
        choice = "Salad";
        console.log(choice);
        break;
    case 6:
        choice = "Green Tea";
        console.log(choice);
        break;
    case 7:
        choice = "Water";
        console.log(choice);
    break;
    case 8:
        choice = "Cereal";
    console.log(choice)
        break;
    case 9:
        choice = "Seafood";
        console.log(choice);
        break;
    default:
        choice = "Nothing";
    console.log(choice)
     
}

// open up the console copy & paste to and try it out!