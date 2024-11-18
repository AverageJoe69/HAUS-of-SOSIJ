document.addEventListener('DOMContentLoaded', () => {
    const flashBg = document.querySelector('.flash-bg');
    const nftButton = document.getElementById('nft-button');
    const focgButton = document.getElementById('focg-button');
    const nftHover = document.getElementById('nft-hover');
    const focgHover = document.getElementById('focg-hover');
    let isHovering = false;
    let moveTimer = null;

    document.addEventListener('mousemove', () => {
        if (!isHovering) {
            flashBg.style.opacity = '1';
            
            clearTimeout(moveTimer);
            
            moveTimer = setTimeout(() => {
                flashBg.style.opacity = '0';
            }, 150);
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
});
