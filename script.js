// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
if (menuToggle && nav) {
	menuToggle.addEventListener('click', () => {
		nav.classList.toggle('open');
		const isOpen = nav.classList.contains('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
	link.addEventListener('click', e => {
		const targetId = link.getAttribute('href');
		if (!targetId || targetId === '#') return;
		const el = document.querySelector(targetId);
		if (!el) return;
		e.preventDefault();
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		// Close mobile menu after navigation
		nav?.classList.remove('open');
		menuToggle?.setAttribute('aria-expanded', 'false');
	});
});

// Year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = new Date().getFullYear().toString();
}

// Hero avatar upload with localStorage persistence
const avatarInput = document.getElementById('hero-avatar-input');
const headerAvatar = document.getElementById('hero-avatar');

const AVATAR_KEY = 'portfolio.heroAvatar';

function loadStoredAvatar() {
	try {
		const dataUrl = localStorage.getItem(AVATAR_KEY);
		if (dataUrl && headerAvatar) headerAvatar.src = dataUrl;
	} catch (_) { /* ignore */ }
}

function handleAvatarFile(file) {
	if (!file || !headerAvatar) return;
	const reader = new FileReader();
	reader.onload = e => {
		const dataUrl = e.target?.result;
		if (typeof dataUrl === 'string') {
			headerAvatar.src = dataUrl;
			try { localStorage.setItem(AVATAR_KEY, dataUrl); } catch (_) { /* ignore */ }
		}
	};
	reader.readAsDataURL(file);
}

headerAvatar?.addEventListener('click', () => avatarInput?.click());
avatarInput?.addEventListener('change', (e) => {
	const file = (e.target && e.target.files && e.target.files[0]) || null;
	handleAvatarFile(file);
});

loadStoredAvatar();

