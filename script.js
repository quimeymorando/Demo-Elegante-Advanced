/**
 * Luce Mare — Advanced Plan
 * Main JavaScript — Common site behaviors
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // 1. NAVBAR: Scroll Effect
    // =========================================================
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }


    // =========================================================
    // 2. MOBILE MENU: Toggle
    // =========================================================
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isActive = mobileMenu.classList.contains('active');
            mobileBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = isActive ? '' : 'hidden';
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }


    // =========================================================
    // 3. SCROLL ANIMATIONS: Fade-up with IntersectionObserver
    // =========================================================
    const observerOpts = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOpts);

    document.querySelectorAll('.fade-up').forEach(el => scrollObserver.observe(el));


    // =========================================================
    // 4. HERO: Parallax tilt on desktop
    // =========================================================
    const heroBg = document.querySelector('.hero-bg img');
    if (heroBg && window.innerWidth >= 1024) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
        }, { passive: true });
    }


    // =========================================================
    // 5. HERO CONTENT: Entrance animation
    // =========================================================
    setTimeout(() => {
        document.querySelectorAll('.hero-content .fade-up').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 150);
        });
    }, 200);


    // =========================================================
    // 6. ACTIVE NAV: Highlight current page
    // =========================================================
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('#')) {
            if (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html')) {
                link.classList.add('active');
            }
        }
    });


    // =========================================================
    // 7. SMOOTH SCROLL: Internal anchor links  
    // =========================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // =========================================================
    // 8. GALLERY HOVER: Add subtle cursor effect
    // =========================================================
    document.querySelectorAll('.dish-card, .gallery-item').forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.willChange = 'transform';
        });
        card.addEventListener('mouseleave', function () {
            this.style.willChange = '';
        });
    });

});
