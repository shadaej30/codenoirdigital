let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

    // Confirmation on form submit
    function confirmBooking(event) {
      const confirmed = confirm("Do you want to submit your booking request?");
      if (!confirmed) {
        event.preventDefault(); // Stop form from submitting
      }
    }

    // Live character count for project description
    function updateCharCount() {
      const desc = document.getElementById('description');
      const counter = document.getElementById('charCount');
      counter.textContent = desc.value.length + "/500";
    }

    // Setup listeners once page loads
    window.onload = function() {
      document.getElementById("bookingForm").addEventListener("submit", confirmBooking);
      document.getElementById("description").addEventListener("input", updateCharCount);
    };
