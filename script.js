document.addEventListener("DOMContentLoaded", () => {
    const teamMembers = document.querySelectorAll(".team-member");
    const modal = document.getElementById("team-modal");
    const closeBtn = modal.querySelector(".close");

    // Modal content elements
    const modalName = document.getElementById("modal-name");
    const modalTitle = document.getElementById("modal-title");
    const modalBio = document.getElementById("modal-bio");
    const modalSkills = document.getElementById("modal-skills");

    // Function to open modal and update content
    const openModal = (name, title, bio, skills) => {
        modalName.textContent = name;
        modalTitle.textContent = title;
        modalBio.textContent = bio;
        modalSkills.textContent = skills;
        modal.classList.add("active");
        modal.style.opacity = "1";
    };

    // Add click event listeners to each team member
    teamMembers.forEach(member => {
        member.addEventListener("click", () => {
            const name = member.getAttribute("data-name");
            const title = member.getAttribute("data-title");
            const bio = member.getAttribute("data-bio");
            const skills = member.getAttribute("data-skills");

            openModal(name, title, bio, skills);
        });
    });

    // Close the modal on 'x' click
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        modal.style.opacity = "0";
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener("click", event => {
        if (event.target === modal) {
            modal.classList.remove("active");
            modal.style.opacity = "0";
        }
    });
});

//Loader
window.addEventListener("load", () => {
    const loader = document.getElementById('page-loader');
    loader.classList.add('hidden');
});

//FAB
// Show/Hide FAB based on scroll position
const fab = document.getElementById('fab');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        fab.classList.add('show');
    } else {
        fab.classList.remove('show');
    }
});

// Scroll to top when FAB is clicked
fab.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Hover effect for links and buttons
const hoverTargets = document.querySelectorAll('a, button, .btn');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// Particle trail following the cursor
const particleTrail = [];

document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    // Fade and remove particles after a delay
    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Particle styling
const style = document.createElement('style');
style.innerHTML = `
    .particle {
        position: fixed;
        width: 10px;
        height: 10px;
        background-color: var(--accent-clr);
        border-radius: 50%;
        pointer-events: none;
        animation: particle-fade 1s ease forwards;
    }

    @keyframes particle-fade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(style);


// Smooth section transitions on scroll
const sections = document.querySelectorAll('.section-transition');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});


//Particle JS
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#1e66f5"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
        },
        "opacity": {
            "value": 0.9
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#f9e2af",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});

// 3D Model Viewer for Machinery
let scene, camera, renderer, model;

function init3DViewer() {
    const container = document.getElementById('3d-model-viewer');

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0x404040);
    scene.add(light);

    // Load the 3D model
    const loader = new THREE.GLTFLoader();
    loader.load('path_to_3d_model/machine.gltf', function (gltf) {
        model = gltf.scene;
        scene.add(model);
        model.rotation.y = Math.PI; // Adjust orientation if needed
        animate();
    });

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    model.rotation.y += 0.01; // Slow rotation for effect
    renderer.render(scene, camera);
}

init3DViewer();


// Character modal popup
const characterCards = document.querySelectorAll('.character-card');
const modal = document.getElementById('character-modal');
const modalName = document.getElementById('modal-name');
const modalBio = document.getElementById('modal-bio');
const closeModal = document.querySelector('.close');

characterCards.forEach(card => {
    card.addEventListener('click', () => {
        modalName.textContent = card.getAttribute('data-name');
        modalBio.textContent = card.getAttribute('data-bio');
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// FAQ Collapse/Expand
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const toggleContainer = document.querySelector(".togglecontainer");
    const sunLogo = document.querySelector(".sun-logo");
    const moonLogo = document.querySelector(".moon-logo");
    const body = document.querySelector("body");
    const circle = document.getElementById('transition-circle');

    // Load the user's preference from local storage
    const isLightMode = localStorage.getItem("lightMode") === "true";
    
    // Set the theme based on stored preference without triggering animation
    if (isLightMode) {
        body.classList.add("light");
        sunLogo.classList.add("animate-sun");
        moonLogo.classList.add("animate-moon");
        circle.style.transform = "scale(0)"; // Prevent initial animation
    }

    toggleContainer.addEventListener("click", () => {
        // Get button position
        const buttonRect = toggleContainer.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;

        // Set circle's position based on button
        circle.style.top = `${buttonCenterY}px`;
        circle.style.left = `${buttonCenterX}px`;

        // Trigger the dark mode transition
        if (circle.style.transform === "scale(1)") {
            // If already scaled, retract
            circle.style.transform = "scale(0)";
        } else {
            // Expand the circle
            circle.style.transform = "scale(1)";
        }

        // Toggle the light mode after the transition starts
        setTimeout(() => {
            sunLogo.classList.toggle("animate-sun");
            moonLogo.classList.toggle("animate-moon");
            body.classList.toggle("light");
            localStorage.setItem("lightMode", !isLightMode);
        }, 200);
    });
});
const themeToggle = document.querySelector('.togglecontainer');
const transitionCircle = document.querySelector('#transition-circle');

themeToggle.addEventListener('click', () => {
    transitionCircle.classList.add('animate');
    setTimeout(() => {
      transitionCircle.classList.remove('animate');
      // change the theme here
    }, 500); // adjust the timeout to match the animation duration
  });

// Set the current year in the footer
const date = document.getElementById('date');
const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    date.textContent = currentYear;
};
setCurrentYear();

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const socials = document.querySelector('.social-nav');
const navLinks = document.querySelectorAll('.nav-links');

const toggleMobileMenu = () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
    socials.classList.toggle('open');
    document.body.classList.toggle('open');
};

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu));
hamburger.addEventListener('click', toggleMobileMenu);


// Initialize AOS (Animate on Scroll) library
AOS.init();