<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voxurbia Admin Dashboard</title>
    <link rel="stylesheet" href="admin-style.css">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="admin-dashboard">
        <nav class="admin-nav">
            <div class="logo">
                <img src="../voxlogo.png" alt="Voxurbia Logo">
            </div>
            <ul class="nav-links">
                <li><a href="#" class="active"><i class='bx bx-grid-alt'></i> Dashboard</a></li>
                <li><a href="#products"><i class='bx bx-watch'></i> Products</a></li>
                <li><a href="#orders"><i class='bx bx-package'></i> Orders</a></li>
                <li><a href="logout.php"><i class='bx bx-log-out'></i> Logout</a></li>
            </ul>
        </nav>
        <main class="admin-main">
            <h1>Welcome to Voxurbia Admin Dashboard</h1>
            <!-- Add your dashboard content here -->
        </main>
    </div>
</body>
</html>