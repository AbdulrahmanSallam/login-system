const emailInput = document.getElementById("userEmailInput");
const passInput = document.getElementById("userPassInput");
const loginBtn = document.getElementById("loginBtn");

const alertP = document.getElementById("alert");

const signUp = document.getElementById("signUp");

let index;

signUp.addEventListener("click", function () {
  location = "./signup.html";
});

let userslist = [];

if (localStorage.getItem("users") != null) {
  userslist = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click", function () {
  if (isInList()) {
    sessionStorage.setItem("name",userslist[index].name);//
    location = "../home.html";
  } else if (emailInput.value.length == 0 || passInput.value.length == 0) {
    alertP.innerHTML = "All inputs is required";
    alertP.classList.remove("d-none");
  } else {
    alertP.innerHTML = "Incorrrect email or password";
    alertP.classList.remove("d-none");
  }
});

function isInList() {
  const currentEmail = emailInput.value;
  const currentPass = passInput.value;

  for (let i = 0; i < userslist.length; i++) {
    if (
      currentEmail == userslist[i].email &&
      currentPass == userslist[i].pass
    ) {
      index = i;
      return true;
    }
  }
  return false;
}
