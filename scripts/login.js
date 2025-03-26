function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'Voxurbia@2024') {
        sessionStorage.setItem('isAdmin', 'true');
        window.location.href = 'vox/admin/dashboard.html';
    } else {
        sessionStorage.setItem('isAdmin', 'false');
        alert('Invalid username or password.');
        window.location.href = 'index.html';  // Redirect to home page
    }
}

function checkAdminAuth() {
    if (sessionStorage.getItem('isAdmin') !== 'true') {
        window.location.href = '../../login.html';  // Updated path for dashboard to login
    }
}

function logout() {
    sessionStorage.removeItem('isAdmin');
    window.location.href = '../../login.html';  // Updated path for dashboard to login
}