document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    const numStars = 200; 

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        const size = Math.random() * 3 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        
        star.style.animationDuration = `${Math.random() * 2 + 1}s`; // 1s to 3s
        star.style.animationDelay = `${Math.random() * 2}s`; // 0s to 2s

        starsContainer.appendChild(star);
    }
});