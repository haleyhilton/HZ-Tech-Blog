const loginFromSignup = () => {
    document.location.replace('/login');
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-create').value.trim();
    const password = document.querySelector('#password-create').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //now log in so the user doesn't have to repeat the process
            const andLogInResponse = await fetch('/api/users/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (andLogInResponse.ok) {
                document.location.replace('/dashboard');
            } else {
                alert('Failed to log in');
            }
        }
    };
};

document.querySelector('#toLogin').addEventListener('click', loginFromSignup);
document.querySelector('#signup-submit').addEventListener('click', signupFormHandler);