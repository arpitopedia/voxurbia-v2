function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'Voxurbia@2024') {
        sessionStorage.setItem('isAdmin', 'true');
        window.location.href = 'vox/admin/dashboard.html';  // Updated path
    } else {
        sessionStorage.setItem('isAdmin', 'false');
        alert('Invalid credentials');
        window.location.href = 'index.html';  // Updated path
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