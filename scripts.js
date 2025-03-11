document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const role = document.getElementById('role').value;
    
    if (role === 'student') {
        window.location.href = 'student_dashboard.html';
    } else if (role === 'teacher') {
        window.location.href = 'teacher_dashboard.html';
    } else if (role === 'admin') {
        window.location.href = 'admin_dashboard.html';
    }
});