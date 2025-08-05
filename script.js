
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // FAQ functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                const answer = item.querySelector('.faq-answer');
                const isActive = answer.classList.contains('active');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('active');
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                
                // Toggle current FAQ if it wasn't active
                if (!isActive) {
                    answer.classList.add('active');
                    question.classList.add('active');
                }
            });
        });
        
        // Scroll animations
        function animateOnScroll() {
            const elements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card, .step');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.2;
                
                if (elementPosition < screenPosition) {
                    element.classList.add('animated');
                }
            });
        }
        
        // Run once on load and then on scroll
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });


       // Correct selector (add the dot for class selector)
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach((card) => {
    card.addEventListener('click', () => {
        // Remove 'popular' class from all cards first
        pricingCards.forEach(c => c.classList.remove('popular'));
        
        // Add to clicked card
        card.classList.add('popular');
        
        // Add visual feedback
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
        
        // Optional: Scroll to make sure the selected card is fully visible
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});