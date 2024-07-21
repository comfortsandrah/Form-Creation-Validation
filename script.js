// Wrap your entire script in a DOMContentLoaded event listener. This ensures your JavaScript runs after the entire HTML document has been loaded.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username")
        const emailInput = document.getElementById("email")
        const passwordInput = document.getElementById("password")

        const username = usernameInput.value.trim()
        const email = emailInput.value.trim()
        const password = passwordInput.value.trim()

        let isValid = true;
        const messages = [];

        // username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Invalid username!!");
        }

        // Check if email includes both ‘@’ and ‘.’ characters. If not, set isValid to false and append a corresponding error message to messages.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Invalid email!!");
        }

        //password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Invalid password!!");
        }
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "Registration successful!";

        } else {
            messages.join("<br>");
            feedbackDiv.innerHTML = messages;
            feedbackDiv.style.color = "#dc3545";
        }
        form.submit();
    })
});
