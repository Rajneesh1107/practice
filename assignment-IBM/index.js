let formContainer = document.getElementById("container");
let form = document.querySelector(".form");
let nameInp = document.querySelector(".name");
let passwordInp = document.querySelector(".password");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let emailInp = document.querySelector(".email").value;
  let passwordInp = document.querySelector(".password").value;

  let status = emailValidator(emailInp);
  if (status !== "valid") {
    alert(status);
  } else {
    alert(`email is ${status}`);
  }

  let passwordStatus = validatePassword(pass);
  if (passwordStatus !== "valid") {
    alert(passwordStatus);
  } else {
    alert(`password is ${passwordStatus}`);
  }
});

//email
function emailValidator(email) {
  if (email.indexOf("@") == -1) {
    return "@ is not present";
  }
  if (email.indexOf(".") == -1) {
    return " . is not present";
  }
  if (email.indexOf(".") == 0) {
    return "An email should not be start with dot .";
  }
  if (email.indexOf("@") == 0) {
    return "No character before @";
  }
  if (email.indexOf("@") + 1 == email.lastIndexOf(".")) {
    return "Domain can not start with dot .";
  }
  if (email.lastIndexOf(".") + 1 == email.length) {
    return "Email never end with .";
  }
  if (email.lastIndexOf(".") + 2 == email.length) {
    return "not a valid tld ";
  }
  if (email[email.indexOf(".")] == email[email.indexOf(".") + 1]) {
    return "Double dots are not allowed ";
  }
  return "valid";
}

//password
function validatePassword(password) {
  let hasUpperCase = false;
  let hasLowerCase = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;

  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    } else if (char >= "a" && char <= "z") {
      hasLowerCase = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if ("!@#$%^&*()_+{}[]|;:,.<>?".includes(char)) {
      hasSpecialCharacter = true;
    }
  }

  if (!hasUpperCase) {
    return "Password contain at leat one uppercase";
  }
  if (!hasLowerCase) {
    return "Password contain at leat one lowerCase";
  }
  if (!hasNumber) {
    return "Password contain at leat one numeric";
  }
  if (!hasSpecialCharacter) {
    return "Password contain at leat one special character";
  }

  return "valid";
}
