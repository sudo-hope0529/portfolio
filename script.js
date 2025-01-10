// Hide the preloader once the page has fully loaded
window.addEventListener('load', function() {
   document.getElementById('preloader').style.display = 'none';
});

// script for slogan part
const slogans = [
   "Cyber Security",
   "Ethical Hacking",
   "Web Development"
   ];

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]<>.,;:";
const sloganElement = document.querySelector(".slogan");
let currentSloganIndex = 0;

function addOrRemoveClass(element, className, add) {
element.classList[add ? "add" : "remove"](className);
}

function getRandomCharacter() {
return characters[Math.floor(Math.random() * characters.length)];
}

function changeSlogan() {
addOrRemoveClass(sloganElement, "glitch", false);
const currentSlogan = slogans[currentSloganIndex];
const sloganLength = currentSlogan.length;
let charIndex = 0;

const interval = setInterval(() => {
   sloganElement.textContent = [...currentSlogan].map((char, index) => index < charIndex ? char : getRandomCharacter()).join("");
   charIndex++;
   if (charIndex > sloganLength) {
   clearInterval(interval);
   addOrRemoveClass(sloganElement, "glitch", true);
   sloganElement.dataset.text = sloganElement.textContent;
   currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
   }
}, 15);
}

function startSloganChange() {
changeSlogan();
setInterval(changeSlogan, 4000);
}

if (/complete|interactive/.test(document.readyState)) {
setTimeout(startSloganChange, 1);
} else {
document.addEventListener("DOMContentLoaded", startSloganChange);
}

// Dark/Light mode toggle
document.getElementById('toggleTheme').addEventListener('click', function() {
   const body = document.body;
   body.classList.toggle('dark-mode');
   body.classList.toggle('light-mode');
   this.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Function to show the selected section
function showSection(sectionId) {
   const sections = document.querySelectorAll('section');
   sections.forEach(section => {
       section.classList.remove('active');
   });
   const activeSection = document.getElementById(sectionId);
   activeSection.classList.add('active');
}

// Load the introduction section by default
showSection('introduction');