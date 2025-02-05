// Toggle Dark Mode
const toggleDarkMode = document.createElement('button');
toggleDarkMode.innerText = "🌙 Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.top = "20px";
toggleDarkMode.style.right = "20px";
toggleDarkMode.style.padding = "10px";
toggleDarkMode.style.background = "#333";
toggleDarkMode.style.color = "white";
toggleDarkMode.style.border = "none";
toggleDarkMode.style.cursor = "pointer";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkMode.innerText = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal Animation on Scroll
const sections = document.querySelectorAll("section");
const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });
};

document.addEventListener("scroll", revealSection);

document.addEventListener("DOMContentLoaded", () => {
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });
    revealSection();
});

// Add decorative elements
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector("#home");
    const cameraIcon = document.createElement("div");
    cameraIcon.innerHTML = "📷";
    cameraIcon.style.fontSize = "50px";
    cameraIcon.style.position = "absolute";
    cameraIcon.style.bottom = "20px";
    cameraIcon.style.right = "20px";
    heroSection.appendChild(cameraIcon);

    cameraIcon.style.animation = "bounce 1s infinite alternate";
});

// CSS Keyframe Animation for bouncing
document.head.insertAdjacentHTML("beforeend", `
    <style>
        @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
        .dark-mode {
            background-color: #121212;
            color: white;
        }
    </style>
`);