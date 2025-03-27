<?php
session_start();
require_once('config/credentials.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    
    if ($username === ADMIN_USERNAME && $password === ADMIN_PASSWORD) {
        $_SESSION["admin"] = true;
        $_SESSION["admin_username"] = $username;
        header("Location: dashboard.php");
        exit();
    } else {
        header("Location: login.html?error=invalid");
        exit();
    }
}
?>