document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.login-register .register-link');
    const loginLink = document.querySelector('.form-box.register .login-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    // Switch to Register form
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.add('active');
        console.log('Switching to register form');
    });

    // Switch to Login form
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        wrapper.classList.remove('active');
        console.log('Switching to login form');
    });

    // Show popup
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
        wrapper.classList.remove('active');
        console.log('Opening popup');
    });

    // Close popup
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
        console.log('Closing popup');
    });

    console.log('JavaScript initialized');
});
