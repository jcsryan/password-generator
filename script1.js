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
  };
  switch(choice) {
      case (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase):
        choice = alert("You have to pick at least one option.");
      break;
      case (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase):
        choice = character.concat(number, alpha, alpha2);
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