// JavaScript for smooth scrolling on navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// JavaScript for contact form validation (if needed)
document.querySelector('form').addEventListener('submit', function (e) {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        alert('Please fill out all fields before submitting.');
        e.preventDefault();
    }
});
