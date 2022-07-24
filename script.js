window.addEventListener('load', () =>{
    const exp = document.querySelector('#expenses');
    const amt = document.querySelector('#amt');
    const date = document.querySelector('#date');
    const button = document.querySelector('#button');
    const exp_list = document.querySelector('.li_expenses');

    const exp_value =exp.value;
    const amt_value =amt.value;
    const date_value =date.value;

    button.addEventListener('click', (e) =>{

        e.preventDefault();
        
        // if(!exp_value && !amt_value && !date_value){
        //     alert('Please fill out the boxes'); 
        // }
        
        const expList = document.createElement('tbody');
        expList.classList.add('li_expenses');

        const tr = document.createElement('tr');

        const td_exp = document.createElement('td')
        td_exp.innerHTML = exp.value;

        const td_amt = document.createElement('td')
        td_amt.innerHTML = amt.value;

        const td_date = document.createElement('td')
        td_date.innerHTML = date.value;

        exp_list.appendChild(tr);
        tr.appendChild(td_exp);
        tr.appendChild(td_amt);
        tr.appendChild(td_date);

    })

})