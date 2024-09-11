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

document.addEventListener("DOMContentLoaded", () => {
    // Custom cursor logic
    const cursor = document.querySelector(".custom-cursor");
    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });

    // Scroll-based animations (using Intersection Observer for better performance)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aos-animate");
            }
        });
    }, { threshold: 0.2 });

    // Hover effect for links and buttons
const hoverTargets = document.querySelectorAll('a, button, .btn, article, .togglecontainer');
hoverTargets.forEach(target => {
    target.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    target.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

    document.querySelectorAll("[data-aos]").forEach(section => {
        observer.observe(section);
    });

    // Particle generation
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particles-background');
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particleContainer.appendChild(particle);
    }
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

// Add interactivity to machinery cards
const machineryCards = document.querySelectorAll('.machinery-card');

machineryCards.forEach(card => {
    card.addEventListener('click', () => {
        const machineName = card.dataset.machine;
        alert(`Learn more about ${machineName}. Full specs coming soon!`);
    });
});


//Particle JS
// Initialize Particles.js with a more colorful and dynamic setup
particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 150,  // Increase the number of particles
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#f72585", "#7209b7", "#3a0ca3", "#4361ee", "#4cc9f0"]  // Bizarre colors
      },
      "shape": {
        "type": ["circle", "triangle", "polygon"],  // Multiple shapes
        "polygon": {
          "nb_sides": 6  // Polygon shape with 6 sides
        },
        "stroke": {
          "width": 2,
          "color": "#ffffff"
        }
      },
      "opacity": {
        "value": 0.9,
        "random": true
      },
      "size": {
        "value": 6,  // Bigger particle size for visual impact
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",  // Link particles with white lines
        "opacity": 0.6,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,  // Speed up the particles
        "direction": "none",
        "random": true,  // Randomize movement
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"  // Particles repulse when hovered
        },
        "onclick": {
          "enable": true,
          "mode": "push"  // Push particles when clicked
        }
      },
      "modes": {
        "repulse": {
          "distance": 150,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4  // Push 4 particles on click
        }
      }
    },
    "retina_detect": true
  });
  
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
document.addEventListener("DOMContentLoaded", () => {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;

            // Toggle the 'open' class to control expansion
            answer.classList.toggle('open');
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    // Light/Dark Mode Toggle
    const toggleContainer = document.querySelector(".togglecontainer");
    const sunLogo = document.querySelector(".sun-logo");
    const moonLogo = document.querySelector(".moon-logo");
    const body = document.querySelector("body");
    const circle = document.getElementById('transition-circle');

    // Load user's theme preference from localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        body.classList.add("light");
    }

    toggleContainer.addEventListener("click", () => {
        body.classList.toggle("light");

        // Save theme to localStorage
        const theme = body.classList.contains("light") ? "light" : "dark";
        localStorage.setItem("theme", theme);
    });

    // Chart.js Initialization
    const ctx = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
            datasets: [{
                label: 'Machines Deployed (in thousands)',
                data: [10, 30, 45, 60, 75, 100, 130, 180],
                backgroundColor: 'rgba(137, 220, 235, 0.5)',
                borderColor: 'rgba(137, 220, 235, 1)',
                borderWidth: 2,
                fill: true,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // FAQ Collapse/Expand
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        // Initially hide the answer
        answer.style.display = 'none';

        question.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
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

// Basic chatbot functionality
const chatHistory = document.getElementById('chat-history');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', () => {
    const userMessage = chatInput.value;
    addMessage('user', userMessage);

    // Simulated chatbot response
    setTimeout(() => {
        addMessage('bot', 'Let me check that for you...');
    }, 1000);
});

function addMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatHistory.appendChild(messageDiv);
    chatInput.value = '';
}

// AOS initialization
AOS.init({
    duration: 800,
    once: false
});
