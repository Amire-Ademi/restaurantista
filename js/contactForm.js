// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    /*// Clear previous error messages
    clearErrors();
*/
    // Get form field values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.querySelector('textarea[name="message"]').value;

    let valid = true;

    // Validate Name
    if (!name) {
      valid = false;
      document.getElementById("name-error").textContent = "Name is required.";
    }

    // Validate Email
    if (!email) {
      valid = false;
      document.getElementById("email-error").textContent = "Email is required.";
    } else if (!validateEmail(email)) {
      valid = false;
      document.getElementById("email-error").textContent =
        "Please enter a valid email.";
    }

    // Validate Subject
    if (!subject) {
      valid = false;
      document.getElementById("subject-error").textContent =
        "Subject is required.";
    }

    // Validate Message
    if (!message) {
      valid = false;
      // No specific error span for message (as it's a textarea, you might want to add one)
      Toastify({
        text: "Message is required.",
        backgroundColor: "red",
        duration: 3000,
        gravity: "top",
        position: "center",
      }).showToast();
    }

    // If form is valid, show a success toast
    if (valid) {
      Toastify({
        text: "Message sent successfully!",
        backgroundColor: "green",
        duration: 3000,
        gravity: "top",
        position: "center",
      }).showToast();

      // Optionally clear the form here
      form.reset();
    }
  });

  /*// Clear error messages
  function clearErrors() {
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("subject-error").textContent = "";
  }
*/
  // Email validation function
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
});
