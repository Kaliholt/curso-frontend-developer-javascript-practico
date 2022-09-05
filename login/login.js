/******************************************Login****************************************/

// *Lista de emails guardados para el inicio de sesión 
const emails = [];
emails.push({
    email: 'jossy.m@gmail.com',
    password: 'anier0000'
});
emails.push({
    email: 'angel.cg.14@hotmail.com',
    password: 'angel1234'
});
emails.push({
    email: 'kev.8@gmail.com',
    password: 'tubeibileo'
});

/*
* 1. AddEventListener a boton de 'log in'
* 2. Crear función a ser llamada al dar 'clik' a 'log in': extraer value de 'email' y value de 'password' y verificar que sean los correctos
*/

const LoginInputEmail = document.querySelector('.login__input-email');
const LoginInputPassword = document.querySelector('.login__input-password');
const loginButton = document.querySelector('.login-button');
const loginErrorMessage = document.querySelector('.login__error-message');

loginButton.addEventListener('click', checkEmail);

function checkEmail(event) {
    
    const email = LoginInputEmail.value;
    const password = LoginInputPassword.value;
    
    const isEmailCorrect = emails.some(element => (email === element.email && password === element.password));
    
    if(isEmailCorrect) {
        loginErrorMessage.innerText = '';
        console.log('Hola');
        // window.history.back();
    } else {
        loginErrorMessage.innerText = 'Usuario y/o contraseña incorrectos';
        console.log('Incorrecto');
        event.preventDefault();
    }
}

const createAccount = document.querySelector('.create-account');
const signUpButton = document.querySelector('.signup-button');

signUpButton.addEventListener('click', showVentanaDeRegistro);

function showVentanaDeRegistro() {
    createAccount.classList.remove('inactive');
}