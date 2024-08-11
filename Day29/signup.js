document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.formSignup');
    let usernameElem = document.getElementById('signup-username');
    let passwordElem = document.getElementById('signup-password');
    let confirmPassElem = document.getElementById('signup-confirmPass');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = usernameElem.value;
        let email = document.getElementById('signup-email').value;
        const password = passwordElem.value;
        const confirmPass = confirmPassElem.value;

        if (password !== confirmPass) {
            alert('Passwords do not match. Please try again!');
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Username already exists. Please choose another one.');
        } else {
            users.push({ username: username, password: password, email: email });
            localStorage.setItem('users', JSON.stringify(users));
            sessionStorage.setItem('loggedInUser', username);
            alert('Sign up successful!');
            window.location.href = './index.html';
        }
    });
})