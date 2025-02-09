document.addEventListener('DOMContentLoaded', () => {
    // アニメーションの設定
    const keyframes = {
        opacity: [0, 1],
        translate: ['0 -50px', 0],
    };

    const options = {
        duration: 1000,
        fill: 'forwards',
        easing: 'ease',
    };

    // topWrapperを取得
    const topWrapper = document.querySelector('.top-wrapper');
    if (topWrapper) {
        topWrapper.animate(keyframes, options);
    }

    // aboutWrapperを取得
    const aboutWrapper = document.querySelector('.aboutme-wrapper');
    if (aboutWrapper) {
        aboutWrapper.animate(keyframes, options);
    }
});
