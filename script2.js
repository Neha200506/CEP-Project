// Array to store payment records
let paymentRecords = [];

// Event listener for the form submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const residentID = document.getElementById('residentID').value;
    const amount = parseFloat(document.getElementById('amount').value).toFixed(2);
    const paymentDate = document.getElementById('paymentDate').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Generate a unique PaymentID based on the current timestamp
    const paymentID = Date.now();

    // Create a payment record object
    const paymentRecord = {
        PaymentID: paymentID,
        ResidentID: residentID,
        Amount: amount,
        PaymentDate: paymentDate,
        PaymentMethod: paymentMethod,
    };

    // Add the payment record to the array
    paymentRecords.push(paymentRecord);

    // Update the payment history display
    displayPaymentHistory();
    
    // Clear the form fields
    clearForm();
});

// Function to display payment history in the table
function displayPaymentHistory() {
    const paymentHistoryTableBody = document.getElementById('paymentHistory').getElementsByTagName('tbody')[0];
    
    // Clear existing rows
    paymentHistoryTableBody.innerHTML = '';

    // Populate the table with payment records
    paymentRecords.forEach(record => {
        const row = paymentHistoryTableBody.insertRow();
        row.insertCell(0).innerText = record.PaymentID;
        row.insertCell(1).innerText = record.ResidentID;
        row.insertCell(2).innerText = record.Amount;
        row.insertCell(3).innerText = record.PaymentDate;
        row.insertCell(4).innerText = record.PaymentMethod;
    });
}

// Function to clear the form fields
function clearForm() {
    document.getElementById('residentID').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('paymentDate').value = '';
    document.getElementById('paymentMethod').value = 'Cash'; // Reset to default
}