const email=document.getElementById("email");
const form=document.getElementById("form");
const parrafo=document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let entrar=false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML= ""
    
    if(!regexEmail.test(email.value)){
        warnings= 'El email no es válido'
        entrar=true
    }
   

    if(entrar){
        parrafo.innerHTML= warnings
    }else{
        warnings= '¡Enviado!'
        parrafo.innerHTML= warnings
    }
});
