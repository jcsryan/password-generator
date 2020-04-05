//create six strings, four to choose from, two to concatenate into.
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var symbol = "*+-,./:<=>,?@[]^`{|}~"
var numbers = "1234567890"
var givenString = ''
var pwdString =''

//generate a number from the user's choice in the initial click of 
//the generate password button.
var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

//function to add each string the user picks into an initally
//empty string, if the user picks less than 8 or more than 124
// the function generates a warning and restarts.
function generatePassword() {
//givenString and totalString are set to empty here so the function
//can be rerun without refreshing the  page.
    givenString = ''
    totalString = ''
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 124) {

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
     
//Simple for loop that generates a random password by taking the
//length of the users password and randomly pulling from the
//concatenated list which is set to totalString at the end of
//the function above.    
var passwordTotal=''
for (var i = 0; i < enter; i++) {
    var pickChoices = totalString[Math.floor(Math.random() * totalString.length)];
    passwordTotal += pickChoices
    document.getElementById("password").textContent = passwordTotal;

}
};
