<?php
session_start();

$valid_username = "admin";
$valid_password = "voxurbia2024"; // Change this to a secure password

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $valid_username && $password === $valid_password) {
        $_SESSION['logged_in'] = true;
        header("Location: admin/dashboard.php");
        exit();
    } else {
        header("Location: login.html?error=1");
        exit();
    }
}
?>