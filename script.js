document.addEventListener('DOMContentLoaded', () => {
    const order = ['home-section', 'news-section', 'about-section', 'donate-section'];
    const buttons = {
        hometb: 'home-section',
        newstb: 'news-section',
        abouttb: 'about-section',
        donatetb: 'donate-section'
    };
    let currentId = 'home-section';

    Object.keys(buttons).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            const targetId = buttons[id];
            if (targetId === currentId) return;

            const targetIndex = order.indexOf(targetId);
            order.forEach((secId, idx) => {
                const sec = document.getElementById(secId);
                sec.style.opacity = (idx < targetIndex) ? '0' : '1';
            });
            currentId = targetId;
        });
    });
});