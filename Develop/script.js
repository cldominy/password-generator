// Assignment Code
var generateBtn = document.querySelector("#generate");

// Passoword Criteria Arrays
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
lowerCase = lowerCase.split(""); //Lower Case

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
upperCase = upperCase.split(""); //Upper Case

var specialChars = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
specialChars = specialChars.split(""); //Special Chars

var number = "1234567890";
number = number.split(""); //Numbers

// Generating Password Function
function generatePassword() {
  // Password Length Prompt
  var userLength = prompt("How long would you like your password to be?");

  while (userLength < 8 || userLength > 128) {
    alert("Password must be between 8 and 128 characters. Please try again");
    var userLength = prompt("How long would you like your password to be?");
  }

  var alertLength =
    "Your password will have the following amount of characters: " + userLength;

  alert(alertLength);

  // Password Parameters Selection

  // Lowercase Selection
  var userLower = confirm(
    "Do you want lowercase letters in your password? Select OK if you do"
  );
  if (userLower === true) {
    alert("You have selected to have lowercase letters in your password");
  } else {
    alert("You have selected NOT to have lowercase letters in your password");
  }

  // Uppercase Selection
  var userUpper = confirm(
    "Do you want uppercase letters in your password? Select OK if you do"
  );
  if (userUpper === true) {
    alert("You have selected to have uppercase letters in your password");
  } else {
    alert("You have selected NOT to have uppercase letters in your password");
  }

  // Number Selection
  var userNumbers = confirm(
    "Do you want numbers in your password? Select OK if you do"
  );
  if (userNumbers === true) {
    alert("You have selected to have numbers in your password");
  } else {
    alert("You have selected NOT to have numbers in your password");
  }

  // Special Character Selection
  var userSpecial = confirm(
    "Do you want special characters in your password? Select OK if you do"
  );
  if (userSpecial === true) {
    alert("You have selected to have special characteres in your password");
  } else {
    alert("You have selected NOT to have special characters in your password");
  }

  // Parameters not selected
  while (
    userLower === false &&
    userUpper === false &&
    userNumbers === false &&
    userSpecial === false
  ) {
    alert("You must select at least on parameter. Please try again.");

    // Lowercase Selection
    var userLower = confirm(
      "Do you want lowercase letters in your password? Select OK if you do"
    );
    if (userLower === true) {
      alert("You have selected to have lowercase letters in your password");
    } else {
      alert("You have selected NOT to have lowercase letters in your password");
    }

    // Uppercase Selection
    var userUpper = confirm(
      "Do you want uppercase letters in your password? Select OK if you do"
    );
    if (userUpper === true) {
      alert("You have selected to have uppercase letters in your password");
    } else {
      alert("You have selected NOT to have uppercase letters in your password");
    }

    // Number Selection
    var userNumbers = confirm(
      "Do you want numbers in your password? Select OK if you do"
    );
    if (userNumbers === true) {
      alert("You have selected to have numbers in your password");
    } else {
      alert("You have selected NOT to have numbers in your password");
    }

    // Special Character Selection
    var userSpecial = confirm(
      "Do you want special characters in your password? Select OK if you do"
    );
    if (userSpecial === true) {
      alert("You have selected to have special characteres in your password");
    } else {
      alert(
        "You have selected NOT to have special characters in your password"
      );
    }
  }

  // Combining It All Together
  var userChoicePasword = "";

  if (userLower === true) {
    userChoicePasword = userChoicePasword + lowerCase.join("");
  }
  if (userUpper === true) {
    userChoicePasword = userChoicePasword + upperCase.join("");
  }
  if (userSpecial === true) {
    userChoicePasword = userChoicePasword + specialChars.join("");
  }
  if (userNumbers === true) {
    userChoicePasword = userChoicePasword + number.join("");
  }

  userChoicePasword = userChoicePasword.split("");

  var passwordFinal = "";

  // Loop for random selection depending on User's character length
  for (var p = 0; p < userLength; p++) {
    passwordFinal =
      passwordFinal +
      userChoicePasword[Math.floor(Math.random() * userChoicePasword.length)];
  }

  return passwordFinal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
