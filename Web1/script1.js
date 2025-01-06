// script.js
window.addEventListener('scroll', () => {
    const header = document.querySelector('.head');
    if (window.scrollY > 50) {
      header.style.backgroundColor = '#143C24'; // Change to your desired color
      header.style. opacity = '1';
    } else {
      header.style.backgroundColor = '#a3c3cb'; // Default color
      header.style. opacity = '0.5';
    }
  });
  