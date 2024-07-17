document.addEventListener('DOMContentLoaded', () => {
    const timer1Element = document.getElementById('timer1');
    const timer1CountdownElement = document.getElementById('timer1-countdown');
    const timer2Element = document.getElementById('timer2');
    const timer2CountdownElement = document.getElementById('timer2-countdown');
    const gameOverElement = document.getElementById('game-over');
    let gameOverMessage = '';

    let timer1 = 90;
    let timer2 = 90;
    let timer1Interval;
    let timer2Interval;
    let activeTimer = 1; // 1 for Timer 1, 2 for Timer 2
    let gameInProgress = true;

    const gameOverSound = document.getElementById('gamesound');

    // Function to start Timer 1
    function startTimer1() {
        clearInterval(timer2Interval); // Pause Timer 2
        timer2Element.style.display = 'none'; // Hide Timer 2
        timer1Element.style.display = 'block'; // Show Timer 1
        timer1CountdownElement.textContent = timer1;
        timer1Interval = setInterval(() => {
            timer1--;
            timer1CountdownElement.textContent = timer1;
            if (timer1 === 0) {
                clearInterval(timer1Interval);
                gameOverMessage = 'Player 2 wins';
                displayGameOver();
            }
        }, 1000);
    }

    // Function to start Timer 2
    function startTimer2() {
        clearInterval(timer1Interval); // Pause Timer 1
        timer1Element.style.display = 'none'; // Hide Timer 1
        timer2Element.style.display = 'block'; // Show Timer 2
        timer2CountdownElement.textContent = timer2;
        timer2Interval = setInterval(() => {
            timer2--;
            timer2CountdownElement.textContent = timer2;
            if (timer2 === 0) {
                clearInterval(timer2Interval);
                gameOverMessage = 'Player 1 wins';
                displayGameOver();
            }
        }, 1000);
    }

    // Function to display "Game Over" message
   /* function displayGameOver() {
        gameInProgress = false;
        gameOverElement.style.display = 'block';
        gameOverElement.textContent = gameOverMessage;
        //gameOverSound.play();
       // gameOverSound.play().catch(error => {
//console.log('Failed to play the sound:', error);
         console.log('Game over:', gameOverMessage); // Debugging message
        gameOverSound.play().then(() => {
            console.log('Sound played successfully'); // Debugging message
        }).catch(error => {
            console.log('Failed to play the sound:', error);
        });
        });
        }*/

     function displayGameOver() {
        gameInProgress = false;
        gameOverElement.style.display = 'block';
        gameOverElement.textContent = gameOverMessage;
        console.log('Game over:', gameOverMessage); // Debugging message
        gameOverSound.play().then(() => {
            console.log('Sound played successfully'); // Debugging message
        }).catch(error => {
            console.log('Failed to play the sound:', error);
        });
    }

    // Function to toggle letter color
    function toggleLetterColor(button) {
        if (button.style.backgroundColor === 'green') {
            button.style.backgroundColor = 'red';
        } else {
            button.style.backgroundColor = 'green';
        }
    }

    // Event listener for letter buttons
    document.querySelectorAll('.letter-button').forEach(button => {
        button.style.backgroundColor = 'green';
        button.addEventListener('click', () => {
            if (gameInProgress) {
                toggleLetterColor(button);
                if (activeTimer === 1) {
                    startTimer1();
                    activeTimer = 2;
                } else if (activeTimer === 2) {
                    startTimer2();
                    activeTimer = 1;
                }
            }
        }, { once: true });
    });
});
