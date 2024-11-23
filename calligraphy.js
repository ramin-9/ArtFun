// Array of calligraphy image data
const calligraphyData = [
    { src: "images/cal1.jpg", alt: "manan", message: "Elegant strokes capturing the essence of 'manan' ✍️" },
    { src: "images/cal2.jpg", alt: "tavana", message: "An intricate piece showcasing 'tavana' 🌟" },
    { src: "images/cal8.png", alt: "manan2", message: "A refined continuation of the 'manan' series 🖌️" },
    { src: "images/cal4.jpg", alt: "chashm", message: "'Chashm' – a visual delight for the beholder's eye 👁️" },
    { src: "images/cal5.jpg", alt: "hoho", message: "A playful interpretation of 'hoho' with flair 🎨" },
    { src: "images/cal3.jpg", alt: "qalb", message: "'Qalb' – a depiction of the heart's whispers ❤️" },
    { src: "images/cal6.jpg", alt: "doost", message: "'Doost' – a heartfelt tribute to friendship 🤝" },
    { src: "images/cal7.jpg", alt: "jamal", message: "'Jamal' – a celebration of beauty in its purest form 🌹" },
    { src: "images/cal9.png", alt: "rozeh", message: "'Rozeh' – a serene ode to the divine 🌙" }
];

// Select the container and message box elements
const calligraphyContainer = document.getElementById('calligraphyContainer');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');

// Function to show the message box with the image's message
function showMessage(event) {
    const message = event.target.getAttribute('data-message');
    messageText.textContent = message || "No message available.";

    // Create and show the overlay
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // Show the message box and overlay
    messageBox.style.display = 'block';
    overlay.style.display = 'block';

    // Add event listener to overlay for closing the message
    overlay.addEventListener('click', () => {
        messageBox.style.display = 'none';
        overlay.remove();
    });
}

// Dynamically create and append images
calligraphyData.forEach(item => {
    const imgElement = document.createElement('img');
    imgElement.src = item.src;
    imgElement.alt = item.alt;
    imgElement.loading = 'lazy';
    imgElement.className = 'clickableImage';
    imgElement.setAttribute('data-message', item.message);

    // Add click event listener to show the message
    imgElement.addEventListener('click', showMessage);

    calligraphyContainer.appendChild(imgElement);
});
