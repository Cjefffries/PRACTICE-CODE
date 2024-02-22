document.getElementById('loveButton').addEventListener('click', function() {
    var loveLetter = document.getElementById('loveLetter');
    loveLetter.classList.toggle('visible');
    loveLetter.classList.toggle('hidden');
    loveLetter.style.animation = 'slideIn 0.5s forwards';
});
    const audio = document.getElementById('myAudio');
    const loveButton = document.getElementById('loveButton');

loveButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }

  });