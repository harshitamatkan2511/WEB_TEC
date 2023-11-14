<?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = $_POST['name'];
//     $email = $_POST['email'];
//     $phone = $_POST['phone'];
//     $password = $_POST['password'];

    
//     if (strlen($password) >= 8) {
//         $userData = "$name|$email|$phone|$password\n";
//         file_put_contents('user_data.txt', $userData, FILE_APPEND);
//         header("Location: login.html");
//     } else {
//         echo 'Password must be at least 8 characters long.';
//     }
// }

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];

    // Validate and store data (you might want to use a database in a real-world scenario)
    if (strlen($password) >= 8) {
        $userData = [
            'name' => $name,
            'email' => $email,
            'phone' => $phone,
            'password' => $password
        ];

        $currentData = file_get_contents('user_data.json');
        $currentData = json_decode($currentData, true);

        // Check if the file is empty or doesn't contain valid JSON
        if (!$currentData) {
            $currentData = [];
        }

        $currentData[] = $userData;
        $jsonData = json_encode($currentData, JSON_PRETTY_PRINT);

        file_put_contents('user_data.json', $jsonData);
        header("Location: login.html");
    } else {
        echo 'Password must be at least 8 characters long.';
    }
}

?>
