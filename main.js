let count = 0;

document.getElementById('coin').addEventListener('click', function() {
    count++;
    document.getElementById('counter').innerText = `Coins: ${count}`;

    const coin = document.getElementById('coin');
    coin.style.transform = 'scale(1.2) rotate(20deg)';
    setTimeout(() => {
        coin.style.transform = 'scale(1) rotate(0deg)';
    }, 100);
});
