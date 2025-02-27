const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let currentIndex = 0;
const images = document.querySelectorAll('#banner img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); 
showImage(currentIndex); 


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;

    if (name && email && destination) {
        alert(`Thank you, ${name}! Your inquiry for ${destination} has been received.`);
        this.reset(); 
    } else {
        alert('Please fill in all fields.');
    }
});