// Automatically display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Contact form interaction
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get the user's name
        const name = document.getElementById("name").value;

        // Display confirmation message
        alert(
            "Thank you, " + name + "! Your message has been received."
        );

        // Clear the form
        contactForm.reset();

    });

}