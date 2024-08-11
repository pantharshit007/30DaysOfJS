document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let username = document.getElementById('loginUsername').value;
        let password = document.getElementById('loginPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(user => user.username === username && user.password === password);

        if (user) {
            sessionStorage.setItem('loggedInUser', username);
            sessionStorage.setItem('userEmail', user.email);
            alert('Login successful!');
            window.location.href = './index.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
