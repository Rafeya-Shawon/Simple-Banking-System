document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdraField = document.getElementById('withdraw-field');
    const withdrawAmmount = withdraField.value ;
    const withdrawAmmountFloat = parseFloat(withdrawAmmount);

    const withdraw = document.getElementById('withdraw');
    const withdrawShow = withdraw.innerText;
    const withdrawShowFloat = parseFloat(withdrawShow);
    withdraw.innerText = withdrawAmmountFloat + withdrawShowFloat;

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceShow = currentBalance.innerText;
    const currentBalanceFloat = parseFloat(currentBalanceShow);
    currentBalance.innerText = currentBalanceFloat - withdrawAmmountFloat;

    withdraField.value = '';

})