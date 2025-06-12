        // ========== THEME TOGGLE FUNCTIONALITY ==========
        function toggleTheme() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            if (body.getAttribute('data-theme') === 'light') {
                body.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            }
        }

        // ========== LOAD SAVED THEME ON PAGE LOAD ==========
        document.addEventListener('DOMContentLoaded', function() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            const themeIcon = document.getElementById('theme-icon');
            
            document.body.setAttribute('data-theme', savedTheme);
            themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        });

        // ========== SCROLL ANIMATIONS ==========
        function handleScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // ========== SMOOTH SCROLLING FOR ANCHOR LINKS ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // ========== NAVBAR SCROLL EFFECT ==========
        function handleNavbarScroll() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = document.body.getAttribute('data-theme') === 'dark' 
                    ? 'rgba(10, 10, 15, 0.98)' 
                    : 'rgba(255, 255, 255, 0.98)';
            } else {
                navbar.style.background = document.body.getAttribute('data-theme') === 'dark' 
                    ? 'rgba(10, 10, 15, 0.95)' 
                    : 'rgba(255, 255, 255, 0.95)';
            }
        }

        // ========== FEATURE CARDS HOVER EFFECTS ==========
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // ========== TESTIMONIAL CARDS HOVER EFFECTS ==========
        document.querySelectorAll('.testimonial-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) rotateX(2deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0deg)';
            });
        });

        // ========== EVENT LISTENERS ==========
        window.addEventListener('scroll', function() {
            handleScrollAnimations();
            handleNavbarScroll();
        });

        // ========== INITIALIZE ANIMATIONS ON PAGE LOAD ==========
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize scroll animations
            handleScrollAnimations();
            
            // Add stagger effect to feature cards
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
            
            // Add stagger effect to steps
            const steps = document.querySelectorAll('.step');
            steps.forEach((step, index) => {
                step.style.animationDelay = `${index * 0.2}s`;
            });
        });

        // ========== PARALLAX EFFECT FOR HERO SECTION ==========
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            const rate = scrolled * -0.3;
            
            if (hero) {
                hero.style.transform = `translateY(${rate}px)`;
            }
        });

        // ========== BUTTON CLICK ANIMATIONS ==========
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });

        // ========== TYPING ANIMATION FOR HERO TITLE ==========
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // ========== INTERSECTION OBSERVER FOR BETTER PERFORMANCE ==========
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-left, .slide-right').forEach(el => {
            observer.observe(el);
        });

        // ========== COUNTER ANIMATION FOR STATS ==========
        function animateCounter(element, start, end, duration) {
            let current = start;
            const increment = (end - start) / (duration / 16);
            
            const timer = setInterval(() => {
                current += increment;
                element.textContent = Math.floor(current);
                
                if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                    element.textContent = end;
                    clearInterval(timer);
                }
            }, 16);
        }

        // ========== MOBILE MENU TOGGLE ==========
        function createMobileMenu() {
            const navbar = document.querySelector('.nav-container');
            const navMenu = document.querySelector('.nav-menu');
            
            // Create hamburger button
            const hamburger = document.createElement('button');
            hamburger.className = 'hamburger';
            hamburger.innerHTML = '☰';
            hamburger.style.cssText = `
                display: none;
                background: none;
                border: none;
                font-size: 24px;
                color: var(--text-primary);
                cursor: pointer;
            `;
            
            // Add hamburger to navbar
            navbar.insertBefore(hamburger, navbar.querySelector('.nav-auth'));
            
            // Toggle mobile menu
            hamburger.addEventListener('click', function() {
                navMenu.classList.toggle('mobile-active');
                this.innerHTML = navMenu.classList.contains('mobile-active') ? '✕' : '☰';
            });
            
            // Show hamburger on mobile
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            function handleMobile(e) {
                if (e.matches) {
                    hamburger.style.display = 'block';
                    navMenu.style.cssText = `
                        position: absolute;
                        top: 100%;
                        left: 0;
                        width: 100%;
                        background: var(--card-bg);
                        flex-direction: column;
                        padding: 20px;
                        transform: translateY(-100%);
                        opacity: 0;
                        pointer-events: none;
                        transition: all 0.3s ease;
                    `;
                } else {
                    hamburger.style.display = 'none';
                    navMenu.style.cssText = '';
                }
            }
            
            mediaQuery.addListener(handleMobile);
            handleMobile(mediaQuery);
        }

        // ========== ADD RIPPLE EFFECT STYLES ==========
        const rippleStyles = document.createElement('style');
        rippleStyles.textContent = `
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
            
            .mobile-active {
                transform: translateY(0) !important;
                opacity: 1 !important;
                pointer-events: all !important;
            }
        `;
        document.head.appendChild(rippleStyles);

        // ========== INITIALIZE EVERYTHING ==========
        document.addEventListener('DOMContentLoaded', function() {
            createMobileMenu();
            
            // Add loading animation
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });