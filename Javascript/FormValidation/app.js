let sign_up = document.getElementById('sign_up');

console.log(sign_up)


let users = JSON.parse(localStorage.getItem('users')) || [];
sign_up.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == "" || password == ""){
        alert('Please fill all fields');
        // return false;
    }
    else{
        users.push({username: username, password: password});
        localStorage.setItem('users', JSON.stringify(users));
        alert("Form submitted successfully")
        console.log(username, password);
    }
});

// ! showing the password 

let show_pwd = document.getElementById('show_pwd');
let password = document.getElementById('password');
let textArticle = document.getElementById('textArticle');


show_pwd.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("hii")
    if(password.value != ""){
        if(password.type == "password"){
            password.type = "text";
            textArticle.innerHTML = "Hii"
            show_pwd.innerHTML = 'Hide Password';
        }
        else{
            password.type = "password";
            textArticle.innerHTML = "Hello"
            show_pwd.innerHTML = 'show Password';
        }
    }
    else{
        alert("Please enter your password")
    }
})

let submit_btn = document.getElementById('submit_btn');
let username = document.getElementById('username');

username.addEventListener('input', ()=>{
    let validation = username.value.length <8;
    console.log(validation)

    if(validation){
        username.classList.add('warning')
        username.classList.remove('success')
        submit_btn.disabled = true;
    }
    else{
        username.classList.add('success')
        username.classList.remove('warning')
        submit_btn.disabled = false;
    }
})


password.addEventListener('input', (e)=>{
    let validation = password.value.length <8 
    console.log(validation)

    if(validation){
        password.classList.add('warning')
        password.classList.remove('success')
        submit_btn.disabled = true;
    }
    else{
        password.classList.add('success')
        password.classList.remove('warning')
        submit_btn.disabled = false;
    }
})

let error1 = document.getElementById('error1');

username.addEventListener('input', ()=>{
    let validation = username.value.length <8;
    if(validation){
        error1.innerHTML = "Username must be at least 8 characters long"
    }
    else{
        error1.innerHTML = ""
    }
})

let error2 = document.getElementById('error2');

password.addEventListener('input', ()=>{
    let validation = password.value.length <8;
    if(validation){
        error2.innerHTML = "Password must be at least 8 characters long"
    }
    else{
        error2.innerHTML = ""
    }
})

submit_btn.addEventListener("click",()=>{
    window.open('./Login.html')
})

