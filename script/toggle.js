document.getElementById('cash-out').style.display = "none"
handleToggle('transaction', "none")
document.getElementById('add-money-box').addEventListener('click', 
    function (event){
        console.log('clicked')
        handleToggle("add-money", "block");
        handleToggle("cash-out","none");
        handleToggle("transaction-history", "none");



        // document.getElementById('add-money').style.display = "block"
        // document.getElementById('cash-out').style.display = "none"
        // document.getElementById('transaction').style.display = "none"
    }
 )

 document.getElementById('cash-out-box').addEventListener('click', 
    function (event){
        console.log('clicked')
        document.getElementById('add-money').style.display = "none"
        document.getElementById('cash-out').style.display = "block"
        document.getElementById('transaction').style.display = "none"
    }
 )

document.getElementById('transaction-box').addEventListener('click', 
    function(event){
        
        handleToggle('add-money', 'none');
        handleToggle('cash-out', 'none');
        handleToggle('transaction', 'block');
    }
)

function handleToggle (id, status){
    document.getElementById(id).style.display = status ;
}