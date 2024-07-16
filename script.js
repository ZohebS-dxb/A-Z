document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
    let countdown = 5;
    let countdownTimer;

    // Function to start the countdown timer
    function startTimer() {
        countdown = 5;
        countdownElement.textContent = countdown;
        countdownTimer = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown === 0) {
                clearInterval(countdownTimer);
                messageElement.style.display = 'block'; // Show the message
            }
        }, 1000);
    }

    // Function to reset the timer and hide the message
    function resetTimer() {
        clearInterval(countdownTimer);
        startTimer();
        messageElement.style.display = 'none'; // Hide the message
    }

    // Event listener for letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('red')) {
                button.classList.add('red');
            } else {
                button.classList.remove('red');
            }
            resetTimer(); // Reset the timer on button click
            messageElement.style.display = 'none'; // Hide the message on button click
        });
    });

    // Start the initial timer
    startTimer();
});
