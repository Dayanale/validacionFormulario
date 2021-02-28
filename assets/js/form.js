// Seleccionar variables del los inputs:


let palabra = document.getElementById('palabra');
let email1 = document.getElementById('emailLogin');
let password1 = document.getElementById('passLogin');
let email2 = document.getElementById('emailSignUp');
let password2 = document.getElementById('passSignUp');
let passwordConfirm = document.getElementById('passConfirm');
let inputProvince = document.forms["signUpForm"]["inputProvince"];

// Prevenir comportamiento submit por defecto. En vez de eso activamos la funciones de validación:

document.getElementById('searchForm').addEventListener('submit', e => {
    let form = document.getElementById('searchForm');
    e.preventDefault();
    checkInputsSearch(form);
});

document.getElementById('loginForm').addEventListener('submit', e => {
    let form = document.getElementById('loginForm');
    e.preventDefault();
    checkInputsLogin(form);
});

document.getElementById('signUpForm').addEventListener('submit', e => {
    let form = document.getElementById('signUpForm');
    e.preventDefault();
    checkInputsSignUp(form);
});

// Funciones de validación para cada formulario:

function checkInputsSearch(form) {

    let palabraValue = palabra.value.trim();

    if (palabraValue === '') {
        setErrorFor(form, palabra, 'Search input cannot be blank');
    } else if (palabraValue.length < 3) {
        setErrorFor(form, palabra, 'The word has to be larger than 3 letters');
    } else {
        setSuccessFor(form, palabra, 'Success en input Palabra!');
    }
}

function checkInputsLogin(form) {

    let emailValue = email1.value.trim();
    let passValue = password1.value.trim();

    if (emailValue === '') {
        setErrorFor(form, email1, 'Email no puede estar vacío');
    } else if (!isEmail(emailValue)) {
        setErrorFor(form, email1, 'Not a valid email');
    } else {
        setSuccessFor(form, email1, 'Success en input email!');
    }


    if (passValue === '') {
        setErrorFor(form, password1, 'Password no puede estar vacío');
    } else if (!passwordCorrect(passValue)) {
        setErrorFor(form, password1, 'La contraseña no es válida (mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número');
    } else {
        setSuccessFor(form, password1, 'Success en input password!');
    }
}


function checkInputsSignUp(form) {

    let emailValue = email2.value.trim();
    let passValue = password2.value.trim();
    let passConfirmValue = passwordConfirm.value.trim();

    if (emailValue === '') {
        setErrorFor(form, email2, 'Email no puede estar vacío');
    } else if (!isEmail(emailValue)) {
        setErrorFor(form, email2, 'Not a valid email');
    } else {
        setSuccessFor(form, email2, 'Success en input email!');
    }


    if (passValue === '') {
        setErrorFor(form, password2, 'Password no puede estar vacío');
    } else if (!passwordCorrect(passValue)) {
        setErrorFor(form, password2, 'La contraseña no es válida (mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número');
    } else {
        setSuccessFor(form, password2, 'Success en input password!');
    }


    if (passConfirmValue === '') {
        setErrorFor(form, passwordConfirm, 'Password no puede estar vacío');
    } else if (passValue !== passConfirmValue) {
        setErrorFor(form, passwordConfirm, 'Passwords no coinciden');
    } else {
        setSuccessFor(form, passwordConfirm, 'Las contraseñas coinciden!');
    }


    if (inputProvince.value === '') {
        setErrorFor(form, inputProvince, "La provincia es obligatoria");
    } else {
        setSuccessFor(form, inputProvince, 'Success en input Provincia!');
    }

}

// Mostrar mensaje de error en el campo correspondiente:

function setErrorFor(form, input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.className = "invalid-feedback";
    input.className = "form-control is-invalid";
    small.innerText = message;

}

// Mostrar mensaje de éxito en el campo correspondiente:

function setSuccessFor(form, input, message) {

    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.className = "valid-feedback";
    input.className = "form-control is-valid";
    small.innerText = message;
}

// Funcion para validar formato del email introducido:

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

/* Funcion para validar que la contraseña introducida cumple con el formato de:
Mínimo ocho caracteres, al menos una letra mayúscula, una letra minúscula y un número: */
function passwordCorrect(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)
}





















