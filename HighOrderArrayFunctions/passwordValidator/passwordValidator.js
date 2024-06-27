let password = 'aa123458';
let hasUppercase = false;
let hasLowerCase = false;
let hasNumber = false;

if (password.length >= 8) {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i].toUpperCase() && isNaN(password[i])) {
            hasUppercase = true;
        }
        if (password[i] === password[i].toLowerCase() && isNaN(password[i])) {
            hasLowerCase = true;
        }
        if (!isNaN(password[i])) {
            hasNumber = true;
        }
        if (hasUppercase && hasNumber && hasLowerCase) {
            console.log(true);
            break;
        }
    }
    if (!hasUppercase || !hasNumber || !hasLowerCase) {
        console.log(false);
    }
} else {
    console.log(false);
}

