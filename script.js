let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "0OoBg2hD!Nq@r17RinzTXulwQ5UWyja8_V#LYHMkZ4fPItdJ3-cGA9mSF6bvexCEKps";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword(){
    alert("Senha copiada");
    navigator.clipboard.writeText(newPassword);
}