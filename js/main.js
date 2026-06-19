const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
document.getElementById("joinForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email Address"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const ward = document.querySelector('input[placeholder="Area / Ward"]').value;

    const message =
`*NEW SIBANYE MEMBER REGISTRATION*

👤 Full Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone}

📍 Area / Ward: ${ward}

I support the registration of Sibanye (We Are One).`;

    const whatsappURL =
    `https://wa.me/27760262725?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});


// COUNTER FUNCTION
function animateCounter(id, target, duration) {
    const element = document.getElementById(id);
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;

        const progress = currentTime - startTime;
        const increment = Math.min(progress / duration, 1);

        element.textContent = Math.floor(increment * target);

        if (increment < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}


// TRIGGER WHEN SECTION IS VISIBLE
const counterSection = document.querySelector(".counter-section");

let hasAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateCounter("memberCount", 240, 1500);
        }
    });
}, {
    threshold: 0.5
});

observer.observe(counterSection);
