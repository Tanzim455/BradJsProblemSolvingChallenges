<?php 


$email = "example@email.com"; // Replace with your email address

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "Valid email address.";
} else {
    echo "Invalid email format.";
}
?>
