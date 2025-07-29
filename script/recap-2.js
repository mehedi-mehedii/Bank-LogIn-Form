const addmoneyBtn = document.getElementById('addmoney-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
        const accountAmount = document.getElementById('account-number').value ;
        const mainBalance = document.getElementById('main-balance').innerText ;
        
        const add = parseFloat (mainBalance) + parseFloat (accountAmount) ;
        console.log(add)
        document.getElementById('main-balance').innerText = add ;

    }
)

log out try myself

