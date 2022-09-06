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

//* Algunas variables a tomar en cuenta para el inicio de sesión
const LoginInputEmail = document.querySelector('.login__input-email');
const LoginInputPassword = document.querySelector('.login__input-password');
const loginButton = document.querySelector('.login-button');
const loginErrorMessage = document.querySelector('.login__error-message');
// * Variables para mostrar ventana de registro
const signUpButton = document.querySelector('.signup-button');
const containerToCreateAccount = document.querySelector('.create-account');
//* Variables de la ventana de registro 
const createAccountInputName = document.querySelector('.create-account__input-name');
const createAccountInputEmail = document.querySelector('.create-account__input-email');
const buttonCreate = document.querySelector('.create-button');
const createAccountInputPassword = document.querySelector('.create-account__input-password');
//* Variables de contraseña olvidada
const loginForgotPasswordOption = document.querySelector('.login__forgot-password-option');
const forgottenPassword = document.querySelector('.forgotten-password');


//* Acción para el botón de inicio de sesión
loginButton.addEventListener('click', checkEmail);
// * Evento para botton 'sign up'
signUpButton.addEventListener('click', showSignUpWindow);
// * Evento para opción de contraseña olvidada
loginForgotPasswordOption.addEventListener('click', showEmailSentWindow);
// * Evento para boton 'Create'
buttonCreate.addEventListener('click', createAccount);

/**
 ** Description: Verifica si el email con el que se intenta iniciar sesión existe. Si existe lo redirige a la página de compras con su sesión iniciada. De lo contrario, mostrará un mensaje de error en pantalla
 * @param {*} event 
 */
function checkEmail(event) {    
    const email = LoginInputEmail.value;
    const password = LoginInputPassword.value;
    
    const isEmailExist = emails.some(element => (email === element.email && password === element.password));
    
    if(isEmailExist) {
        loginErrorMessage.innerText = '';
        console.log('Hola');
        // window.history.back();
    } else {
        loginErrorMessage.innerText = 'Usuario y/o contraseña incorrectos';
        console.log('Incorrecto');
        event.preventDefault();
    }
}

/**
 ** Description: Muestra la ventana de registro para que el usuario cree su email y password
 */
function showSignUpWindow() {
    containerToCreateAccount.classList.remove('inactive');
}

/**
 ** Description: Muestra la ventana de email enviado cuando un usuario indica que ha olvidado su contraseña
 */
function showEmailSentWindow() {
    forgottenPassword.classList.remove('inactive');
}

/**
 ** Description: Registra la cuenta del nuevo usuario
 * @param {*} event 
 */
function createAccount(event) {
    const name = createAccountInputName.value;
    const email = createAccountInputEmail.value;
    const password = createAccountInputPassword.value;

    const isCorrect = isEmailValid(email);

    if(isCorrect) {
        emails.push({
            email: email,
            password: password
        });
        alert('Email aceptado')
    } else {
        alert('Email rechazado')
        event.preventDefault();
    }
}

/**
 ** Description: Verifica si un email es válido (esto implica que no exista actualmente, que tenga '@' y '.com')
 * @param {*} email 
 * @returns boolean
 */
function isEmailValid(email) {
    const isExist = emails.some(e => email === e.email);
    const hasSpaces = email.split(' ').length > 1;
    
    const emailArray = email.split(''); 
    const hasAtSign = emailArray.some(char => char === '@');
    const hasDotCom = email.slice(-4) === '.com';

    return !isExist && !hasSpaces && hasAtSign && hasDotCom
}