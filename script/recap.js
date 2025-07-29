const loginBtn = document.getElementById('login-btn').addEventListener('click', 
    function(event){
        event.preventDefault();
     const accNumber  = document.getElementById('acc-number').value ;
     
     console.log( typeof convertedAccnumber)
     const accPin = document.getElementById('acc-pin').value ;
     const convertedaccPin = parseInt(accPin);

     if ( accNumber.length === 11 ) {
        console.log( 'yes') ;
        if(convertedaccPin === 6107){
            window.location.href = "./dashboard.html" ;
        }
        else{
            console.log('Incorrect Pin ')
        }
     }
     else{
        console.log('Type your valid account number')
     }    
    }
)

