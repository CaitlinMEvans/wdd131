document.addEventListener("DOMContentLoaded", () => {
    const images = [
        {
            large: "images/landscape2-large.webp",
            medium: "images/landscape2-medium.webp",
            small: "images/landscape2-small.webp",
            alt: "A stunning view of the Cliffs of Moher in Ireland"
        },
        {
            large: "images/landscape3-large.webp",
            medium: "images/landscape3-medium.webp",
            small: "images/landscape3-small.webp",
            alt: "Ancient castle ruins on a cliff in Ireland"
        },
        {
            large: "images/landscape4-large.webp",
            medium: "images/landscape4-medium.webp",
            small: "images/landscape4-small.webp",
            alt: "The majestic Cliffs of Moher during sunset"
        },
        {
            large: "images/landscape1-large.webp",
            medium: "images/landscape1-medium.webp",
            small: "images/landscape1-small.webp",
            alt: "A beautiful landscape in Ireland"
        },
    ];

    let currentIndex = 0;
    const rotatingImage = document.getElementById("rotating-image");

    function rotateImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const currentImage = images[currentIndex];

        // Update the img and source attributes
        rotatingImage.src = currentImage.small;
        rotatingImage.alt = currentImage.alt;
        rotatingImage.parentElement.querySelector('source[media="(min-width: 1000px)"]').srcset = currentImage.large;
        rotatingImage.parentElement.querySelector('source[media="(min-width: 500px)"]').srcset = currentImage.medium;
    }

    // Set an interval to change the image every 5 seconds
    setInterval(rotateImage, 6000);

    // Update the footer with the current year and last modified date
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    // Output the current year to the footer's copyright
    document.querySelector("footer p").textContent = `© ${currentYear} Caitlin Evans | Ireland`;

    // Get the document's last modified date
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = `${String(lastModified.getMonth() + 1).padStart(2, '0')}/${String(lastModified.getDate()).padStart(2, '0')}/${lastModified.getFullYear()}, ${lastModified.toLocaleTimeString()}`;

    // Output the last modified date to the footer's second paragraph
    document.getElementById("last-modified").textContent = formattedLastModified;
    });