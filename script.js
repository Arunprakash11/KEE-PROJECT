/*type="application/ld+json">
{

    "@context": "https://schema.org",
    "@type": "Organization",
    "@url": "https://yourwebsite.com",
    "logo":
"https://yourwebsite.com/Logo/KEE LOGO.png",
    "name": "Kalyani E Enterprie"

}*/

function showAlert() {

    alert("Thank you for your interest! We'll share more info soon.");

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