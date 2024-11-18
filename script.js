let lastX = 0;
let lastY = 0;
const threshold = 100;
const flashDuration = 200;

const flashBg = document.querySelector('.flash-bg');

document.addEventListener('mousemove', (e) => {
    const deltaX = Math.abs(e.clientX - lastX);
    const deltaY = Math.abs(e.clientY - lastY);
    
    if (deltaX > threshold || deltaY > threshold) {
        flashBg.classList.add('active');
        
        setTimeout(() => {
            flashBg.classList.remove('active');
        }, flashDuration);
        
        lastX = e.clientX;
        lastY = e.clientY;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Home page specific code
    if (!document.body.classList.contains('nft-page')) {
        const flashBg = document.querySelector('.flash-bg');
        const nftButton = document.getElementById('nft-button');
        const focgButton = document.getElementById('focg-button');
        const nftHover = document.getElementById('nft-hover');
        const focgHover = document.getElementById('focg-hover');
        let isHovering = false;

        document.addEventListener('mousemove', () => {
            if (!isHovering) {
                flashBg.style.opacity = Math.random() > 0.5 ? '1' : '0';
            }
        });

        nftButton?.addEventListener('mouseenter', () => {
            isHovering = true;
            nftHover.style.opacity = '1';
        });

        nftButton?.addEventListener('mouseleave', () => {
            isHovering = false;
            nftHover.style.opacity = '0';
        });

        focgButton?.addEventListener('mouseenter', () => {
            isHovering = true;
            focgHover.style.opacity = '1';
        });

        focgButton?.addEventListener('mouseleave', () => {
            isHovering = false;
            focgHover.style.opacity = '0';
        });
    }

    // NFT page specific code
    if (document.body.classList.contains('nft-page')) {
        const flashBg = document.querySelector('.flash-bg');
        const leftFrame = document.getElementById('left-frame');
        const rightFrame = document.getElementById('right-frame');

        leftFrame.addEventListener('mouseenter', () => {
            flashBg.style.opacity = '1';
        });

        leftFrame.addEventListener('mouseleave', () => {
            flashBg.style.opacity = '0';
        });

        rightFrame.addEventListener('mouseenter', () => {
            flashBg.style.opacity = '1';
        });

        rightFrame.addEventListener('mouseleave', () => {
            flashBg.style.opacity = '0';
        });
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('active') && 
        !e.target.closest('.menu-container')) {
        menu.classList.remove('active');
    }
});
