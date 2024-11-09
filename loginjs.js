const cont=document.getElementById("main-contid");
const regisbt=document.getElementById("register");
const loginbt=document.getElementById("login");

regisbt.addEventListener('click',()=>{
    cont.classList.add("active");
});

loginbt.addEventListener('click',()=>{
    cont.classList.remove("active");
});
