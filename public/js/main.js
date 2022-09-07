const home = () => {
    document.location.replace('/');
}

const dashboard = () => {
    document.location.replace('/dashboard');
}

const login = () => {
    document.location.replace('/login');
}

const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      // If successfully logged out, redirect to the home page
      home();
    } else {
      alert(response.statusText);
    }
  };

document.querySelector('#home').addEventListener('click', home);
document.querySelector('#dashboard').addEventListener('click', dashboard);
if (document.querySelector('#login')) {
    document.querySelector('#login').addEventListener('click', login);
}
if (document.querySelector('#logout')) {
    document.querySelector('#logout').addEventListener('click', logout);
}