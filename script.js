// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar shrink on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50){
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});

// Typing effect for "Cybersecurity Specialist"
const text = "Cybersecurity Specialist";
let i = 0;
const typingElement = document.getElementById("typing");

function typing() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

window.addEventListener('load', typing);
