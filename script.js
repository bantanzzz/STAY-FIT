document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    const params = new URLSearchParams(formData); // Convert form data to URL parameters

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbx3JbPQuKLdMeOQ0BDNw8FTpJpiBXOq9Yscv6w0ae1jyBA9viKSVjX-ohyzOXCN3J2M6Q/exec', { // Replace with your actual Web App URL
            method: 'POST',
            body: params,
        });

        const result = await response.text();
        if (result === "Success") {
            // Redirect to the home page upon successful submission
            window.location.href = 'index.html'; // Replace with your home page URL
        } else {
            alert("Error submitting form: " + result); // Display an error if submission fails
        }
    } catch (error) {
        console.error("Error:", error);
        alert("There was an error submitting the form. Please try again.");
    }
});
