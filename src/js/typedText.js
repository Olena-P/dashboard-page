const typed = new Typed('#typed-text', {
  strings: ['Hello Evano'],
  typeSpeed: 100,
  backSpeed: 0,
  showCursor: false,
  onComplete: function () {
    const waveEmoji = document.getElementById('wave-emoji');
    waveEmoji.classList.add('animate');

    setTimeout(() => {
      const comma = document.createElement('span');
      comma.textContent = ',';
      waveEmoji.parentNode.insertBefore(comma, waveEmoji.nextSibling);
    }, 500);
  },
});
