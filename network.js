const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.btnlogin-popup');
const registerLink = document.querySelector('.btnsignup-popup');
const btnPopup = document.querySelector('.btnlogin-popup');
const signPopup = document.querySelector('.btnsignup-popup');
const iconClose = document.querySelector('.icon-close');

// Function to show the login form
function showLoginForm() {
    document.getElementById('loginForm').style.transform = 'translateX(0)';
    document.getElementById('registerForm').style.transform = 'translateX(400px)';
}

// Function to show the register form
function showRegisterForm() {
    document.getElementById('loginForm').style.transform = 'translateX(-400px)';
    document.getElementById('registerForm').style.transform = 'translateX(0)';
}

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

signPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

function registerUser() {
    const registerForm = document.getElementById('registerForm');
    const formData = new FormData(registerForm);

    fetch('register.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json()) // Parse the JSON response
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); // Show a success message
            // Optionally, you can close the registration popup or redirect the user
        } else {
            alert(data.message); // Show an error message
        }
    })
    .catch(error => console.error('Error:', error));
}


function loginUser() {
    const loginForm = document.getElementById('loginForm');
    const formData = new FormData(loginForm);

    fetch('login.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Handle the server response as needed
    })
    .catch(error => console.error('Error:', error));
}
