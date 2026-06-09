const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document
.getElementById("joinForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you for joining Sibanye (We Are One).");
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
            animateCounter("memberCount", 15, 1500);
        }
    });
}, {
    threshold: 0.5
});

observer.observe(counterSection);