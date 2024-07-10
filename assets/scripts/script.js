document.addEventListener('DOMContentLoaded', function() {
    const logh = document.querySelector('#Log')
    const modalbg = document.querySelector('.modal-background')
    const modal = document.querySelector('.modal')

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
            console.log(expenseData);
            // Convert the expense data to a JSON string
            var expenseDataJson = JSON.stringify(expenseData);

            // Save the JSON string to local storage
            localStorage.setItem('expenseData', expenseDataJson);

            // Close the modal
            modal.classList.remove('is-active');
        }
    });
});