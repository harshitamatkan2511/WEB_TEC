<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture values from the form
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];

    // Create an associative array to store the values
    $userDetails = array(
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'address' => $address
    );

    // You can print the array for testing purposes
    print_r($userDetails);

    // Perform further actions with the array as needed, such as storing it in a database.
}
?>
