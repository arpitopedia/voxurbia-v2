function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'Voxurbia@2024') {
        sessionStorage.setItem('isAdmin', 'true');
        window.location.href = '/voxurbia-v2/vox/admin/dashboard.html';  // Updated for GitHub Pages
    } else {
        sessionStorage.setItem('isAdmin', 'false');
        alert('Invalid credentials');
        window.location.href = '/voxurbia-v2/index.html';  // Updated for GitHub Pages
    }
}

function checkAdminAuth() {
    if (sessionStorage.getItem('isAdmin') !== 'true') {
        window.location.href = '/voxurbia-v2/login.html';  // Updated for GitHub Pages
    }
}

function logout() {
    sessionStorage.removeItem('isAdmin');
    window.location.href = '/voxurbia-v2/login.html';  // Updated for GitHub Pages
}