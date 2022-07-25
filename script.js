
    var cash = prompt("PLease enter your available cash");
window.addEventListener('load', () =>{
    const exp = document.querySelector('#expenses');
    const amt = document.querySelector('#amt');
    const date = document.querySelector('#date');
    const button = document.querySelector('#button');
    const exp_list = document.querySelector('.li_expenses');
    const total = document.querySelector('#total');
    var expenditure = document.querySelector("#expn");
    
    
    const total_value = parseInt(cash);
    console.log(cash);

    const exp_value =exp.value;
    const amt_value =amt.value;
    const date_value =date.value;


    var expenditure_value = 0;

    total.innerHTML = cash;

    button.addEventListener('click', (e) =>{

        e.preventDefault();
        
        if(!exp.value && !amt.value && !date.value){
            alert('Please fill out the boxes'); 
        }else{
            const expList = document.createElement('tbody');
        expList.classList.add('li_expenses');

        const tr = document.createElement('tr');

        const td_exp = document.createElement('td');
        td_exp.innerHTML =exp.value;

        const td_amt = document.createElement('td');
        td_amt.innerHTML = amt.value;
        cash = cash - amt.value;
        total.innerHTML = cash;
        expenditure_value += Math.floor(amt.value);
        console.log(expenditure_value);
        expenditure.innerHTML = expenditure_value;   
        

        const td_date = document.createElement('td')
        td_date.innerHTML = date.value;

        exp_list.appendChild(tr);
        tr.appendChild(td_exp);
        tr.appendChild(td_amt);
        tr.appendChild(td_date);

        exp.value = "";
        amt.value = "";
        date.value = "";
    };
    expenditure.innerHTML = expenditure_value;   

    })

})
