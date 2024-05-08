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

// signup start

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
    let signUp_btn = document.getElementById("signUp_btn");
    signUp_btn.style.background = "green";
    signUp_btn.innerHTML =
      "<i class='fa-solid fa-circle-check'></i> SignUp Successfull !";

    setTimeout(function () {
      signUp_btn.style.background =
        "linear-gradient(to right, #db36a4, #f7ff00)";
      signUp_btn.innerHTML = "Sign Up";
      signUp_frm.reset();
    }, 3000);
    return false;
  }
};

// signup end

// validation email start
let email_input = document.getElementById("email");
email_input.onchange = function () {
  let email = document.getElementById("email").value;
  let warning = document.getElementById("email_notice");
  let signUp_btn = document.getElementById("signUp_btn");
  if (localStorage.getItem(email) != null) {
    warning.style.display = "block";
    email_input.style.borderBottomColor = "red";
    signUp_btn.disabled = true;
    signUp_btn.style.background = "#ccc";

    email_input.onclick = function () {
      email_input.value = "";
      email_input.style.borderBottomColor = "#ccc";
      warning.style.display = "none";
      signUp_btn.disabled = false;
      signUp_btn.style.background =
        "linear-gradient(to right, #db36a4, #f7ff00)";
    };
  }
};

// validation email end

// start login coding
login_frm.onsubmit = function () {
  let email = document.getElementById("login_email");
  let password = document.getElementById("login_password");
  let login_email_warn = document.getElementById("login_email_warning");
  let login_password_warn = document.getElementById("login_password_warning");

  if (localStorage.getItem(email.value) == null) {
    login_email_warn.style.display = "block";
    email.style.borderBottomColor = "red";

    email.onclick = function () {
      login_email_warn.style.display = "none";
      email.style.borderBottomColor = "#ccc";
    };
  } else {
    let text_data = localStorage.getItem(email.value);
    let obj_data = JSON.parse(text_data);
    let correct_email = obj_data.email;
    let correct_password = obj_data.password;

    if (email.value == correct_email) {
      if (password.value == correct_password) {
        let login_btn = document.getElementById("login_btn");
        login_btn.style.background = "green";
        login_btn.innerHTML =
          "<i class='fa-solid fa-circle-check'></i> Login SuccessFull !";
        setTimeout(function () {
          login_btn.style.background ="linear-gradient(to right, #db36a4, #f7ff00)";
          login_btn.innerHTML = "Login";
          login_btn.reset();
        }, 3000);
      } else {
        login_password_warn.style.display = "block";
        password.style.borderBottomColor = "red";

        password.onclick = function () {
          password.value = "";
          login_password_warn.style.display = "none";
          password.style.borderBottomColor = "#ccc";
        };
      }
    }
  }
  return false;
};
// end login coding
