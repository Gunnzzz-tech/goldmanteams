// File upload display functionality
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('resume');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    if (fileInput && fileNameDisplay) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                fileNameDisplay.textContent = file.name;
            } else {
                fileNameDisplay.textContent = 'Upload Resume';
            }
        });
    }

    // Form submission handling (you can customize this for your Flask backend)
    const form = document.getElementById('applicationForm');

    if (form) {
        form.addEventListener('submit', function(e) {
            // If you want to handle form submission with JavaScript (AJAX):
            // e.preventDefault();
            // const formData = new FormData(form);
            // fetch('/submit', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Application submitted successfully!');
            //     form.reset();
            //     fileNameDisplay.textContent = 'Upload Resume';
            // })
            // .catch(error => {
            //     alert('Error submitting application. Please try again.');
            //     console.error('Error:', error);
            // });

            // For normal form submission to Flask, just let it submit naturally
            // Comment out the e.preventDefault() above and let Flask handle it
        });
    }
});
