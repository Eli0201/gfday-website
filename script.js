const letterPanel = document.getElementById('letterPanel');
const giftPanel = document.getElementById('giftPanel');

document.getElementById('openLetter').addEventListener('click', () => {
  letterPanel.classList.remove('hidden');
});

function closeLetter() {
  letterPanel.classList.add('hidden');
}

document.getElementById('openGift').addEventListener('click', () => {
  giftPanel.classList.remove('hidden');
  launchConfetti();
});

function closeGift() {
  giftPanel.classList.add('hidden');
}

function launchConfetti() {
  const confetti = document.getElementById('confetti');
  const ctx = confetti.getContext('2d');
  confetti.width = window.innerWidth;
  confetti.height = window.innerHeight;

  const pieces = Array.from({ length: 150 }, () => ({
    x: Math.random() * confetti.width,
    y: Math.random() * confetti.height - confetti.height,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 100%, 75%)`,
    speed: Math.random() * 3 + 2
  }));

  function update() {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
    pieces.forEach(p => {
      p.y += p.speed;
      if (p.y > confetti.height) p.y = -p.size;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, 2 * Math.PI);
      ctx.fill();
    });
    requestAnimationFrame(update);
  }

  update();
  setTimeout(() => {
    ctx.clearRect(0, 0, confetti.width, confetti.height);
  }, 5000);
}
