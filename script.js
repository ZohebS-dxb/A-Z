document.addEventListener('DOMContentLoaded', () => {
    const countdownElement1 = document.getElementById('countdown1');
    const countdownElement2 = document.getElementById('countdown2');
    const gameOverMessage = document.getElementById('game-over-message');
    const letterButtons = document.querySelectorAll('.letter-button');

    let countdown1 = 20;
    let countdown2 = 20;
    let countdownTimer1;
    let countdownTimer2;
    let activePlayer = 1; // Track which player's turn it is (1 for Player 1, 2 for Player 2)

    // Function to start Player 1's timer
    function startTimer1() {
        countdown1 = 20;
        countdownElement1.textContent = countdown1;
        countdownTimer1 = setInterval(() => {
            countdown1--;
            countdownElement1.textContent = countdown1;
            if (countdown1 === 0) {
                clearInterval(countdownTimer1);
                gameOver();
            }
        }, 1000);
    }

    // Function to start Player 2's timer
    function startTimer2() {
        countdown2 = 20;
        countdownElement2.textContent = countdown2;
        countdownTimer2 = setInterval(() => {
            countdown2--;
            countdownElement2.textContent = countdown2;
            if (countdown2 === 0) {
                clearInterval(countdownTimer2);
                gameOver();
            }
        }, 1000);
    }

    // Function to reset and switch timers between players
    function switchPlayer() {
        if (activePlayer === 1) {
            clearInterval(countdownTimer1);
            startTimer2();
            activePlayer = 2;
        } else {
            clearInterval(countdownTimer2);
            startTimer1();
            activePlayer = 1;
        }
    }

    // Function to handle game over condition
    function gameOver() {
        gameOverMessage.style.display = 'block'; // Display game over message
        letterButtons.forEach(button => {
            button.removeEventListener('click', handleLetterClick); // Disable letter button clicks
        });
    }

    // Event listener for letter buttons
    function handleLetterClick() {
        const button = this;
        if (!button.classList.contains('red')) {
            button.classList.add('red');
            if (activePlayer === 1) {
                startTimer1();
            } else {
                startTimer2();
            }
        } else {
            button.classList.remove('red');
        }
        switchPlayer(); // Switch to the other player's turn
    }

    letterButtons.forEach(button => {
        button.addEventListener('click', handleLetterClick);
    });
});
