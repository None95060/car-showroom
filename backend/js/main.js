document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');

    if (signupForm) {
        signupForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const firstname = document.querySelector('input[name="firstname"]').value;
            const lastname = document.querySelector('input[name="lastname"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;
            const confirmPassword = document.querySelector('input[name="confirmPassword"]').value;

            if (firstname && lastname && email && password && confirmPassword) {
                if (password === confirmPassword) {
                    try {
                        const response = await fetch('/signup', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ firstname, lastname, email, password })
                        });
                        if (response.ok) {
                            const message = await response.text();
                            alert(message);
                            localStorage.setItem('user', JSON.stringify({ email: email, firstname: firstname, lastname: lastname }));
                            window.location.href = '/login';
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
                        const data = await response.json();
                        localStorage.setItem('user', JSON.stringify({ email: data.user.email, fullname: data.user.fullname }));
                        alert('Login successful!');
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
