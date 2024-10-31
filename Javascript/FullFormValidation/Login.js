
let login_email = document.getElementById("user_name");
let login_password = document.getElementById("password");
let login_error = document.getElementById("login_error");
let login_btn = document.getElementById("login_btn");
let login_form = document.getElementById("login_form");

login_form.addEventListener("submit", (e) => {
  e.preventDefault();

  let enteredEmail = login_email.value;
  let enteredPassword = login_password.value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let userExists = users.find(
    (user) => user.email === enteredEmail && user.password === enteredPassword
  );

  if (userExists) {
    // alert("Login successful!");
    window.location.href = "./HomePage.html"; 
  } else {
    alert("Invalid username or password")
    login_error.innerText = "Invalid email or password";
  }
});
