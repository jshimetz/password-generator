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

function getPasswordOptions() {
  var enter = parseInt(prompt('How many characters would you like your password to contain?'));
  if (!enter) {
    alert("Password length must be provided as a number");
    return null;
  } else if (enter < 8 || enter > 128) {
    alert("This value must be between 8 and 128 characters");
    return null;
  } else {
    var confirmSpecialCharacters = confirm("Click OK to confirm including special characters.");
    var confirmNumberCharacters = confirm("Click OK to confirm including numbers.");
    var confirmLowercaseLetters = confirm("Click OK to confirm including lowercase letters.");
    var confirmUppercaseLetters = confirm("Click OK to confirm including uppercase letters.");

    if (
      confirmSpecialCharacters === false &&
      confirmNumberCharacters === false &&
      confirmLowercaseLetters === false &&
      confirmUppercaseLetters === false 
    ) {
      alert("Must select at least one character type");
      return null;
    }

    var passwordOptions = {
      length: enter,
      hasSpecialCharacters: confirmSpecialCharacters,
      hasNumberCharacters: confirmNumberCharacters,
      hasLowercaseLetters: confirmLowercaseLetters,
      hasUppercaseLetters: confirmUppercaseLetters,
    };

    return passwordOptions;
  }
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  
  if (options.hasNumberCharacters) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
    guaranteedCharacters.push(getRandom(numberCharacters));
  }
  
  if (options.hasLowercaseLetters) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
    guaranteedCharacters.push(getRandom(lowercaseLetters));
  }
  
  if (options.hasUppercaseLetters) {
    possibleCharacters = possibleCharacters.concat(uppercaseLetters);
    guaranteedCharacters.push(getRandom(uppercaseLetters));
  }
  

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
  var guaranteedIndex = Math.floor(Math.random() * options.length);
  result[guaranteedIndex] = guaranteedCharacters[i];
}

  return result.join('');
}


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
