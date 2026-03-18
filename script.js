// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Navbar shrink on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>50) navbar.classList.add('shrink');
  else navbar.classList.remove('shrink');
});

// Typing effect
const text = "Cybersecurity Specialist";
let i=0;
const typingElement=document.getElementById("typing");
function typing(){ if(i<text.length){ typingElement.innerHTML+=text.charAt(i); i++; setTimeout(typing,100);} }
window.addEventListener('load', typing);

// Fade-in on scroll
const faders=document.querySelectorAll('.fade-in');
const appearOptions={threshold:0.3};
const appearOnScroll=new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    entry.target.style.opacity=1;
    entry.target.style.transform='translateY(0)';
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

// Back-to-top button
const backToTop=document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>300) backToTop.style.display='block';
  else backToTop.style.display='none';
});
backToTop.addEventListener('click', ()=>{window.scrollTo({top:0, behavior:'smooth'});});

// Skills progress animation
const skills = document.querySelectorAll('.progress-bar');
const skillObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.width=entry.target.style.width;
      skillObserver.unobserve(entry.target);
    }
  });
},{threshold:0.3});
skills.forEach(skill=>skillObserver.observe(skill));
