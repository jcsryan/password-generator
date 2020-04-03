// Assignment code here
var char = 'abcdefghijklimnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789'
var symbol = '!@#$%^&*=-_'

submit.addEventListener("click", function(e)){
    var characters = char;
    (num)
}

function password(len, char) {
    var pwd = '';
    for(var i =0; i < len ; i++){
        pwd += char.charAt(Math.floor(Math.random() * char.length));
    }
    return pwd;
};

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