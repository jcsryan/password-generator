var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbol = "*+-,./:<=>,?@[]^`{|}~"
var numbers = "1234567890"
var givenString = ''
var pwdString =''

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

function generatePassword() {
    givenString = ''
    totalString = ''
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose between 8 and 128"));

    }  if(confirmNumber = confirm("Will this contain numbers?")) {
        givenString += numbers;
        console.log(givenString)
    }  if(confirmCharacter = confirm("Will this contain special characters?")){
        givenString += symbol;
        console.log(givenString)
    }  if(confirmUppercase = confirm("Will this contain Uppercase letters?")){
        givenString += alphabetCap;
        console.log(givenString)
    }  if(confirmLowercase = confirm("Will this contain Lowercase letters?")){
        givenString += alphabet;
        console.log(givenString)

    }
    var totalString = givenString;
     
var passwordTotal=''
for (var i = 0; i < enter; i++) {
    var pickChoices = totalString[Math.floor(Math.random() * totalString.length)];
    passwordTotal += pickChoices
    document.getElementById("password").textContent = passwordTotal;

}
};
