// let firstName = document.getElementById("fname");
// let lastName = document.getElementById("lname");
// let emaill = document.getElementById("email");
// let message = document.getElementById("text");
// let consents = document.getElementById("consent");
// let button = document.getElementById("submit");

// button.addEventListener("click", function (e) {
//     if(firstName = ""){
//         alert("This field is required");
//         return;
//     }
//     else{
//         alert("Submitted successfully");
//         return;
//     }
    
// })

// let ffname = ""
// firstName.addEventListener("input", function () {
//     if(ffname = " "){
//         alert("This field is required");
//         return;
//     }
// })



document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.getElementById('message');
  const consent = document.getElementById('consent');
  
  let valid = true;
  
  function showError(input, message) {
    const error = input.parentElement.querySelector('.error-message');
    error.innerText = message;
    error.style.display = 'block';
    valid = false;
  }
  
  function clearError(input) {
    const error = input.parentElement.querySelector('.error-message');
    error.style.display = 'none';
  }
  
  if (!firstName.value) {
    showError(firstName, 'This field is required');
  } else {
    clearError(firstName);
  }
  
  if (!lastName.value) {
    showError(lastName, 'This field is required');
  } else {
    clearError(lastName);
  }
  
  if (!email.value || !email.value.includes('@')) {
    showError(email, 'Please enter a valid email address');
  } else {
    clearError(email);
  }
  
  if (!queryType) {
    const queryError = document.querySelector('.radio-group').parentElement.querySelector('.error-message');
    queryError.style.display = 'block';
    valid = false;
  } else {
    const queryError = document.querySelector('.radio-group').parentElement.querySelector('.error-message');
    queryError.style.display = 'none';
  }
  
  if (!message.value) {
    showError(message, 'This field is required');
  } else {
    clearError(message);
  }
  
  if (!consent.checked) {
    showError(consent, 'To submit this form, please consent to being contacted');
  } else {
    clearError(consent);
  }
  
  if (valid) {
    alert('Form submitted successfully!');
    // Here you can handle form submission (e.g., send data to server)
  }
});