// JavaScript for responsive navigation
document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const nav = document.querySelector('nav');

    hamButton.addEventListener('click', () => {
        nav.classList.toggle('open'); // Toggle open class on nav
    });

    // Update footer date dynamically
    const copyrightYear = document.getElementById('copyright-year');
    const lastModified = document.getElementById('last-modified');

    // Set current year
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = currentYear;

    // Set last modified date
    lastModified.textContent = document.lastModified;
});
