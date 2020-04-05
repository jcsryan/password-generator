var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var choice = []
 
var toUpper = function (i) {
    return i.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


/*function generatePassword() {
 
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {

        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

  
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criteria!");

    }
   

    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
  
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
  
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }

    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
  
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

  
    var password = [];


    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    var ps = password.join("");
    UserInput(ps);
    return ps;
}


function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
*/

function generatePassword() {
  
    enter = parseInt(prompt("How many characters would you like in your password?"));
  if(!enter) {
      alert("Please add in a number!");
  } else if(enter < 8 || enter > 124) {
      enter = parseInt(prompt("You have to choose a number between 8 and 124."))
  } else {
      confirmNumber = confirm("Do you want the pw to contain numbers?");
      confirmCharacter = confirm("Do you want the pw to contain characters?")
      confirmUppercase = confirm("Do you want the pw to contain uppercase letters?")
      confirmLowercase = confirm("Do you want the pw to contain lowercase letters?")
      console.log(confirmCharacter, confirmNumber, confirmLowercase, confirmUppercase)
    }
      switch(confirmCharacter, confirmLowercase, confirmNumber, confirmUppercase) {
      case (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase):
        choice = alert("You have to pick at least one option.");
        console.log(choice)
        break;
      case (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase):
        choice = character.concat(number, alpha, alpha2);
        //choice.push(number, alpha, alpha2, character);
        console.log("work")
        break;
      case (confirmCharacter && confirmNumber && confirmUppercase):
          choice = character.concat(number, alpha2);
        break;
      case (confirmCharacter && confirmNumber && confirmLowercase):
          choice = character.concat(number, alpha2);
        break;
      case (confirmCharacter && confirmLowercase && confirmUppercase):
          choice = number.concat(alpha, alpha2);
        break;
      case (confirmCharacter && confirmLowercase && confirmUppercase):
          choice = character.concat(alpha, alpha2);
        break;
      case (confirmCharacter && confirmNumber):
        choice = character.concat(number);
        break;
      case (confirmCharacter && confirmLowercase):
        choice = character.concat(alpha);
        break;
      case (confirmCharacter && confirmUppercase):
        choice = character.concat(alpha2);
        break;
      case (confirmLowercase && confirmNumber):
        choice = alpha.concat(number);
        break;
      case (confirmLowercase && confirmUppercase):
        choice = alpha.concat(alpha2);
        break;
      case (confirmNumber && confirmUppercase):
        choice = number.concat(alpha2);
        break;
      case (confirmCharacter):
        choice = character;
        break;
      case (confirmNumber):
        choice = number;
        break;
      case (confirmLowercase):
        choice = alpha;
        break;
      case (confirmUppercase):
        choice = space.concat(alpha2);
        break;
      
      }
  
  var password = [];


  for (var i = 0; i < enter; i++) {
      var pickChoices = choice[Math.floor(Math.random() * choice.length)];
      password.push(pickChoices);
  }

  var ps = password.join("");
  UserInput(ps);
  return ps;
};

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}