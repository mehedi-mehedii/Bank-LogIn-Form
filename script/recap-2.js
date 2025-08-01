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
const addmoneyBtn = document.getElementById('addmoney-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
        const accountAmount = document.getElementById('account-number').value ;
        const convertAcc = parseFloat(accountAmount);
        console.log(typeof convertAcc)
        const accountPin = document.getElementById('account-pin').value ;
        const convertPin = parseInt(accountPin);
        console.log(typeof convertPin)
        const mainBalance = document.getElementById('main-balance').innerText ;
        const convertBalance = parseFloat(mainBalance);
        if(convertAcc && convertPin ){
            if(convertPin === 3385){
                const addBalance = convertBalance + convertAcc ;
                console.log(addBalance)
                document.getElementById("main-balance").innerText = addBalance ;
            }
            else {
                console.log ('Invalid Pin ')
            }

        }
        else{
            console.log('please add your amount !')
        }

    })
