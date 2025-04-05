document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const smoothScroll = function(target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    };

    // Apply animations to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card');
        
        elements.forEach((element, index) => {
            // Add delay to stagger animations
            element.style.animationDelay = `${index * 0.1}s`;
            
            // Check if element is in viewport
            const rect = element.getBoundingClientRect();
            const isInViewport = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
            
            if (isInViewport) {
                element.classList.add('visible');
            }
        });
    };

    // Parallax effect for hero section
    const parallax = function() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    };

    // Add button hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });
    });

    // Call functions on load and scroll
    window.addEventListener('scroll', function() {
        animateOnScroll();
        parallax();
    });
    
    // Initial call
    animateOnScroll();
}); 