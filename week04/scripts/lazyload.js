document.addEventListener("DOMContentLoaded", () => {
    // Lazy load images
    const images = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Set the real source
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    });

    images.forEach(image => {
        imageObserver.observe(image);
    });

    // Set current year in footer
    const currentYear = new Date().getFullYear();
    document.getElementById("copyright-year").textContent = currentYear;

    // Set last modified date in footer
    const lastModified = new Date(document.lastModified);
    const formattedDate = `${lastModified.getMonth() + 1}/${lastModified.getDate()}/${lastModified.getFullYear()}, ${lastModified.toLocaleTimeString()}`;
    document.getElementById("last-modified").textContent = formattedDate;
});
