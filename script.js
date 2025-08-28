// Simple enhancements
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('primary-nav');
if (navToggle && navList){
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const THEME_KEY = 'prefers-light';
function applyTheme(light){
  if (light) root.classList.add('light'); else root.classList.remove('light');
}
applyTheme(localStorage.getItem(THEME_KEY) === '1');
if (themeToggle){
  themeToggle.addEventListener('click', () => {
    const next = !(root.classList.contains('light'));
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next ? '1' : '0');
  });
}

// Demo "send" handler
const sendBtn = document.getElementById('send-btn');
if (sendBtn){
  sendBtn.addEventListener('click', () => {
    alert('Thanks for your message! (Demo only)');
  });
}
