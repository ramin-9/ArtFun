const images = [
    { src: "images/CamScanner 10-22-2024 15.37.jpg", alt: "bird", message: "Captured the beauty of nature in this little bluebird. 🎨🕊 Painted with love, framed with care. What do you think? 💙" },
    { src: "images/CamScanner 10-22-2024 15.44.jpg", alt: "autumn", message: "Finding beauty in the rain 🌧❤️ A walk through a crimson dream. This piece holds a special place in my heart. What feelings does it evoke for you?" },
    { src: "images/CamScanner 10-22-2024 15.46.jpg", alt: "daf", message: "Channeling the elegance of tradition through colour and movement 🎨👑 Inspired by rich cultural heritage, this painting celebrates grace and history. What stories do you see?" },
    { src: "images/CamScanner 10-22-2024 15.49 (1).jpg", alt: "eye", message: "Eyes speak the language of emotions that words often can't express. Behind every tear lies a story untold." },
    { src: "images/CamScanner 10-22-2024 15.49.jpg", alt: "notes", message: "A delicate piece that echoes the beauty of fleeting moments and handwritten thoughts." },
    { src: "images/CamScanner 10-22-2024 15.51.jpg", alt: "gaunlet", message: "A powerful depiction of strength and resolve. A gauntlet to symbolize resilience." },
    { src: "images/CamScanner 10-22-2024 15.55.jpg", alt: "wink", message: "A playful wink, full of mischief and joy, captured in vibrant hues." },
    { src: "images/CamScanner 10-22-2024 15.57.jpg", alt: "dogWB", message: "The warmth and loyalty of man's best friend, captured in stunning black and white." },
    { src: "images/CamScanner 10-22-2024 15.58.jpg", alt: "dog", message: "Capturing the soulful gaze of this little pup 🐾 Charcoal on paper, bringing out all the fluff and love! 💕" },
    { src: "images/CamScanner 10-22-2024 15.59.jpg", alt: "greyscale", message: "A monochrome study that explores the contrast between light and shadow." },
    { src: "images/CamScanner 10-22-2024 16.01.jpg", alt: "woman", message: "A portrait that celebrates the elegance and grace of a woman." },
    { src: "images/CamScanner 10-22-2024 16.02.jpg", alt: "contur", message: "A minimalistic contour drawing that reveals the beauty in simplicity." },
    { src: "images/CamScanner 10-22-2024 16.03.jpg", alt: "girl", message: "The innocence and curiosity of youth captured in soft strokes." },
    { src: "images/CamScanner 10-22-2024 16.04.jpg", alt: "Shirlock", message: "A mysterious portrait inspired by the legendary detective, Sherlock Holmes." },
    { src: "images/CamScanner 10-22-2024 16.06.jpg", alt: "cr7", message: "A tribute to the football legend, CR7. An embodiment of skill, dedication, and triumph." },
    { src: "images/CamScanner 10-22-2024 16.07 (1).jpg", alt: "chris", message: "A portrait of Chris, capturing the essence of charisma and strength." },
    { src: "images/CamScanner 10-22-2024 16.07.jpg", alt: "chrisblack", message: "A bold and striking piece, using black tones to evoke mystery and depth." },
    { src: "images/CamScanner 10-22-2024 16.08.jpg", alt: "snowwhitedark", message: "A darker, more enigmatic take on the Snow White story, blending fantasy and realism." },
    { src: "images/CamScanner 10-22-2024 16.10.jpg", alt: "snowwhite", message: "A delicate rendering of Snow White, capturing her timeless beauty and innocence." }
];

// Select the container and message box elements
const container = document.getElementById('artworkContainer');
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

images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.loading = 'lazy';
    imgElement.className = 'clickableImage';
    imgElement.setAttribute('data-message', image.message);
    imgElement.addEventListener('click', showMessage);

    container.appendChild(imgElement);
});
