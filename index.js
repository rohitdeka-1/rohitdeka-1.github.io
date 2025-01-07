function toggleMenu() {
    const menuLinks = document.querySelector('.menu-link');
    menuLinks.classList.toggle('active');
    
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    hamburgerIcon.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menuLinks = document.querySelector('.menu-link');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (!menuLinks.contains(event.target) && !hamburgerIcon.contains(event.target)) {
        menuLinks.classList.remove('active');
        hamburgerIcon.classList.remove('active');
    }
});

