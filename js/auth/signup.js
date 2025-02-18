// Récupération des éléments
const inputNom = document.getElementById("nomInput");
const inputPrenom = document.getElementById("prenomInput");
const inputMail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidationPassword = document.getElementById("validatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

// Ajout des écouteurs d'événements
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);


// Fonction principale de validation
function validateForm() {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validatePasswordMatch(inputPassword, inputValidationPassword);

    // Vérifier que tout est valide avant d'activer le bouton
    btnValidation.disabled = !(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk);
}

// Fonction de validation du mail
function validateMail(input) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (emailRegex.test(mailUser)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction de validation des champs requis
function validateRequired(input) {
    if (input.value.trim() !== '') {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction de validation du mot de passe avec regex
function validatePassword(input) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const passwordValue = input.value;

    if (passwordRegex.test(passwordValue)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    } else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Vérifier si les mots de passe correspondent
function validatePasswordMatch(password, confirmation) {
    if (password.value === confirmation.value && password.value !== '') {
        confirmation.classList.add("is-valid");
        confirmation.classList.remove("is-invalid");
        return true;
    } else {
        confirmation.classList.remove("is-valid");
        confirmation.classList.add("is-invalid");
        return false;
    }
}