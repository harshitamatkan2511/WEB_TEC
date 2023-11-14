// function validateForm() {
//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirmPassword').value;

//     if (password.length < 8) {
//         alert('Password must be at least 8 characters long.');
//     } else if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//     } else {
//         document.getElementById('signupForm').submit();
//     }
// }

// function validateForm() {
//     var password = document.getElementById('password').value;
//     var confirmPassword = document.getElementById('confirmPassword').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;

//     // Password validation
//     if (password.length < 8) {
//         alert('Password must be at least 8 characters long.');
//     } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//         alert('Password must contain at least one special character.');
//     } else if (!/[A-Z]/.test(password)) {
//         alert('Password must contain at least one uppercase letter.');
//     } else if (password !== confirmPassword) {
//         alert('Passwords do not match.');
//     } else if (!/^[789]\d{9}$/.test(phone)) {
//         alert('Invalid phone number. It should start with 8, 7, or 9 and have 10 digits.');
//     } else if (!isValidEmail(email)) {
//         alert('Invalid email address.');
//     } else {
//         document.getElementById('signupForm').submit();
//     }
// }

// // Email validation function
// function isValidEmail(email) {
//     // Regular expression for basic email validation
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }


function validateForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Password validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else if (!/^(?=.*[A-Z].*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)) {
        alert('Password must contain 2 uppercase letters, 1 digit, and 1 special character.');
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
    } else if (!/^[789]\d{9}$/.test(phone)) {
        alert('Invalid phone number. It should start with 8, 7, or 9 and have 10 digits.');
    } else if (!isValidEmail(email)) {
        alert('Invalid email address.');
    } else {
        document.getElementById('signupForm').submit();
    }
}

// Email validation function
function isValidEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

