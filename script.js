body {
    font-family: 'Verdana', sans-serif;
    background-image: url('background.jpg');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    color: red; /* Default text color is red */
}

#timer1, #timer2 {
    font-size: 8vw; /* Adjust the size based on viewport width */
    font-weight: bold;
    margin: 5vh 0; /* Vertical margin based on viewport height */
    color: yellow; /* Bright yellow color for timers */
}

#game-over {
    display: none;
    font-size: 8vw; /* Adjust the size based on viewport width */
    font-weight: bold;
    color: red;
    text-align: center;
}

.letter-button {
    font-size: 6vw; /* Adjust the size based on viewport width */
    font-weight: bold;
    margin: 1vw; /* Margin based on viewport width */
    padding: 2vh; /* Padding based on viewport height */
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    width: 10vw; /* Fixed width based on viewport width */
    height: 10vw; /* Fixed height based on viewport width to make it square */
    border-radius: 10px; /* Rounded corners */
}

.letter-button:hover {
    opacity: 0.8;
}
