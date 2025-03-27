function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'Voxurbia@2024') {
        sessionStorage.setItem('isAdmin', 'true');
        window.location.href = './vox/admin/dashboard.html';  // Fixed relative path
    } else {
        sessionStorage.setItem('isAdmin', 'false');
        alert('Invalid credentials');
        window.location.href = './index.html';  // Fixed relative path
    }
}

function checkAdminAuth() {
    if (sessionStorage.getItem('isAdmin') !== 'true') {
        window.location.href = './login.html';  // Fixed relative path
    }
}

function logout() {
    sessionStorage.removeItem('isAdmin');
    window.location.href = './login.html';  // Fixed relative path
}