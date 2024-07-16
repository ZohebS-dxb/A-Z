document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
    let countdown = 7;
    let countdownTimer;

    // Function to start the countdown timer
    function startTimer() {
        countdown = 7;
        countdownElement.textContent = countdown;
        countdownTimer = setInterval(() => {
            countdown--;
            countdownElement.textContent = countdown;
            if (countdown === 0) {
                clearInterval(countdownTimer);
                messageElement.textContent = "Player Out";
            }
        }, 1000);
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(countdownTimer);
        startTimer();
    }

    // Event listener for letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('green');
            resetTimer();
        });
    });

    // Start the initial timer
    startTimer();
});
