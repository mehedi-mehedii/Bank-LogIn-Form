const loginBtn = document.getElementById('login-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
        const accNumber = document.getElementById('acc-number').value ;
       
        const accPin = document.getElementById('acc-pin').value ;
        
        if (accNumber.length === 11){
            console.log('yes')
            if(accPin === '3385'){
                window.location.href = "./dashboard.html" ;
                
            }
            else{
                console.log("doesn't match your pin number")
            }
        }
        else{
            console.log('please submit the valid acc Number')
        }

    })