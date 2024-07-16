document.addEventListener('DOMContentLoaded', () => {
    const timer1Element = document.getElementById('timer1');
    const timer1CountdownElement = document.getElementById('timer1-countdown');
    const timer2Element = document.getElementById('timer2');
    const timer2CountdownElement = document.getElementById('timer2-countdown');
    const gameOverElement = document.getElementById('game-over');

    let timer1 = 10;
    let timer2 = 10;
    let timer1Interval;
    let timer2Interval;
    let activeTimer = 1; // 1 for Timer 1, 2 for Timer 2

    // Function to start Timer 1
    function startTimer1() {
        timer1 = 10;
        timer1Element.style.display = 'block'; // Ensure timer is visible
        timer1CountdownElement.textContent = timer1;
        timer1Interval = setInterval(() => {
            timer1--;
            timer1CountdownElement.textContent = timer1;
            if (timer1 === 0) {
                clearInterval(timer1Interval);
                displayGameOver();
            }
        }, 1000);
    }

    // Function to start Timer 2
    function startTimer2() {
        timer2 = 10;
        timer2Element.style.display = 'block'; // Ensure timer is visible
        timer2CountdownElement.textContent = timer2;
        timer2Interval = setInterval(() => {
            timer2--;
            timer2CountdownElement.textContent = timer2;
            if (timer2 === 0) {
                clearInterval(timer2Interval);
                displayGameOver();
            }
        }, 1000);
    }

    // Function to display "Game Over" message
    function displayGameOver() {
        gameOverElement.style.display = 'block';
    }

    // Function to reset timers
    function resetTimers() {
        clearInterval(timer1Interval);
        clearInterval(timer2Interval);
        timer1Element.style.display = 'none';
        timer2Element.style.display = 'none';
        gameOverElement.style.display = 'none';
        activeTimer = 1;
    }

    // Event listener for letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            if (activeTimer === 1) {
                startTimer1();
                clearInterval(timer2Interval);
                timer2Element.style.display = 'none';
                activeTimer = 2;
            } else if (activeTimer === 2) {
                startTimer2();
                clearInterval(timer1Interval);
                timer1Element.style.display = 'none';
                activeTimer = 1;
            }
        });
    });

    // Start initial timer
    startTimer1(); // Start with Timer 1
});
