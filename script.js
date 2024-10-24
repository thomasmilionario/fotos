const photos = document.querySelectorAll('.photo');

photos.forEach(photo => {
    photo.addEventListener('click', (e) => {
        // Criar elemento de explosão
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        document.body.appendChild(explosion);

        // Posicionar a explosão onde foi clicado
        const rect = photo.getBoundingClientRect();
        explosion.style.left = `${rect.left + rect.width / 2}px`;
        explosion.style.top = `${rect.top + rect.height / 2}px`;

        // Adicionar animação
        setTimeout(() => {
            explosion.classList.add('explode');
        }, 0); // Iniciar a animação imediatamente

        // Remover a explosão após a animação
        explosion.addEventListener('animationend', () => {
            document.body.removeChild(explosion);
        });

        // Criar o overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        const img = document.createElement('img');
        img.src = photo.querySelector('img').src;
        overlay.appendChild(img);
        document.body.appendChild(overlay);

        // Animação de desvanecimento
        setTimeout(() => {
            overlay.classList.add('visible');
        }, 10);

        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');

            overlay.addEventListener('transitionend', () => {
                document.body.removeChild(overlay);
            }, { once: true });
        });
    });
});
