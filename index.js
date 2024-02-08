const melodyImage = document.getElementById('melody');

if (melodyImage) {
  let down = false;
  setInterval(() => {
    melodyImage.style.transition = 'all 0.1s';
    melodyImage.style.transform = `translateY(${down ? '100px' : 0})`;
    down = !down;
  }, 100);
}
