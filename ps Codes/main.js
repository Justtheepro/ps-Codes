const openBtn = document.getElementById('open-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const backdrop = document.getElementById('menu-backdrop');
        const drawer = document.getElementById('mobile-drawer');

        function openMenu() {
            // Show backdrop
            backdrop.classList.remove('hidden');
            // Small timeout to allow the 'display: block' to register before adding opacity for transition
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                // Slide in drawer
                drawer.classList.remove('translate-x-full');
            }, 10);
            document.body.classList.add('overflow-hidden'); // Prevent scrolling
        }

        function closeMenu() {
            // Slide out drawer
            drawer.classList.add('translate-x-full');
            // Fade out backdrop
            backdrop.classList.add('opacity-0');
            
            // Wait for transition to finish before hiding backdrop completely
            setTimeout(() => {
                backdrop.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }, 300);
        }

        openBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);
    


        // Scroll to Top Button Logic
const scrollBtn = document.getElementById('scrollTopBtn');

if (scrollBtn) {
    window.addEventListener('scroll', () => {
        // Show button if scrolled down more than 300px
        if (window.scrollY > 300) {
            scrollBtn.classList.remove('hidden');
        } else {
            scrollBtn.classList.add('hidden');
        }
    });
}