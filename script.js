document.getElementById('staffform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const staffID = document.getElementById('staffID').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('gender').value;
    const admissionDate = document.getElementById('admissionDate').value;
    const roomNumber = document.getElementById('roomNumber').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const emergencyContactName = document.getElementById('emergencyContactName').value;
    const emergencyContactNumber = document.getElementById('emergencyContactNumber').value;
    const medicalConditions = document.getElementById('medicalConditions').value;
    const allergies = document.getElementById('WorkExperience').value; 

    // Create a new row in the residents table
    const table = document.getElementById('staffTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Insert new cells for each piece of resident data
    newRow.insertCell(0).innerText = staffID;
    newRow.insertCell(1).innerText = firstName;
    newRow.insertCell(2).innerText = lastName;
    newRow.insertCell(3).innerText = dateOfBirth;
    newRow.insertCell(4).innerText = gender;
    newRow.insertCell(5).innerText = admissionDate;
    newRow.insertCell(6).innerText = roomNumber;
    newRow.insertCell(7).innerText = contactNumber;
    newRow.insertCell(8).innerText = emergencyContactName;
    newRow.insertCell(9).innerText = emergencyContactNumber;
    newRow.insertCell(10).innerText = medicalConditions || 'N/A'; // Default to 'N/A' if empty
    newRow.insertCell(11).innerText = workexperience|| 'N/A'; // Default to 'N/A' if empty

    // Clear the form fields
    document.getElementById('staffform').reset();
});
