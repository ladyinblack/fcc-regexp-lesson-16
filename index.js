// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match Beginning String Patterns</h1>`;

/** TODO:
 * Use the caret character in a regex to find Cal only in the beginning of the string rickyAndCal.
 
 let rickyAndCal = "Cal and Ricky both like racing.";
 let calRegex = /change/;    // Change this line 
 let result = calRegex.test(rickyAndCal);
 */

let rickyAndCal = 'Cal and Ricky both like racing.';
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

console.log(result);
