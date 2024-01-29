const login = document.getElementById("login_link");
const signUp = document.getElementById("signUp_link");
const loginPage = document.getElementById("login");
const signUpPage = document.getElementById("signUp");
const login_frm = document.getElementById("login_frm");
const signUp_frm = document.getElementById("signUp_frm");

login.onclick = function () {
  signUpPage.style.display = "none";
  loginPage.style.display = "block";
};

signUp.onclick = function () {
  loginPage.style.display = "none";
  signUpPage.style.display = "block";
};

signUp_frm.onsubmit = function () {
  let user = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;

  let user_object_data = {
    username: user,
    email: email,
    number: number,
    password: password,
  };
  let user_text_data = JSON.stringify(user_object_data);

  if (user != "" && email != "" && number != "" && password != "") {
    localStorage.setItem(email, user_text_data);
  }
};
