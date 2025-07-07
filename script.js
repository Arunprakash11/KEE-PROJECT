function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

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