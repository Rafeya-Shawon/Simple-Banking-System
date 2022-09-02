document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraField = document.getElementById('withdraw-field');
    const withdrawAmmount = withdraField.value ;
    const withdrawAmmountFloat = parseFloat(withdrawAmmount);
    if(isNaN(withdrawAmmountFloat)){
        alert('Please provide a valid number');
        withdraField.value = '';
        return;
    }

    const withdraw = document.getElementById('withdraw');
    const withdrawShow = withdraw.innerText;

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceShow = currentBalance.innerText;
    const currentBalanceFloat = parseFloat(currentBalanceShow);

    if(withdrawAmmountFloat> currentBalanceFloat){
        alert('Insufficient Balance');
        withdraField.value = '';
        return;
    }

    const withdrawShowFloat = parseFloat(withdrawShow);
    withdraw.innerText = withdrawAmmountFloat + withdrawShowFloat;
    currentBalance.innerText = currentBalanceFloat - withdrawAmmountFloat;

    withdraField.value = '';

})