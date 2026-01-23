document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (name && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    // Simulate signup success
                    alert('Signup successful!');
                    localStorage.setItem('user', JSON.stringify({ name: name, email: email }));
                    window.location.href = '/dashboard';
                } else {
                    alert('Passwords do not match!');
                }
            } else {
                alert('Please fill in all fields!');
            }
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                // Simulate signin success
                localStorage.setItem('user', JSON.stringify({ name: 'User', email: email }));
                window.location.href = '/dashboard';
            } else {
                alert('Please fill in all fields!');
            }
        });
    }
});
