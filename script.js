const registrationForm = document.getElementById("studentRegistration");

// Add an event listener to detect form submission
registrationForm.addEventListener("submit", function(event) {

    // Prevent the default form submission behavior
    // This stops the page from refreshing
    event.preventDefault();

    // Capture the text entered in the Full Name field
    const fullName = document.getElementById("student-name").value;

    // Display a browser alert with the student's name
    alert("Application submitted successfully for " + fullName + "!");

});