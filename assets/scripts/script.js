document.addEventListener('DOMContentLoaded', function() {
    const logh = document.querySelector('#Log')
    const modalbg = document.querySelector('.modal-background')
    const modal = document.querySelector('.modal')

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
            cost = parseFloat(cost);
            var expenseData = {
                date: date,
                description: description,
                cost: cost
            };
            expenses.push(expenseData);

            console.log(expenseData);
            // Convert the expense data to a JSON string
            var expenseDataJson = JSON.stringify(expenses);

            // Save the JSON string to local storage
            localStorage.setItem('expenseData', expenseDataJson);

            displayTotalExpense(expenses);

            // Close the modal
            modal.classList.remove('is-active');
        }
    });
});

//generating the grand total of expenses
const displayTotalExpense = function (expenses) {
    // TODO: Calculate and display the average salary
    let sum = 0
  
    //Calculates the sum of salaries located in employeesArray
    expenses.forEach(expenseData => {
      sum += expenseData.cost;
    });

    const totalExpenseDisplay = document.getElementById("totalExpenseDisplay");

    const totalExpense = sum.toFixed(2);

    totalExpenseDisplay.textContent = 'Your Total Expense is: $' + totalExpense;
};
