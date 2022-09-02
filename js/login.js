document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('mail');
    const email = emailField.value;

    const passField = document.getElementById('pass');
    const password = passField.value;

    if(email === 'shontan@baap.com' && password === '12345'){
        window.location.href = 'bank.html';
    } else{
        alert('Invalid User');
    }

})