body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
}

.container {
    width: 100%;
    padding: 10px;
}

.letter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 10px;
}

.letter-button {
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

.letter-button.red {
    background-color: red;
}
