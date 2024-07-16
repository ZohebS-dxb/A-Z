document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.letter-button').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('red');
        });
    });
});
