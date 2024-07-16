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
    let gameInProgress = true;

    // Function to start Timer 1
    function startTimer1() {
        timer1Element.style.display = 'block'; // Show Timer 1
        timer1CountdownElement.textContent = timer1;
        timer1Interval = setInterval(() => {
            timer1--;
            timer1CountdownElement.textContent = timer1;
            if (timer1 === 0 && gameInProgress) {
                clearInterval(timer1Interval);
                displayGameOver();
            }
        }, 1000);
    }

    // Function to start Timer 2
    function startTimer2() {
        timer2Element.style.display = 'block'; // Show Timer 2
        timer2CountdownElement.textContent = timer2;
        timer2Interval = setInterval(() => {
            timer2--;
            timer2CountdownElement.textContent = timer2;
            if (timer2 === 0 && gameInProgress) {
                clearInterval(timer2Interval);
                displayGameOver();
            }
        }, 1000);
    }

    // Function to display "Game Over" message
    function displayGameOver() {
        gameInProgress = false;
        gameOverElement.style.display = 'block';
    }

    // Event listener for letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            if (gameInProgress) {
                if (timer1Element.style.display === 'none') {
                    startTimer1();
                } else {
                    startTimer2();
                }
            }
        });
    });
});
