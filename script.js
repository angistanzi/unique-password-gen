// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let userOptions = [];

let upperLowerCharacters = lowerCasedCharacters.concat(upperCasedCharacters);
let allCharacters =  specialCharacters.concat(numericCharacters.concat(lowerCasedCharacters.concat(upperCasedCharacters)));
let specialUpperLowerCharacters = lowerCasedCharacters.concat(upperCasedCharacters.concat(specialCharacters));
let numerUpperLowerCharacters = lowerCasedCharacters.concat(upperCasedCharacters.concat(numericCharacters));
  

// Function to prompt user for password options
function getPasswordOptions() {

  window.userOptionZero = prompt("Please enter how many characters you would like your password to be. Enter a number between 10 and 64 only.");
  let userOptionOne = confirm("Would you like numeric characters in your password? Select 'OK' for YES, or 'Cancel' for NO.");
  let userOptionTwo = confirm("Would you like special characters ($@%&*?, etc.) in your password? Select 'OK' for YES, or 'Cancel' for NO.");
  
  return userOptions.push(userOptionZero, userOptionOne, userOptionTwo);
}
console.log(userOptions);

getPasswordOptions();

// Function for getting a random element from an array
function getRandom() {

  let randomAllCharacters = Math.floor(Math.random()*allCharacters.length);
  let randomNumerUpperLowerCharacters = Math.floor(Math.random()*numerUpperLowerCharacters.length);
  let randomSpecialUpperLowerCharacters = Math.floor(Math.random()*specialUpperLowerCharacters.length);
  let randomUpperLowerCharacters = Math.floor(Math.random()*upperLowerCharacters.length);

  if (userOptions[1]===true & userOptions[2]===true){
  
    return allCharacters[randomAllCharacters];

  
  } else if (userOptions[1]===true & userOptions[2]===false){
  
    return numerUpperLowerCharacters[randomNumerUpperLowerCharacters];
  
  } else if (userOptions[1]===false & userOptions[2]===true){

  
    return specialUpperLowerCharacters[randomSpecialUpperLowerCharacters];
  
  
  }else if (userOptions[1]===false & userOptions[2]===false){
    return upperLowerCharacters[randomUpperLowerCharacters];
  
  };



};

console.log(getRandom());



// Function to generate password with user input
function generatePassword() {
let finalUserPass = ""
for (let i = 0; i < window.userOptionZero; i++) {
  
 let userPass = getRandom()
 finalUserPass += userPass
  
}
  return finalUserPass
};

console.log(generatePassword());

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);