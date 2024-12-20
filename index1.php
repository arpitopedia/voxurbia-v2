<?php
// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate input
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        // Process the form data
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    }
    
    // Email details
    $to = "as4820000@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email\r\nReply-To: $email";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Your message has been sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send your message. Please try again later."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}

session_start(); // Start session to manage cart

// Initialize cart if not already done
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Handle Add to Cart requests
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['product'])) {
    $product = htmlspecialchars(trim($_POST['product']));

    // Add product to cart
    if (!in_array($product, $_SESSION['cart'])) {
        $_SESSION['cart'][] = $product;
        echo json_encode(["status" => "success", "message" => "$product added to cart.", "cart" => $_SESSION['cart']]);
    } else {
        echo json_encode(["status" => "info", "message" => "$product is already in the cart.", "cart" => $_SESSION['cart']]);
    }
    exit;
}

// Handle invalid request methods
header('Content-Type: application/json');
echo json_encode(["status" => "error", "message" => "Invalid request method."]);
exit;
?>
