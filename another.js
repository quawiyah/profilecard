function validateForm() {
    let isValid = true;
  
    // First Name Validation
    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.value.trim() === '') {
      firstNameError.style.display = 'block';
      isValid = false;
    } else {
      firstNameError.style.display = 'none';
    }
  
    // Last Name Validation
    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.value.trim() === '') {
      lastNameError.style.display = 'block';
      isValid = false;
    } else {
      lastNameError.style.display = 'none';
    }
  
    // Email Validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
      emailError.style.display = 'block';
      isValid = false;
    } else {
      emailError.style.display = 'none';
    }
  
    // Query Type Validation
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const queryTypeError = document.getElementById('queryTypeError');
    if (!queryType) {
      queryTypeError.style.display = 'block';
      isValid = false;
    } else {
      queryTypeError.style.display = 'none';
    }
  
    // Message Validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (message.value.trim() === '') {
      messageError.style.display = 'block';
      isValid = false;
    } else {
      messageError.style.display = 'none';
    }
  
    // Consent Validation
    const consent = document.getElementById('consent');
    const consentError = document.getElementById('consentError');
    if (!consent.checked) {
      consentError.style.display = 'block';
      isValid = false;
    } else {
      consentError.style.display = 'none';
    }

    return isValid;

    const button = document.getElementById("submit");
    button.addEventListener("click", function (e) {
        alert("Messae Sent! \nThanks for completing the form. We'll be in touch soon!");
        return;
        
    })
}
