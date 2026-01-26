document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const fullname = document.querySelector('input[name="fullname"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

            if (fullname && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    try {
                        const response = await fetch('/signup', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ fullname, email, password })
                        });
                        if (response.ok) {
                            localStorage.setItem('user', JSON.stringify({ email: email }));
                            window.location.href = '/dashboard';
                        } else {
                            const error = await response.text();
                            alert('Signup failed: ' + error);
                        }
                    } catch (error) {
                        alert('An error occurred: ' + error.message);
                    }
                } else {
                    alert('Passwords do not match!');
                }
            } else {
                alert('Please fill in all fields!');
            }
        });
    }

    if (signinForm) {
        signinForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email && password) {
                try {
                    const response = await fetch('/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email, password })
                    });
                    if (response.ok) {
                        const data = await response.text();
                        localStorage.setItem('user', JSON.stringify({ email: email }));
                        window.location.href = '/dashboard';
                    } else {
                        const error = await response.text();
                        alert('Login failed: ' + error);
                    }
                } catch (error) {
                    alert('An error occurred: ' + error.message);
                }
            } else {
                alert('Please fill in all fields!');
            }
        });
    }
});
