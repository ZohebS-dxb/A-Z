document.addEventListener('DOMContentLoaded', () => {
    const preCountdownElement = document.getElementById('pre-countdown');
    const postCountdownElement = document.getElementById('post-countdown');
    const preTimerElement = document.getElementById('pre-timer');
    const postTimerElement = document.getElementById('post-timer');
    const messageElement = document.getElementById('message');

    let preCountdown = 10;
    let postCountdown = 10;
    let preCountdownTimer;
    let postCountdownTimer;

    // Function to start the pre-game countdown timer
    function startPreTimer() {
        preCountdown = 10;
        preCountdownElement.textContent = preCountdown;
        preCountdownTimer = setInterval(() => {
            preCountdown--;
            preCountdownElement.textContent = preCountdown;
            if (preCountdown === 0) {
                clearInterval(preCountdownTimer);
                preTimerElement.style.display = 'none';
                startPostTimer();
            }
        }, 1000);
    }

    // Function to start the post-game countdown timer
    function startPostTimer() {
        postCountdown = 10;
        postCountdownElement.textContent = postCountdown;
        postCountdownTimer = setInterval(() => {
            postCountdown--;
            postCountdownElement.textContent = postCountdown;
            if (postCountdown === 0) {
                clearInterval(postCountdownTimer);
                postTimerElement.style.display = 'none';
                messageElement.style.display = 'block';
            }
        }, 1000);
    }

    // Function to reset timers
    function resetTimers() {
        clearInterval(preCountdownTimer);
        clearInterval(postCountdownTimer);
        startPreTimer();
        startPostTimer();
        messageElement.style.display = 'none';
    }

    // Event listener for letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            if (!button.classList.contains('red')) {
                button.classList.add('red');
            } else {
                button.classList.remove('red');
            }
            resetTimers(); // Reset timers on button click
        });
    });

    // Start the initial timers
    startPreTimer();
});
