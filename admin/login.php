<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voxurbia Admin</title>
    <link rel="stylesheet" href="admin-style.css">
    <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="admin-login">
        <div class="login-container">
            <img src="../voxlogo.png" alt="Voxurbia Logo" class="admin-logo">
            <h2>Admin Login</h2>
            <?php if(isset($_GET['error'])): ?>
                <div class="error-message">Invalid credentials</div>
            <?php endif; ?>
            <form action="auth.php" method="POST" class="login-form">
                <div class="form-group">
                    <i class='bx bx-user'></i>
                    <input type="text" name="username" placeholder="Username" required>
                </div>
                <div class="form-group">
                    <i class='bx bx-lock-alt'></i>
                    <input type="password" name="password" placeholder="Password" required>
                </div>
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
    </div>
    <script src="admin.js"></script>
</body>
</html>