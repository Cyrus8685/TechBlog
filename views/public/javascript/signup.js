const { use } = require("../../../controllers");

async function signupFormHandler(event) {
    event.preventDefault();


    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username);
    console.log(password);

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
        if (response.ok) {
            console.log('success');


            document.location.replace('/dashboard');

        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);