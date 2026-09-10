const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


const PUBLIC_KEY = "bUvduvtPUimJoT3qk";
const SERVICE_ID = "service_nwmohzr";
const TEMPLATE_ID = "template_ip172xu";


// Initialize EmailJS

emailjs.init({
    publicKey: PUBLIC_KEY
});

const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const formStatus = document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent page refresh
        event.preventDefault();


        // Change button while sending
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";

        formStatus.textContent = "";
        formStatus.className = "mt-3";


        // Send form using EmailJS
        emailjs.sendForm(
            SERVICE_ID,
            TEMPLATE_ID,
            contactForm
        )

        .then(function () {

            // Success message
            formStatus.textContent =
                "Thank you! Your message has been sent successfully.";

            formStatus.classList.add("text-success");


            // Clear form
            contactForm.reset();


            // Restore button
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);


            // Error message
            formStatus.textContent =
                "Sorry, something went wrong. Please try again later.";

            formStatus.classList.add("text-danger");


            // Restore button
            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        });

    });

}

//email service id: service_nwmohzr
//email template id: template_ip172xu
//public key: bUvduvtPUimJoT3qk