var cash = prompt("PLease enter your available cash");

window.addEventListener('load', () => {
    const exp = document.querySelector('#expenses');
    const amt = document.querySelector('#amt');
    const date = document.querySelector('#date');
    const button = document.querySelector('#submit_button'); //  onSubmit button
    const availableCash = document.querySelector('#total');
    var main = document.querySelector('.main')  // Render the expenses

    var arr = [];
    availableCash.innerHTML = cash;

    button.addEventListener('click', (e) => {
        e.preventDefault();

        let details = {
            expenses: exp.value,
            amount: amt.value,
            date: date.value
        }

        arr.push(details)

        console.log(arr)

        const a = parseInt(availableCash.innerHTML);
        const b = parseInt(amt.value);

        if (a < b) {
            alert("Not enough")
            exp.value = "";
            amt.value = "";
            date.value = "";
            return
        }

        if (availableCash.innerHTML <= 0) {
            alert("N0 cash left");
            exp.value = "";
            amt.value = "";
            date.value = "";
            return;
        }

        if (!exp.value) {
            alert('Please fill out the boxes');
            return;
        }

        if (!amt.value) {
            alert('Please fill out the boxes');
            return;
        }

        if (!date.value) {
            alert('Please fill out the boxes');
            return;
        }

        cash = cash - amt.value;
        total.innerHTML = cash;

        exp.value = "";
        amt.value = "";
        date.value = "";


        main.innerHTML = arr.map((el) => {
            return `<div class="expense_list">
            <div>
                <p>${el.expenses}</p>
            </div>
            <p>$ ${el.amount}</p> 
            <p>${el.date}</p>
        </div> `
        })
    });
});



