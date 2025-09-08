// เปิด/ปิดเมนูบนมือถือ
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const hidden = mobileMenu.classList.toggle('hidden');
        menuBtn.setAttribute('aria-expanded', String(!hidden));
    });
    // ปิดเมนูอัตโนมัติเมื่อคลิกลิงก์
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}