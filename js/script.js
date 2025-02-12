document.addEventListener('DOMContentLoaded', () => { // ページの読み込みが完了したら実行する処理
    // アニメーションの設定
    const keyframes = {
        opacity: [0, 1],
        translate: ['0 -50px', 0], // translateY (縦方向) で-50pxから0に移動
    };

    const options = {
        duration: 1000,
        fill: 'forwards',   // アニメーション終了後のスタイルを保持
        easing: 'ease',
    };

    const elementsToAnimate = [
        document.querySelector('.top-wrapper'),
        document.querySelector('.aboutme-wrapper')
    ];

    // 各要素にアニメーションを適用
    elementsToAnimate.forEach(element => {
        if (element) {
            element.animate(keyframes, options);
        }
    });
});

// メニューアイコンをクリックした時にメニューを開閉する
// モバイル対応 (画面幅670px以下)
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
const menuOptions = {
    duration: 1400,
    fill: 'forwards',
    easing: 'ease',
};

if(window.innerWidth <= 670){
        // メニューを開く
    menuOpen.addEventListener('click', () => {
        menuPanel.style.transform = 'translateX(0)'; // メニューを開く
        menuPanel.style.transition = 'transform 0.1s ease-out';  // 開くアニメーション
        menuOpen.style.display = 'none'; // メニューアイコンを非表示

        // メニュー項目をアニメーションで表示
        menuItems.forEach((menuItem,index)=>{                      // リスト項目を表示
            menuItem.animate(
                {opacity:[0,1],transform: ['translateX(2rem)', 'translateX(0)'] },
                {duration: 1400,fill: 'forwards',easing: 'ease',delay: 300 * index,}
            );
        });
    });

    // メニューを閉じる
    menuClose.addEventListener('click', () => {
        menuPanel.style.transform = 'translateX(100vw)'; // メニューを閉じる
        menuPanel.style.transition = 'transform 0.4s ease-out'; // 閉じるアニメーション
        menuOpen.style.display = 'block'; // メニューアイコンを再表示

        // メニュー項目を非表示
        menuItems.forEach((menuItem) => {
            menuItem.style.opacity = 0; // リスト項目を非表示
            menuItem.style.transform = 'translateX(2rem)'; // リスト項目を非表示
        });
    });
}
