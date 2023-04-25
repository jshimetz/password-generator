// Assignment code here
var specialCharacters = [
  '~',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  ';',
  ':',
  '"',
  ',',
  '.',
  '/',
  '<',
  '>',
  '?',
];

var numberCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

var lowercaseLetters = [
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
  'z',
];

var uppercaseLetters = [
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
  'Z',
];

function createPassword(){
  enter = parseInt(prompt('How many characters would you like your password to contain?'));
  if (!enter) {
    alert("Password length must be provided as a number");
    return null;
  } 
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("This value must be between 8 and 128 characters"));
    return null;
  }
  else {
    confirmSpecialCharacters = confirm("Click OK to confirm including special characters.")
    confirmNumberCharacters = confirm("Click OK to confirm including numbers.")
    confirmLowercaseLetters = confirm("Click OK to confirm including lowercase letters.")
    confirmUppercaseLetters = confirm("Click OK to confirm including uppercase letters.")
  }
if (
  confirmSpecialCharacters === false &&
  confirmNumberCharacters === false &&
  confirmLowercaseLetters === false &&
  confirmUppercaseLetters === false 
) {
  alert("Must select at least one character type");
  return null;
}

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
