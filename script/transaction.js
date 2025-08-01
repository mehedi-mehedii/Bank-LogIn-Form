const adMoney = document.getElementById('addmoney-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const accountNumber = document.getElementById('acc-number').value ;
        const addAmount = getInputValueById ('account-number') ;
        const pinNUm = getInputValueById ('account-pin') ;
        const MainTaka = getInnerTextById ('main-balance') ;
        if(accountNumber.length === 11){
            if(pinNUm === 3385){
                const addiction = MainTaka + addAmount ;
                setInnerTextGetIdAndValue('main-balance', addiction) ;
                const transactionHistory = document.getElementById('transaction-history')
                const comment = document.createElement('p')
                comment.innerText = `
                 Account Debit is ${addAmount}$ from Acc./No : ${accountNumber} and Your New Balance is ${addiction}$
                `
                transactionHistory.appendChild(comment);

            }
            else{
                alert('Incorrect PIN')
            }
        }
        else {
            alert('Please Input valid acc. no.')
        }
    
    }
)

            