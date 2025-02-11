//alert ("hello ca marche");

const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSingin = document.getElementById("btnSignin");

console.log(mailInput, passwordInput, btnSignin);
btnSingin.addEventListener("click",checkCredentials);

function checkCredentials(){
    //ici,il faudra appeler l'API pour vérifier les credentials en bdd

    if(mailInput.value == "contact@gmail.com" && passwordInput.value == "55ruedeN@gis"){
        //alert ("Vous êtes connecté !");

        //il faudra récupérer le vrai Token
        const token = "azertyuiopqsdfghjklmwxcvbn";
        setToken(token);

        //placer ce Token en cookie
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}