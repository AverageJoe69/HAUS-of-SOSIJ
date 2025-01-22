function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
        console.log('Menu toggled'); // For debugging
    }
}

// Add event listener to make sure the function is available
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', toggleMenu);
    }
}); 