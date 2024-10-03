const emailInput = document.querySelector(".email");
const emailError = document.querySelector(".error");

// Success function
function showSuccess(input) {
    input.classList.remove('input-error');
    input.classList.add('success');
    emailError.style.display = "none";
}

// Error function
function showError(input, message) {
    input.classList.remove('success');
    input.classList.add('input-error');
    emailError.textContent = message;
    emailError.style.display = 'block';
}

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Event listener for form submission
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();  // Prevent form from submitting
    const emailValue = emailInput.value.trim();

    // Check if email is valid
    if (validateEmail(emailValue)) {
        showSuccess(emailInput);
    } else {
        showError(emailInput, "Please enter a valid email address.");
    }
});
