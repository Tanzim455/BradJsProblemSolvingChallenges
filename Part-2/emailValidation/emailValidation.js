// const validateEmail = (email) => {
//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailPattern.test(email);
// };

// // Example usage:
// const emailToValidate = "example@example.com";
// const isValidEmail = validateEmail(emailToValidate);

// if (isValidEmail) {
//     console.log("Valid email address!");
// } else {
//     console.log("Invalid email address.");
// }

// Regular expression for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate email
function validateEmail(email) {
    return emailRegex.test(email);
}

// Single email to validate
let email = 'test@example.com';

// Validate the email
let isValid = validateEmail(email);

console.log(`Is the email '${email}' valid? ${isValid}`);
