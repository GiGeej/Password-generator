// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Define charcater sets for password criteria
  var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:'\"<>,.?/";

  // Initialize empty string for chars to include in the password
  var characters = "";

  //Prompt for password length
  var passwordLength = parseInt(
    prompt("Enter a password length (between 8 and 128 characters)")
  );

  //Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("please enter a valid paswword length between 8 and 128 characters");
    return "";
  }

  // confirm character types to include
  var includeLowercase = confirm("include lowercase letters?");
  var includeUppercase = confirm("include uppercase letters?");
  var includeNumeric = confirm("include numeric characters");
  var includeSpecial = confirm("include special characters?");

  //validate at least one character type is selected
  if (
    !includeLowercase &&
    !includeNumeric &&
    !includeSpecial &&
    !includeUppercase
  ) {
    alert("at least one character type must be selected");
    return "";
  }
 

  // build the character set based on selected criteria
  if (includeLowercase){
    characters += lowerCaseChar;
  }
  if (includeUppercase){
    characters += upperCaseChar;
  }
  if (includeNumeric) {
  characters += numericChars;
  }
  if (includeSpecial){
  characters += specialChars;
  }

  // generate the password

  var password = "";
  for (var i = 0; i <passwordLength)
}