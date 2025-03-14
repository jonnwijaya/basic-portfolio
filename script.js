document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if the fields are not empty
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Clear the form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
