<?php
session_start();
require_once 'config/database.php';

if (!isset($_SESSION['admin_id'])) {
    header('Location: login.php');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    switch($action) {
        case 'add':
            $name = $_POST['name'];
            $description = $_POST['description'];
            $price = $_POST['price'];
            $category = $_POST['category'];
            
            // Handle image upload
            $image = $_FILES['image'];
            $image_path = 'uploads/' . time() . '_' . $image['name'];
            move_uploaded_file($image['tmp_name'], '../' . $image_path);

            $stmt = $pdo->prepare("INSERT INTO products (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([$name, $description, $price, $category, $image_path]);
            break;

        case 'update':
            // Update product logic
            break;

        case 'delete':
            // Delete product logic
            break;
    }

    header('Location: dashboard.php?success=1');
}
?>