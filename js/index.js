document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a');

    profileLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const imgEl = link.querySelector('img');
            const nomeEl = link.querySelector('figcaption');

            if (imgEl && nomeEl) {
                const imgSrc = imgEl.src;
                const nome = nomeEl.textContent.trim();

                try {
                    localStorage.setItem('perfilAtivoNome', nome);
                    localStorage.setItem('perfilAtivoImagem', imgSrc);
                    localStorage.setItem('perfilAtivoId', `perfil${index + 1}`);
                } catch (e) {
                    console.warn('Não foi possível salvar o perfil ativo no localStorage', e);
                }

                window.location.href = link.href;
            }
        });
    });
});