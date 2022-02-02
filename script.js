let loginAns = prompt('Greetings! Would you like to log in? Y/N');

loginGreet(loginAns);

function loginGreet(ans='') {
    if (ans === 'y' || ans === 'Y') {
        let username = prompt('Enter username');
        enterUsername(username);
    }

    else {
        alert('login cancelled');
    }
}

function enterUsername(uname = '') {
    if (uname === 'oriusprime') {
        let password = prompt('Enter password');
        enterPassword(password);
    }

    else {
        alert('sorry, no such username exists');
    }
}

function enterPassword(upass = '') {
    if (upass === '12three') {
        alert('You\'re logged in!');
    }

    else {
        alert('invalid password, please try again');
        loginGreet(loginAns);
    }
}