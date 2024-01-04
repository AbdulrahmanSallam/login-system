const nameInput = document.getElementById("userNameInput");
const emailInput = document.getElementById("userEmailInput");
const passInput = document.getElementById("userPassInput");
const signBtn = document.getElementById("signBtn");

const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertPass = document.getElementById("alertPass");
const alertCheck = document.getElementById("alertCheck");

const signIn = document.getElementById("signIn");
signIn.addEventListener("click", function () {
  location = "./index.html";
});

let usersList = [];

if (localStorage.getItem("users") != null) {
  usersList  = JSON.parse(localStorage.getItem("users"));
}

signBtn.addEventListener("click", function () {
  if (checkValidation()) {
    let user = {
      name: nameInput.value,
      email: emailInput.value,
      pass: passInput.value,
    };
    usersList.push(user);
    localStorage.setItem("users", JSON.stringify(usersList));
  }
});

function checkValidation() {
  if (
    validationName() &&
    validationEmail() &&
    validationPass() &&
    !isRepeated()
  ) {
    alertCheck.innerHTML = "success";
    alertCheck.classList.add("text-success");
    alertCheck.classList.remove("text-danger", "d-none");
    return true;
  } else if (isRepeated()) {
    alertCheck.innerHTML = "email already exists";
    alertCheck.classList.add("text-danger");
    alertCheck.classList.remove("text-success","d-none");
    return false;
  } else {
    alertCheck.innerHTML = "Invalid";
    alertCheck.classList.add("text-danger");
    alertCheck.classList.remove("text-success", "d-none");
    return false;
  }
}

nameInput.addEventListener("input", validationName);
function validationName() {
  const email = nameInput.value;
  const nameRegex = /^(\w|\s){1,}$/;

  if (nameRegex.test(email)) {
    alertName.classList.add("d-none");
    return true;
  }
  alertName.classList.remove("d-none");
  return false;
}

emailInput.addEventListener("input", validationEmail);
function validationEmail() {
  const name = emailInput.value;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailRegex.test(name)) {
    alertEmail.classList.add("d-none");
    return true;
  }
  alertEmail.classList.remove("d-none");
  return false;
}

passInput.addEventListener("input", validationPass);
function validationPass() {
  const pass = passInput.value;
  const passRegex = /^\w{8,}$/;

  if (passRegex.test(pass)) {
    alertPass.classList.add("d-none");
    return true;
  }
  alertPass.classList.remove("d-none");
  return false;
}

function isRepeated() {
  const email = emailInput.value;
  for (let i = 0; i < usersList.length; i++) {
    if (usersList[i].email == email) {
      return true;
    }
  }
  return false;
}
