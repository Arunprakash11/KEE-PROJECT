/* function toggleMenu() {

    const nav = document.getElementById("navlinks");
    nav.classList.toggle("active");

    nav.classList.toggle("active");


  // Toggle ☰ and ✖
    if (nav.classList.contains("active")) {

        toggleBtn.textContent = "✖";
    } else {

        toggleBtn.textContent = "☰";

    }
}*/

function validateform() {

    const name = document.getElementById("name").Value.trim();

    const email = document.getElementById("email").Value.trim();
    
    const message = document.getElementById("message").Value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all feilds.");
        return false; // stop form submission
    }

    alert("Message Sent Successfully!");
    return true;
}


const items = document.querySelectorAll('.service-item, .customer');

function showOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    items.forEach(item => {
        const boxTop = item.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }
    })
}