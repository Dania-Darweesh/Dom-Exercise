const password = document.getElementById("password");
const passRepeat = document.getElementById("passRepeat");
const passMessage = document.getElementById("passwordMessage");
const repeatMessage = document.getElementById("repeatMessage");
const sign = document.getElementById("sign");
sign.style.display = "none";

password.addEventListener('focusout' , checkPass);
passRepeat.addEventListener('focusout', checkRepeat);

function checkPass(){
    if(password.value.length < 6)
    {
        passMessage.innerText='Too short';
        passMessage.style.color='red';
        
    }
    else { passMessage.style.display='none' ;} 
}

function checkRepeat(){
    if(password.value===passRepeat.value && password.value.length >= 6){
        sign.style.display="block"; 
    }
    else if (password.value !== passRepeat.value){
        repeatMessage.innerText=' The password is not match ';
        repeatMessage.style.color='red';
    }
    else repeatMessage.style.display='none';
}





