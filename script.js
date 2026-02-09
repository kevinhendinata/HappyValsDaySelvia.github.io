// Create floating hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💘'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 300);
}

// Initialize floating hearts
createFloatingHearts();

// Page navigation
function nextPage(pageNumber) {
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.getElementById('page' + pageNumber);
    
    currentPage.classList.remove('active');
    nextPage.classList.add('active');
    
    // Reset yes button size when going to page 2
    if (pageNumber === 2) {
        clickCount = 0; // Reset click count
        const yesBtn = document.getElementById('yesBtn');
        yesBtn.style.transform = 'scale(1)';
        yesBtn.style.fontSize = '1.2rem';
        
        const noBtn = document.getElementById('noBtn');
        noBtn.style.opacity = '1';
        noBtn.style.fontSize = '1.2rem';
        noBtn.style.padding = '15px 40px';
        noBtn.style.pointerEvents = 'auto';
        noBtn.style.position = 'absolute';
        noBtn.style.transform = 'translate(0, 0)';
        
        // Reset question text
        const questionText = document.getElementById('questionText');
        questionText.textContent = 'Will You Be My Valentine?';
    }
}

// Handle Yes button click - go to confirmation page
function handleYesClick() {
    nextPage(3);
}

// Move No button and grow Yes button
let clickCount = 0;
const maxClicks = 15; // Increased from 8 to 15

function moveNoButton() {
    clickCount++;
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.querySelector('#page2 .content');
    const containerRect = container.getBoundingClientRect();
    
    // Calculate random position with more extreme movements
    const maxX = containerRect.width - 50;
    const maxY = containerRect.height - 50;
    const randomX = (Math.random() - 0.5) * maxX * 1.5;
    const randomY = (Math.random() - 0.5) * maxY * 1.5;
    
    // Move no button
    noBtn.style.position = 'absolute';
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 360}deg)`;
    
    // Shrink no button more gradually
    const newSize = Math.max(0.1, 1 - (clickCount * 0.06));
    const newFontSize = Math.max(0.4, 1.2 - (clickCount * 0.05));
    const newPadding = Math.max(3, 15 - (clickCount * 0.8));
    
    noBtn.style.fontSize = newFontSize + 'rem';
    noBtn.style.padding = newPadding + 'px ' + (newPadding * 2) + 'px';
    noBtn.style.opacity = newSize;
    
    // Grow yes button
    const yesGrowth = 1 + (clickCount * 0.12);
    const yesFontSize = 1.2 + (clickCount * 0.08);
    yesBtn.style.transform = `scale(${yesGrowth})`;
    yesBtn.style.fontSize = yesFontSize + 'rem';
    
    // Hide no button after max clicks
    if (clickCount >= maxClicks) {
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';
        
        // Add shake animation to yes button
        yesBtn.style.animation = 'shake 0.5s ease';
        setTimeout(() => {
            yesBtn.style.animation = '';
        }, 500);
    }
    
    // Extended fun messages
    const messages = [
        '💔 Are you sure?',
        '🥺 Please reconsider...',
        '💕 Think again, sayang...',
        '😢 You\'re breaking my heart...',
        '💖 Come on, just click YES!',
        '🌹 I know you want to...',
        '💝 Pretty please? 🥺',
        '❤️ You know you love me!',
        '😭 I flew across the screen for this...',
        '💫 The universe wants us together!',
        '🎯 Just accept your fate already!',
        '😂 Nice try, but NO escape!',
        '🙈 Why are you like this?',
        '💗 Fine, I\'ll wait... forever if I have to',
        '✨ Last chance before I cry! 😭'
    ];
    
    if (clickCount <= messages.length) {
        const h1 = document.querySelector('#page2 h1');
        h1.textContent = messages[clickCount - 1];
        h1.classList.add('pulse');
    }
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0) scale(var(--scale, 1)); }
        25% { transform: translateX(-10px) scale(var(--scale, 1)); }
        75% { transform: translateX(10px) scale(var(--scale, 1)); }
    }
`;
document.head.appendChild(style);

// Add particle effect when clicking Yes button
document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    
    yesBtn.addEventListener('click', function(e) {
        createHeartExplosion(e.pageX, e.pageY);
    });
});

function createHeartExplosion(x, y) {
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 100 + Math.random() * 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        document.body.appendChild(heart);
        
        let posX = 0;
        let posY = 0;
        let opacity = 1;
        
        const animation = setInterval(() => {
            posX += vx * 0.016;
            posY += vy * 0.016 + 2;
            opacity -= 0.02;
            
            heart.style.transform = `translate(${posX}px, ${posY}px)`;
            heart.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(animation);
                heart.remove();
            }
        }, 16);
    }
}

// Add sparkle effect on mouse move
let lastSparkle = 0;
document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastSparkle > 100) {
        createSparkle(e.pageX, e.pageY);
        lastSparkle = now;
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.position = 'fixed';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.fontSize = '12px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.opacity = '1';
    sparkle.style.transition = 'all 0.5s ease';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'translateY(-20px) scale(0)';
    }, 50);
    
    setTimeout(() => {
        sparkle.remove();
    }, 600);
}
