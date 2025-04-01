document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
function showNextProject() {
    items[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.display = 'block';
}
setInterval(showNextProject, 3000);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Message sent successfully!';
    } else {
        document.getElementById('form-message').textContent = 'Please fill in all fields.';
    }
});
