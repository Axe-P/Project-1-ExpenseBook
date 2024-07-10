document.addEventListener('DOMContentLoaded', function() {
    const logh = document.querySelector('#Log');
    const modalbg = document.querySelector('.modal-background');
    const modal = document.querySelector('.modal');
    const tableBody = document.querySelector('#expense-table');

    let expenses = [];

    // check local storage for existing data
    if (localStorage.getItem('expenseData')) {
        expenses = JSON.parse(localStorage.getItem('expenseData'));
    }

    const expenses = [];

    //event listeners to open/close the modal
    logh.addEventListener('click', () => {
        modal.classList.add('is-active');
    });

    modalbg.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    // Event listener to save data to local storage and close the modal
    // Event delegation to handle the click event for the logExpenseButton inside the modal
    document.addEventListener('click', function(event) {
        if (event.target.matches('.logExpenseButton')) {
            var date = document.getElementById('dateInput').value;
            var description = document.getElementById('descriptionInput').value;
            var cost = document.getElementById('costInput').value;

            // Create an object with the expense data
            var expenseData = {
                date: date,
                description: description,
                cost: cost
            };
            expenses.push(expenseData)
            console.log(expenseData);

            // Save the JSON string to local storage
            localStorage.setItem('expenseData', JSON.stringify(expenses));

            // Close the modal
            modal.classList.remove('is-active');

            generateTableRows();
        }
    });


    // Function to generate HTML table rows
    function generateTableRows() {
        tableBody.innerHTML = ''; // Clear existing table rows
        expenses.forEach(expense => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${expense.date}</td>
                <td>${expense.description}</td>
                <td>${expense.cost}</td>
            `;
            tableBody.appendChild(row);
        });
    }
    generateTableRows();
});
