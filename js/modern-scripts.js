/**
 * Modern Scripts for Helium Balloons Kuwait
 * Professional, SEO-optimized, and user-friendly
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all components
    initLoadingSpinner();
    initAOS();
    initHeroSlider();
    initSmoothScrolling();
    initNavbarEffects();
    initFormValidation();
    initLazyLoading();
    initPerformanceOptimizations();
    
    console.log('🚀 Helium Balloons Kuwait - Website Loaded Successfully!');
});

/**
 * Loading Spinner Management
 */
function initLoadingSpinner() {
    const loadingSpinner = document.getElementById('loading-spinner');
    
    if (loadingSpinner) {
        // Hide spinner after page loads
        window.addEventListener('load', function() {
            setTimeout(() => {
                loadingSpinner.classList.add('hidden');
                setTimeout(() => {
                    loadingSpinner.style.display = 'none';
                }, 500);
            }, 1000);
        });
        
        // Hide spinner if page takes too long
        setTimeout(() => {
            if (loadingSpinner && !loadingSpinner.classList.contains('hidden')) {
                loadingSpinner.classList.add('hidden');
                setTimeout(() => {
                    loadingSpinner.style.display = 'none';
                }, 500);
            }
        }, 5000);
    }
}

/**
 * Initialize AOS (Animate On Scroll)
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 100,
            delay: 0
        });
    }
}

/**
 * Hero Slider Functionality
 */
function initHeroSlider() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.querySelector('.hero-nav-btn.prev');
    const nextBtn = document.querySelector('.hero-nav-btn.next');
    
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        
        // Hide all slides except first
        heroSlides.forEach((slide, index) => {
            if (index !== 0) {
                slide.style.display = 'none';
            }
        });
        
        function showSlide(index) {
            heroSlides.forEach(slide => slide.style.display = 'none');
            heroSlides[index].style.display = 'flex';
            currentSlide = index;
        }
        
        function nextSlide() {
            const next = (currentSlide + 1) % heroSlides.length;
            showSlide(next);
        }
        
        function prevSlide() {
            const prev = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
            showSlide(prev);
        }
        
        // Event listeners for navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        
        // Auto-slide every 5 seconds
        setInterval(nextSlide, 5000);
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
            }
        });
    }
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Navbar Effects and Sticky Behavior
 */
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbar) {
        // Add shadow on scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.classList.remove('shadow');
                navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                navbar.style.backdropFilter = 'none';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbar.contains(e.target) && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        });
    }
}

/**
 * Form Validation
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous errors
    clearFieldError(field);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'هذا الحقل مطلوب';
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'يرجى إدخال بريد إلكتروني صحيح';
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'يرجى إدخال رقم هاتف صحيح';
        }
    }
    
    // Show error if invalid
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-danger small mt-1';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(field) {
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.remove();
    }
}

/**
 * Lazy Loading for Images
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

/**
 * Performance Optimizations
 */
function initPerformanceOptimizations() {
    // Preload critical resources
    const criticalResources = [
        'uploads/ballon_1.jpg',
        'uploads/ballon_2.jpg',
        'uploads/ballon_3.jpg'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
    });
    
    // Service Worker registration (if available)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    console.log('ServiceWorker registration successful');
                })
                .catch(function(err) {
                    console.log('ServiceWorker registration failed');
                });
        });
    }
}

/**
 * WhatsApp Integration
 */
function initWhatsAppIntegration() {
    const whatsappButtons = document.querySelectorAll('.whatsapp-float, a[href*="whatsapp"]');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Track WhatsApp clicks for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': 'whatsapp_contact'
                });
            }
        });
    });
}

/**
 * Analytics and Tracking
 */
function initAnalytics() {
    // Track page views
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_title': document.title,
            'page_location': window.location.href
        });
    }
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Track scroll milestones
            if (maxScroll >= 25 && maxScroll < 50) {
                trackEvent('scroll', '25%');
            } else if (maxScroll >= 50 && maxScroll < 75) {
                trackEvent('scroll', '50%');
            } else if (maxScroll >= 75 && maxScroll < 100) {
                trackEvent('scroll', '75%');
            } else if (maxScroll >= 100) {
                trackEvent('scroll', '100%');
            }
        }
    });
    
    // Track time on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        trackEvent('engagement', 'time_on_page', timeOnPage);
    });
}

function trackEvent(action, label, value) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': 'engagement',
            'event_label': label,
            'value': value
        });
    }
}

/**
 * SEO Optimizations
 */
function initSEOOptimizations() {
    // Add structured data for breadcrumbs
    const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": window.location.origin
            }
        ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbData);
    document.head.appendChild(script);
    
    // Add meta description if not present
    if (!document.querySelector('meta[name="description"]')) {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = 'أفضل خدمات بالونات الهيليوم في الكويت لحفلات الزفاف، أعياد الميلاد، والمناسبات الخاصة';
        document.head.appendChild(meta);
    }
}

/**
 * Error Handling
 */
function initErrorHandling() {
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Global error:', e.error);
        
        // Send error to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                'description': e.error.message,
                'fatal': false
            });
        }
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        
        // Send error to analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'exception', {
                'description': e.reason,
                'fatal': false
            });
        }
    });
}

/**
 * Accessibility Improvements
 */
function initAccessibility() {
    // Add skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link sr-only sr-only-focusable';
    skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('.hero-section');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Improve focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    initWhatsAppIntegration();
    initAnalytics();
    initSEOOptimizations();
    initErrorHandling();
    initAccessibility();
});

// Export functions for potential use in other scripts
window.HeliumBalloons = {
    trackEvent,
    validateForm,
    showFieldError,
    clearFieldError
}; 