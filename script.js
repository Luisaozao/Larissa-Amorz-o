document.addEventListener('DOMContentLoaded', () => {
    const bolo = document.getElementById('bolo');
    const balloonContainer = document.querySelector('.balloon-container');

    bolo.addEventListener('click', () => {
        for (let i = 0; i < 200; i++) { // Cria 10 balões
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
            balloon.style.animationDuration = `${Math.random() * 1 + 4}s`; // Duração aleatória
            balloonContainer.appendChild(balloon);

            // Remove o balão do DOM após a animação
            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });
        }
    });
});