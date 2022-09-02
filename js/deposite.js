document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-field');
    const depositeAmmount = depositeField.value;
    const depositeAmmountFloat = parseFloat(depositeAmmount);
    
    const deposite = document.getElementById('depo');
    const depositeShow = deposite.innerText;
    const showAmmountFloat = parseFloat(depositeShow);
    deposite.innerText = showAmmountFloat + depositeAmmountFloat;

    const currentBalance = document.getElementById('current-balance');
    const currentBalanceShow = currentBalance.innerText;
    const currentBalanceFloat = parseFloat(currentBalanceShow);
    currentBalance.innerText = currentBalanceFloat + depositeAmmountFloat;

    depositeField.value = '';

})