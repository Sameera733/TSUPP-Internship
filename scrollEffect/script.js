// script.js
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#ff5722'; // Change to your desired color
  } else {
    header.style.backgroundColor = '#333'; // Default color
  }
});
