function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('active') && 
        !e.target.closest('.menu-container')) {
        menu.classList.remove('active');
    }
}); 