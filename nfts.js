document.addEventListener('DOMContentLoaded', () => {
    const leftFrame = document.querySelector('#left-frame');
    const rightFrame = document.querySelector('#right-frame');
    const nftLeft = document.querySelector('#nft-left');
    const nftRight = document.querySelector('#nft-right');

    console.log('Frames found:', !!leftFrame, !!rightFrame);

    if (leftFrame && rightFrame) {
        leftFrame.addEventListener('mouseenter', () => {
            console.log('Left frame hover');
            nftLeft.style.opacity = '1';
        });

        leftFrame.addEventListener('mouseleave', () => {
            console.log('Left frame leave');
            nftLeft.style.opacity = '0';
        });

        rightFrame.addEventListener('mouseenter', () => {
            console.log('Right frame hover');
            nftRight.style.opacity = '1';
        });

        rightFrame.addEventListener('mouseleave', () => {
            console.log('Right frame leave');
            nftRight.style.opacity = '0';
        });
    }
});
