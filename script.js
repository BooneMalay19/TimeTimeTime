function updateTimer() {
    const endTime = new Date('June 3, 2024 23:59:00').getTime();
    const now = new Date().getTime();
    const timeLeft = endTime - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        document.getElementById('timer').innerHTML = "Feliz aniversário amor";
        document.getElementById('redirectButton').style.display = 'block';
    } else {
        document.getElementById('timer').innerHTML = 
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}

setInterval(updateTimer, 1000);
