document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the input fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if the fields are not empty
    if (name && email && message) {
        // Create a FormData object to send the form data
        const formData = new FormData(this);

        // Send the form data to Netlify
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert(`Thank you, ${name}! Your message has been sent.`);
                // Clear the form fields
                this.reset();
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        })
        .catch(error => {
            alert('There was a problem with your submission. Please try again.');
            console.error('Error:', error);
        });
    } else {
        alert('Please fill in all fields.');
    }
});
