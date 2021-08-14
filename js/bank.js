document.getElementById('deposit-button').addEventListener('click' , function(){
    
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmout = depositInput.value;
    
    // update deposit total
    const depositTotal = document.getElementById('deposite-total')

    const currnetDepositAmount = depositTotal.innerText;
    const updatedDepositTotal = parseFloat(newDepositAmout) + parseFloat(currnetDepositAmount);
    depositTotal.innerText = updatedDepositTotal;
    


    // update account balance
    const balanceTotal = document.getElementById('balance-total')

    const currentBalanceAmount = balanceTotal.innerText;
    const updateBalanceTotal = parseFloat(currentBalanceAmount) + parseFloat(newDepositAmout)
    balanceTotal.innerText = updateBalanceTotal

    // clear input
    depositInput.value = '';
})

// handle withdraw event

document.getElementById('withdraw-button').addEventListener('click' , function(){
    const withDrawInput = document.getElementById('withdraw-input')
    const newWithdrawAmount = withDrawInput.value;


    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total')

    const currentWithdrawAmount = withdrawTotal.innerText
    const updatedWithdrawBalance = parseFloat(newWithdrawAmount) + parseFloat(currentWithdrawAmount)
    withdrawTotal.innerText = updatedWithdrawBalance;

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotal = balanceTotal.innerText;

    const newBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal

    // clear input
    withDrawInput.value = '';

})