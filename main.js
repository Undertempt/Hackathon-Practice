const loginForm = document.getElementById('loginForm');
const loginUsername = document.getElementById('loginUseranme');
const loginPassword = document.getElementById('loginPassword');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    console.log(loginUsername.value);
    console.log(loginPassword.value);

})