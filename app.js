let code = document.getElementById("code");
let copyCodeBtn = document.getElementById("copyCodeBtn");

copyCodeBtn.addEventListener("click", ()=>{
    code.select();
    document.execCommand("copy");
    copyCodeBtn.innerHTML = "<i class='fas fa-check-circle'></i>";
});

let password = document.getElementById("password");
let copyPasswordBtn = document.getElementById("copyPasswordBtn");

copyPasswordBtn.addEventListener("mouseover", ()=>{
    password.select();
    document.execCommand("copy");
    copyPasswordBtn.innerHTML = "<i class='fas fa-check-circle'></i>";
});