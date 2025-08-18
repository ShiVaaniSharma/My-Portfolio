    
     document.addEventListener('DOMContentLoaded', () => {

    // ======================= FORM RESET SCRIPT =======================
    const contactForm = document.getElementById('contact-form');
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            document.getElementById("contact").reset(); // clear when going back
        }
    });

    // ======================= RESPONSIVE HEADER & BODY SCROLL LOCK =======================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');
    const body = document.body;

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
        body.classList.toggle('noscroll');

        document.querySelectorAll('.nav-links li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                body.classList.remove('noscroll');
                document.querySelectorAll('.nav-links li').forEach(linkItem => linkItem.style.animation = '');
            }
        });
    });

    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }`;
    document.head.appendChild(style);


    // ======================= HEADER SCROLL EFFECT =======================
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // ======================= MAGNETIC BUTTON EFFECT =======================
    const magneticButtons = document.querySelectorAll('.magnetic-button');

    magneticButtons.forEach(button => {
        const span = button.querySelector('span');
        
        button.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY } = e;
            const { clientWidth, clientHeight } = button;
            
            const x = (offsetX / clientWidth) * 40 - 20; 
            const y = (offsetY / clientHeight) * 40 - 20; 
            
            gsap.to(span, {
                x: x,
                y: y,
                duration: 0.5,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(span, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

});



      // --- 4. BACK TO TOP BUTTON LOGIC ---
            const backToTopBtn = document.getElementById('back-to-top-btn');
            window.addEventListener('scroll', () => {
                backToTopBtn.classList.toggle('visible', window.scrollY > 300);
            });








   
 


  document.getElementById("year").textContent = new Date().getFullYear();







