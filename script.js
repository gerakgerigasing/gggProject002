// ===== Contact Form Submission =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 1. Collect form data and package it as standard URL parameters
        const formData = new URLSearchParams();
        formData.append('name', document.getElementById('name').value.trim());
        formData.append('email', document.getElementById('email').value.trim());
        formData.append('service', document.getElementById('service').value);
        formData.append('message', document.getElementById('message').value.trim());

        try {
            // 2. Send the request directly to your validated live Web App URL
            await fetch(
                'https://script.google.com/macros/s/AKfycbzIVmco44LSqwFO5LGqbIthPVOxD3JB06xhRUmdvOq6yFdbdQfaAo5AZDwuvFEB7_JU2g/exec', 
                {
                    method: 'POST',
                    mode: 'no-cors', // Bypasses browser security blocks smoothly
                    body: formData,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            );

            // 3. Reset form and alert user upon a clean network transfer
            alert('Message sent successfully!');
            contactForm.reset();

        } catch (error) {
            console.error('Submission Error:', error);
            alert('Error sending message. Please try again.');
        }
    });
}