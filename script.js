function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// Close the menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
    }
  });
});