// script.js

// MOBILE NAVIGATION MENU
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
});

// SERVICE CONTENT FILTERING (on the services.html page)
function filterServices(filter) {
    const serviceItems = document.querySelectorAll('.services-list li');
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.filter-buttons a');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    event.currentTarget.classList.add('active');

    serviceItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}