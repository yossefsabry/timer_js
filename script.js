function startTimer() {
  var timeInput = document.getElementById("timeInput").value;
  var timerElement = document.getElementById("timer");

  // Check if the input is a valid number
  if (isNaN(timeInput)) {
    timerElement.innerHTML = "Invalid input. Please enter a number.";
    return;
  }

  var timeInMinutes = parseInt(timeInput);
  var seconds = timeInMinutes;

  // Update the timer every second
  var timerInterval = setInterval(function() {
    if (seconds <= 0) {
      clearInterval(timerInterval);
      timerElement.innerHTML = "Timer has ended!";
    } else {
      var hours = Math.floor(seconds / 3600);
      var minutes = Math.floor((seconds % 3600) / 60);
      var remainingSeconds = seconds % 60;
      
      // Formatting the timer display
      var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" 
                        + (minutes < 10 ? "0" + minutes : minutes) + ":" 
                        + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);

      timerElement.innerHTML = formattedTime;
      seconds--;
    }
  }, 1000);
}
