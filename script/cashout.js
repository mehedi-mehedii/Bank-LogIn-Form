const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
         const accountNumber = document.getElementById('acc-number').value ;
        const maxBalance = document.getElementById('main-balance').innerText ;
        const converBalance = parseFloat(maxBalance);
        const amount = document.getElementById('acount-number').value ;
        const convertAmount = parseFloat(amount) ;
        const pin = document.getElementById("acount-pin").value ;
        const converPin = parseInt(pin) ;
        if (convertAmount && converPin){
            if(converPin === 3385){
                const sub = converBalance - convertAmount ;
                document.getElementById("main-balance").innerText = sub ;
                const transactionHistory = document.getElementById('transaction-history')
                const comment = document.createElement('p')
                comment.innerText = `
                Account credit is ${convertAmount}$ from Acc./No : ${accountNumber} and Your New Balance is ${sub}$
            `
                
                transactionHistory.appendChild(comment);
 
                
            }
            else {
                console.log('Invalid pin') ;
            }
        }
        else {
            console.log ('Insufciant Balance')
        }
         
    }
)