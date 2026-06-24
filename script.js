/**
 * SALATIN - Interactive Effects & Animations
 * Perkumpulan Salatin Asyrof Azzahro Indonesia
 */

(function() {
    'use strict';

    // ========== DOM READY ==========
    document.addEventListener('DOMContentLoaded', function() {

        // ===== LOADING SCREEN =====
        initLoadingScreen();

        // ===== STARFIELD =====
        createStarfield();

        // ===== FLOATING PARTICLES =====
        createParticles();

        // ===== GEOMETRIC SHAPES =====
        createGeometricShapes();

        // ===== MATRIX RAIN =====
        createMatrixRain();

        // ===== MOUSE FOLLOWER =====
        initMouseFollower();

        // ===== SCROLL REVEAL =====
        initScrollReveal();

        // ===== BACK TO TOP =====
        initBackToTop();

        // ===== SMOOTH SCROLL =====
        initSmoothScroll();

        // ===== PARALLAX =====
        initParallax();

        // ===== HERO SUBTITLE FADE =====
        initHeroFade();

        // ===== CONSOLE EASTER EGG =====
        consoleEasterEgg();

        // ===== GLITCH EFFECT =====
        initGlitchEffect();

        // ===== COUNTER ANIMATION =====
        initCounterAnimation();

        // ===== NAV ACTIVE STATE =====
        initNavActiveState();

        // ===== LAZY LOADING BACKGROUNDS =====
        initLazyBackgrounds();

    });


    // ============================================
    //  LOADING SCREEN
    // ============================================
    function initLoadingScreen() {
        // Create loading screen element
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loading-screen';
        loadingScreen.innerHTML = `
            <div class="loading-logo">SALATIN</div>
            <div class="loading-bar-container">
                <div class="loading-bar"></div>
            </div>
            <div class="loading-text">LOADING . . .</div>
        `;

        // Insert at the beginning of body
        document.body.insertBefore(loadingScreen, document.body.firstChild);

        // Hide loading screen after animation completes
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after transition
            setTimeout(function() {
                loadingScreen.remove();
            }, 900);
        }, 2000);
    }


    // ============================================
    //  STARFIELD
    // ============================================
    function createStarfield() {
        const container = document.getElementById('stars');
        if (!container) return;

        const starCount = 250;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            const size = 1 + Math.random() * 2.5;
            star.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                width: ${size}px;
                height: ${size}px;
                --duration: ${2 + Math.random() * 4}s;
                animation-delay: ${Math.random() * 4}s;
            `;
            fragment.appendChild(star);
        }

        container.appendChild(fragment);

        // Create shooting stars
        createShootingStars(container);
    }

    function createShootingStars(container) {
        // Add shooting star styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .shooting-star {
                position: absolute;
                width: 80px;
                height: 2px;
                background: linear-gradient(90deg, #fff, transparent);
                border-radius: 2px;
                animation: shoot var(--shoot-duration) linear forwards;
                opacity: 0;
                pointer-events: none;
            }

            @keyframes shoot {
                0% {
                    opacity: 0;
                    transform: translateX(0) translateY(0) rotate(-35deg);
                }
                5% {
                    opacity: 1;
                }
                80% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translateX(-300px) translateY(200px) rotate(-35deg);
                }
            }

            .shooting-star::after {
                content: '';
                position: absolute;
                top: -1px;
                left: 0;
                width: 4px;
                height: 4px;
                background: #fff;
                border-radius: 50%;
                box-shadow: 0 0 6px rgba(255, 255, 255, 0.8);
            }
        `;
        document.head.appendChild(style);

        // Spawn shooting stars periodically
        function spawnShootingStar() {
            const star = document.createElement('div');
            star.className = 'shooting-star';
            star.style.cssText = `
                top: ${5 + Math.random() * 30}%;
                right: -80px;
                --shoot-duration: ${1.5 + Math.random() * 1.5}s;
                animation-delay: ${Math.random() * 0.5}s;
            `;
            container.appendChild(star);

            // Remove after animation
            setTimeout(function() {
                if (star.parentNode) star.remove();
            }, 4000);
        }

        // Spawn every 3-8 seconds
        function scheduleShootingStar() {
            const delay = 3000 + Math.random() * 8000;
            setTimeout(function() {
                spawnShootingStar();
                scheduleShootingStar();
            }, delay);
        }

        scheduleShootingStar();
    }


    // ============================================
    //  FLOATING PARTICLES
    // ============================================
    function createParticles() {
        const container = document.getElementById('particles');
        if (!container) return;

        const particleCount = 40;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            const size = 2 + Math.random() * 4;
            const topOffset = 100 + Math.random() * 30;
            particle.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${topOffset}%;
                width: ${size}px;
                height: ${size}px;
                --float-duration: ${10 + Math.random() * 15}s;
                --drift: ${-40 + Math.random() * 80}px;
                animation-delay: ${Math.random() * 12}s;
            `;
            fragment.appendChild(particle);
        }

        container.appendChild(fragment);
    }


    // ============================================
    //  GEOMETRIC SHAPES
    // ============================================
    function createGeometricShapes() {
        const container = document.createElement('div');
        container.className = 'geometric-container';
        document.body.appendChild(container);

        const shapes = ['square', 'circle', 'triangle', 'diamond'];
        const shapeCount = 12;

        for (let i = 0; i < shapeCount; i++) {
            const shape = document.createElement('div');
            const type = shapes[Math.floor(Math.random() * shapes.length)];
            shape.className = `geo-shape ${type}`;
            shape.style.cssText = `
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                --geo-duration: ${15 + Math.random() * 25}s;
                animation-delay: ${Math.random() * 10}s;
            `;
            container.appendChild(shape);
        }
    }


    // ============================================
    //  MATRIX RAIN
    // ============================================
    function createMatrixRain() {
        const canvas = document.createElement('canvas');
        canvas.className = 'matrix-rain';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let width, height, columns, drops;

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            columns = Math.floor(width / 20);
            drops = Array(columns).fill(1);
        }

        resize();
        window.addEventListener('resize', resize);

        // Matrix characters (katakana + latin)
        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789#SALATIN';

        function draw() {
            ctx.fillStyle = 'rgba(10, 10, 46, 0.05)';
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = '#00ff00';
            ctx.font = '14px monospace';

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillStyle = `rgba(0, 255, 0, ${0.5 + Math.random() * 0.3})`;
                ctx.fillText(char, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        }

        // Run at reduced framerate for performance
        let running = true;
        let lastTime = 0;
        const interval = 50; // ms between frames

        function animate(time) {
            if (!running) return;
            if (time - lastTime >= interval) {
                draw();
                lastTime = time;
            }
            requestAnimationFrame(animate);
        }

        // Pause when not visible
        document.addEventListener('visibilitychange', function() {
            running = !document.hidden;
            if (running) {
                requestAnimationFrame(animate);
            }
        });

        requestAnimationFrame(animate);
    }


    // ============================================
    //  MOUSE FOLLOWER
    // ============================================
    function initMouseFollower() {
        // Only on non-touch devices
        if ('ontouchstart' in window) return;

        const follower = document.createElement('div');
        follower.className = 'mouse-follower';
        document.body.appendChild(follower);

        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth follow with lerp
        function animate() {
            currentX += (mouseX - currentX) * 0.1;
            currentY += (mouseY - currentY) * 0.1;

            follower.style.left = currentX + 'px';
            follower.style.top = currentY + 'px';

            requestAnimationFrame(animate);
        }

        animate();

        // Scale up on hoverable elements
        document.addEventListener('mouseover', function(e) {
            const target = e.target.closest('a, button, .card, .program-card, .ketua-card, .visi-card, .misi-card, .contact-card');
            if (target) {
                follower.style.width = '40px';
                follower.style.height = '40px';
                follower.style.borderColor = 'rgba(0, 255, 0, 0.6)';
                follower.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.2)';
                follower.style.backgroundColor = 'rgba(0, 255, 0, 0.05)';
            }
        });

        document.addEventListener('mouseout', function(e) {
            const target = e.target.closest('a, button, .card, .program-card, .ketua-card, .visi-card, .misi-card, .contact-card');
            if (target) {
                follower.style.width = '20px';
                follower.style.height = '20px';
                follower.style.borderColor = 'rgba(0, 255, 0, 0.3)';
                follower.style.boxShadow = '0 0 15px rgba(0, 255, 0, 0.1)';
                follower.style.backgroundColor = 'transparent';
            }
        });
    }


    // ============================================
    //  SCROLL REVEAL
    // ============================================
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        function checkReveal() {
            const windowHeight = window.innerHeight;

            revealElements.forEach(function(el) {
                const rect = el.getBoundingClientRect();
                const threshold = el.classList.contains('reveal-scale') ? 0.9 : 0.85;

                if (rect.top < windowHeight * threshold) {
                    el.classList.add('active');
                }
            });
        }

        // Initial check
        setTimeout(checkReveal, 100);
        window.addEventListener('scroll', checkReveal);
        window.addEventListener('resize', checkReveal);
    }


    // ============================================
    //  BACK TO TOP
    // ============================================
    function initBackToTop() {
        const backToTop = document.getElementById('backToTop');
        if (!backToTop) return;

        // Throttled scroll handler
        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    if (window.scrollY > 500) {
                        backToTop.classList.add('show');
                    } else {
                        backToTop.classList.remove('show');
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }


    // ============================================
    //  SMOOTH SCROLL
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('.sidebar a').forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);

                if (target) {
                    const offset = window.innerWidth <= 768 ? 50 : 0;
                    const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;

                    window.scrollTo({
                        top: targetPos,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }


    // ============================================
    //  PARALLAX
    // ============================================
    function initParallax() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    const rect = hero.getBoundingClientRect();

                    if (rect.bottom > 0) {
                        const scrolled = -rect.top;
                        const heroH1 = hero.querySelector('h1');
                        const heroH2 = hero.querySelector('h2');
                        const heroH3 = hero.querySelector('h3');
                        const heroBadge = hero.querySelector('.hero-badge');

                        if (heroH1) {
                            heroH1.style.transform = 'translateY(' + (scrolled * 0.15) + 'px)';
                        }
                        if (heroH2) {
                            heroH2.style.transform = 'translateY(' + (scrolled * 0.1) + 'px)';
                        }
                        if (heroH3) {
                            heroH3.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';
                        }
                        if (heroBadge) {
                            heroBadge.style.transform = 'translateY(' + (scrolled * 0.08) + 'px)';
                        }
                    }

                    ticking = false;
                });
                ticking = true;
            }
        });
    }


    // ============================================
    //  HERO FADE
    // ============================================
    function initHeroFade() {
        const heroSubtitle = document.querySelector('.hero-subtitle');
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '0';
            setTimeout(function() {
                heroSubtitle.style.transition = 'opacity 1.5s ease';
                heroSubtitle.style.opacity = '1';
            }, 1500);
        }
    }


    // ============================================
    //  CONSOLE EASTER EGG
    // ============================================
    function consoleEasterEgg() {
        console.log('%c✧ SALATIN ✧', 'font-size:24px; color:#00ff00; text-shadow: 0 0 20px #00ff00;');
        console.log('%cPerkumpulan Salatin Asyrof Azzahro Indonesia', 'font-size:14px; color:#66d9ff;');
        console.log('%cTrah Kerajaan & Kesultanan Nusantara', 'font-size:12px; color:#ffffff;');
        console.log('%c#SALATIN', 'font-size:18px; color:#00ff00; text-shadow: 0 0 10px #00ff00;');
        console.log('%c© 2024 SALATIN. All rights reserved.', 'font-size:10px; color:rgba(255,255,255,0.3);');
    }


    // ============================================
    //  GLITCH EFFECT
    // ============================================
    function initGlitchEffect() {
        const glitchElements = document.querySelectorAll('.glitch');

        glitchElements.forEach(function(el) {
            const text = el.textContent;

            // Add glitch animation on hover
            el.addEventListener('mouseenter', function() {
                let iterations = 0;
                const interval = setInterval(function() {
                    if (iterations > 8) {
                        clearInterval(interval);
                        el.textContent = text;
                        return;
                    }

                    const glitchText = text.split('').map(function(char, index) {
                        if (Math.random() < 0.3) {
                            const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789';
                            return chars[Math.floor(Math.random() * chars.length)];
                        }
                        return char;
                    }).join('');

                    el.textContent = glitchText;
                    el.style.textShadow =
                        `${Math.random() * 4 - 2}px 0 #00ff00, ${Math.random() * 4 - 2}px 0 #ff00ff`;

                    iterations++;
                }, 80);
            });

            el.addEventListener('mouseleave', function() {
                el.textContent = text;
                el.style.textShadow = '0 0 20px rgba(0, 255, 0, 0.6), 0 0 40px rgba(0, 255, 0, 0.3)';
            });
        });
    }


    // ============================================
    //  COUNTER ANIMATION
    // ============================================
    function initCounterAnimation() {
        // Animate numbers when they come into view
        const counters = document.querySelectorAll('.counter');

        counters.forEach(function(counter) {
            const target = parseInt(counter.getAttribute('data-target')) || 0;
            const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';

            let animated = false;

            function animateCounter() {
                if (animated) return;
                const rect = counter.getBoundingClientRect();

                if (rect.top < window.innerHeight * 0.85) {
                    animated = true;
                    const startTime = performance.now();

                    function update(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * target);

                        counter.textContent = prefix + current.toLocaleString() + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(update);
                        } else {
                            counter.textContent = prefix + target.toLocaleString() + suffix;
                        }
                    }

                    requestAnimationFrame(update);
                }
            }

            window.addEventListener('scroll', animateCounter);
            window.addEventListener('load', animateCounter);
        });
    }


    // ============================================
    //  NAV ACTIVE STATE
    // ============================================
    function initNavActiveState() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.sidebar a');

        if (sections.length === 0 || navLinks.length === 0) return;

        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(function() {
                    const scrollPos = window.scrollY + 100;
                    let currentSection = '';

                    sections.forEach(function(section) {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;

                        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                            currentSection = section.getAttribute('id');
                        }
                    });

                    navLinks.forEach(function(link) {
                        const href = link.getAttribute('href').substring(1);
                        if (href === currentSection) {
                            link.style.color = '#00ff00';
                            link.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.4)';
                            if (window.innerWidth > 768) {
                                link.style.borderLeftColor = '#00ff00';
                                link.style.paddingLeft = '12px';
                            }
                        } else {
                            link.style.color = '';
                            link.style.textShadow = '';
                            link.style.borderLeftColor = '';
                            link.style.paddingLeft = '';
                        }
                    });

                    ticking = false;
                });
                ticking = true;
            }
        });
    }


    // ============================================
    //  LAZY BACKGROUNDS
    // ============================================
    function initLazyBackgrounds() {
        // Preload Google Fonts
        const fontsLink = document.querySelector('link[href*="fonts.googleapis.com"]');
        if (fontsLink) {
            // Fonts are already loaded via <link>
        }
    }


    // ============================================
    //  INTERSECTION OBSERVER FOR SECTION COUNTERS
    // ============================================
    // Add counter elements to the page if needed
    // Currently no counter elements exist in HTML, but the function is ready

})();