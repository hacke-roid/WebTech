let first_name = document.getElementById("first-name");
let last_name = document.getElementById("last-name");
let email = document.getElementById("email-id");
let password = document.getElementById("password");
let number = document.getElementById("phone-no");
let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let submit_btn = document.getElementById("submit-btn");
console.log(submit_btn);

let sign_up_btn = document.getElementById("sign_up");

// console.log(first_name)

first_name.addEventListener("input", (e) => {
  // console.log(e.target.value)
  let inputValue = first_name.value;
  console.log(inputValue);

  if (inputValue.length < 4) {
    first_name.classList.add("warning");
    first_name.classList.remove("success");
    error1.innerHTML = "First name must be at least 4 characters long";
  } else {
    first_name.classList.add("success");
    first_name.classList.remove("warning");
    error1.innerHTML = "";
  }
});

password.addEventListener("input", (e) => {
  // console.log(e.target.value)
  let inputValue = password.value;
  console.log(inputValue);

  if (inputValue.length < 8) {
    password.classList.add("warning");
    password.classList.remove("success");
    error2.innerHTML = "Password must be at least 8 characters long";
  } else {
    password.classList.add("success");
    password.classList.remove("warning");
    error2.innerHTML = "";
  }
});

let error3 = document.getElementById("error3");
number.addEventListener("input", () => {
  let validation = number.value;
  console.log(validation);

  if (validation.length === 10 && validation.length !== "") {
    number.classList.add("success");
    number.classList.remove("warning");
    error3.innerHTML = "";
    submit_btn.disabled = false;
  } else {
    number.classList.add("warning");
    number.classList.remove("success");
    error3.innerHTML = "Please enter a valid 10-digit phone number";
    submit_btn.disabled = true;
  }
});

let users = JSON.parse(localStorage.getItem("users")) || [];

sign_up_btn.addEventListener("submit", (e) => {
  e.preventDefault();

  let first_name_value = first_name.value;
  let last_name_value = last_name.value;
  let email_value = email.value;
  let password_value = password.value;
  let number_value = number.value;

  if (
    first_name_value == "" ||
    last_name_value == "" ||
    email_value == "" ||
    password_value == "" ||
    number_value == ""
  ) {
    alert("Please fill all fields");
    // return false;
  } else {
    users.push({
      first_name: first_name_value,
      last_name: last_name_value,
      email: email_value,
      password: password_value,
      number: number_value,
    });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Form submitted successfully");
    console.log(
      first_name_value,
      last_name_value,
      email_value,
      password_value,
      number_value
    );

    window.open("./Login.html");
  }
});
