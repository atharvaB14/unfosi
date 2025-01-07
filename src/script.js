document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("open");
  });
});

// Form validation function
function validateForm(event) {
  // Prevent form submission until validation is complete
  event.preventDefault();

  // Get form field values
  const phone = document.getElementById("phone").value;
  const otp = document.getElementById("otp").value;

  // Regular expression for valid phone number format (Indian phone number as example)
  const phonePattern = /^[6-9]\d{9}$/;

  // Validate phone number
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  // Validate OTP
  if (otp.length !== 6) {
    alert("OTP must be exactly 6 characters.");
    return false;
  }

  // If validation passes, submit the form
  alert("Form submitted successfully!");
  document.getElementById("contactForm").submit();
  return true;
}
// Function to show a popup
function showPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.classList.add('show'); // Show the popup
  setTimeout(() => {
    popup.classList.remove('show'); // Hide the popup after 5 seconds
  }, 5000);
}
// Function to format phone number into 5-5 digit blocks
function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, ''); // Remove non-digit characters
  if (value.length > 5) {
    value = value.slice(0, 5) + ' ' + value.slice(5, 10); // Add space between 5th and 10th digit
  }
  input.value = value;
}

// Trigger pop-ups one after another with a gap between each
function showSequentialPopups() {
  let delay = 0;

  const popups = [
    'popup-maid', 
    'popup-insurance', 
    'popup-meals', 
    'popup-cook-complain',
    'popup-backup-cook', 
    'popup-free-trial', 
    'popup-weekly-plan', 
    'popup-affordable-groceries',
    'popup-home-rules', 
    'popup-quality-meals', 
    'popup-prepared-for-you',
    'popup-cook-sick-days', 
    'popup-wholesale-prices'
  ];

  popups.forEach((popupId, index) => {
    setTimeout(() => {
      showPopup(popupId);
    }, delay);
    delay += 6000; // Delay each popup by 6 seconds (5000ms for popup + 1000ms for transition)
  });
}

// Start showing pop-ups when the page loads
window.onload = () => {
  showSequentialPopups();
};
// Function to close the popup
function closePopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'none'; // Hide the popup
}

// Function to open the popup (optional for triggering)
function openPopup(popupId) {
  var popup = document.getElementById(popupId);
  popup.style.display = 'block'; // Show the popup
}

// Optionally, you can add code to open a specific popup on page load or based on user interaction
// Example: openPopup('popup-cook-complain');
