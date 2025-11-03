const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUseranme');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const username = loginUsername.value;
    const password = loginPassword.value;

    if(username && password)
    {
        // send to backend
        console.log(`Username: ${username} \nPassword: ${password}`);
    } else {
        console.log('enter something valid');
    }

})