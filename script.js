// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }
});

// Add dark mode styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background: #121212;
        color: #ffffff;
    }
    .dark-mode header {
        background: rgba(18, 18, 18, 0.9);
    }
    .dark-mode .logo, .dark-mode nav ul li a {
        color: #ffffff;
    }
    .dark-mode .project {
        background: #1e1e1e;
        color: #ffffff;
    }
    .dark-mode footer {
        background: #1e1e1e;
    }
`;
document.head.appendChild(style);