// ===== Contact Form Submission =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', async function (e) {

        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            service: document.getElementById('service').value,
            message: document.getElementById('message').value.trim()
        };

        try {

            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbwVDB-izNjBECzmJNL3WCfK6DV7PQdUc54KzCNvHd5XHC1EfKBKVEFVNYbQg-qHCpqW/exec',
                {
                    method: 'POST',
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (result.result === 'success') {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Something went wrong.');
            }

        } catch (error) {

            console.error(error);
            alert('Error sending message.');

        }

    });

}// ===== Contact Form Submission =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {

    contactForm.addEventListener('submit', async function (e) {

        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            service: document.getElementById('service').value,
            message: document.getElementById('message').value.trim()
        };

        try {

            const response = await fetch(
                'PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE',
                {
                    method: 'POST',
                    body: JSON.stringify(formData)
                }
            );

            const result = await response.json();

            if (result.result === 'success') {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Something went wrong.');
            }

        } catch (error) {

            console.error(error);
            alert('Error sending message.');

        }

    });

}