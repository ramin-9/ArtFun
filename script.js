// Placeholder for future JavaScript functionality if needed


// Select all images with the 'clickableImage' class
const images = document.querySelectorAll('.clickableImage');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');

// Function to show the message box with the image's message
function showMessage(event) {
    const message = event.target.getAttribute('data-message');
    messageText.textContent = message;

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

// Add click event to each image
images.forEach(image => {
    image.addEventListener('click', showMessage);
});
