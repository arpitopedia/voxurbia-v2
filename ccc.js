/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
// Event delegation for menu link activation
document.getElementById('nav-menu').addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('nav__link')) {
        // Remove active class from all links
        document.querySelectorAll('.nav__link').forEach(link => link.classList.remove('active'));
        // Add active class to the clicked link
        e.target.classList.add('active');
        // Hide mobile menu
        document.getElementById('nav-menu').classList.remove('show');
    }
});
fetch('index1.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
    }),
});

showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// High-performance scroll reveal using IntersectionObserver API

// Utility function for adding animations
const revealElement = (element, animationClass, delay = 0, interval = 0) => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(animationClass);
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    observer.observe(element);
  };
  
  // Add animation classes on scroll
  document.addEventListener('DOMContentLoaded', () => {
    // Home section
    revealElement(document.querySelector('.home__title'), 'reveal-animation');
    revealElement(document.querySelector('.button'), 'reveal-animation', 200);
    revealElement(document.querySelector('.home__img'), 'reveal-animation', 400);
    document.querySelectorAll('.home__social-icon').forEach((icon, index) => {
      revealElement(icon, 'reveal-animation', 200 * index);
    });
  
    // About section
    revealElement(document.querySelector('.about__img'), 'reveal-animation');
    revealElement(document.querySelector('.about__subtitle'), 'reveal-animation', 400);
    revealElement(document.querySelector('.about__text'), 'reveal-animation', 400);
  
    // Skills section
    revealElement(document.querySelector('.skills__subtitle'), 'reveal-animation');
    revealElement(document.querySelector('.skills__text'), 'reveal-animation');
    document.querySelectorAll('.skills__data').forEach((data, index) => {
      revealElement(data, 'reveal-animation', 200 * index);
    });
    revealElement(document.querySelector('.skills__img'), 'reveal-animation', 600);
  
    // Work section
    document.querySelectorAll('.work__img').forEach((img, index) => {
      revealElement(img, 'reveal-animation', 200 * index);
    });
  
    // Contact section
    document.querySelectorAll('.contact__input').forEach((input, index) => {
      revealElement(input, 'reveal-animation', 200 * index);
    });
  });

// Lightbox functionality
// Add this to your existing JavaScript file
// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll when lightbox is open
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll when lightbox is closed
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this || e.target.classList.contains('close-lightbox')) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

// Prevent image click from closing lightbox
document.getElementById('lightbox-img').addEventListener('click', function(e) {
    e.stopPropagation();
});

// Scroll to top functionality
const scrollBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('active');
    } else {
        scrollBtn.classList.remove('active');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        products.forEach(product => {
            const tag = product.querySelector('.product-card__tag').textContent.toLowerCase();
            if (filter === 'all' || tag.includes(filter.toLowerCase())) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Add to your existing JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Timeline animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.5s ease-out';
        observer.observe(item);
    });
});
  