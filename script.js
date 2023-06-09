// Array of special characters to be included in password
function generatePassword() {
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

var passwordLength = getPasswordOptions();

var charTypeSelected = false;
// This loop ensures the user selects at least one character type
while (charTypeSelected == false) {

  var lowerCase = getChoice("lowercase");
  var upperCase = getChoice("uppercase");
  var numericCharacters = getChoice("numeric");
  var specialCharacters = getChoice("special");

  if ((lowerCase) || (upperCase) || (numericCharacters) || (specialCharacters)) {
    charTypeSelected = true;
  } else {
    window.alert("You haven't selected any character type, dummy!")
  }
}

if (lowerCased) {
  selectedArray = selectedArray.concat(lowerCasedCharacters);
}
if (upperCased) {
  selectedArray = selectedArray.concat(upperCasedCharacters);
}
if (numericCharacters) {
  selectedArray = selectedArray.concat(numericCharacters);
}
if (specialCharacters) {
  selectedArray = selectedArray.concat(specialCharacters);
}

 var passwordString = "";
 for (var i = 0; i < passwordLength; i++) {
  passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
}

 return passwordString;
}


function getPasswordOptions() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter a number of characters between 8 and 128: "));
    if (isNaN(userChoice)) {
      userChoice = 0;
    }
  }
  return userChoice;
}

function getChoice(currentOption) {

  var userChoice = "a",
    messagePrompt = "";
  var messagePrompt = ('Do you want '.concat(currentOption));

  messagePrompt = messagePrompt.concat(' characters (y/n)?');
  while (userChoice = "a") {
    userChoice = (window.prompt(messagePrompt));
    if (userChoice == "y") {
      return true;
    } else if (userChoice == "n") {
      return false;
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener('click', writePassword);