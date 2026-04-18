document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Navbar Scroll Effect (Glassmorphism shadow)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Scroll Reveal Animations utilizing Intersection Observer
    const scrollElements = document.querySelectorAll('.scroll-fade');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    // Initial check and on-scroll listener
    handleScrollAnimation();
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // 4. Add to Cart Functionality (UI Only)
    const addButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountEl = document.querySelector('.cart-count');
    const toast = document.getElementById('toast');
    let cartCount = 0;

    addButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Number
            cartCount++;
            cartCountEl.textContent = cartCount;

            // Simple button animation
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fa-solid fa-check"></i> Added';
            btn.style.background = 'var(--primary-color)';
            btn.style.color = 'white';
            
            // Show toast
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);

            // Revert button after delay
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = 'transparent';
                btn.style.color = 'var(--primary-color)';
            }, 2000);
        });
    });
});
