import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil || imagemPerfil) {
        const profileName = document.querySelector('.profile-name');
        const profileIcon = document.querySelector('.profile-icon');
        const primeiroNome = nomePerfil ? nomePerfil.trim().split(/\s+/)[0] : '';

        if (profileName && primeiroNome) {
            profileName.textContent = primeiroNome;
        }

        if (profileIcon && imagemPerfil) {
            profileIcon.src = imagemPerfil;
            profileIcon.alt = nomePerfil ? `Perfil de ${nomePerfil}` : 'Profile';
        }
    }

    const container = document.getElementById('main-content');

    if (container) {
        categories.forEach((category) => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
