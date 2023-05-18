window.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('backgroundMusic');
    let isPlaying = false;
  
    playButton.addEventListener('click', () => {
      if (isPlaying) {
        audio.pause();
        playButton.textContent = 'Play Music';
      } else {
        audio.play();
        playButton.textContent = 'Stop Music';
      }
      isPlaying = !isPlaying;
    });
  });
  