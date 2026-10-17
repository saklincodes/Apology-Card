// Project: Apology Card
// Author: saklincodes

// Screen Elements
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3');
const screenSad = document.getElementById('screen-sad');
const screenSuperSad = document.getElementById('screen-super-sad');

const decor1 = document.getElementById('decor-screen-1');
const decor2 = document.getElementById('decor-screen-2');
const decor3 = document.getElementById('decor-screen-3');
const decorSad = document.getElementById('decor-screen-sad');
const decorSuperSad = document.getElementById('decor-screen-super-sad');

// Buttons & Interactive Elements
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const btnIdk = document.getElementById('btn-idk');
const btnForgiveFinal = document.getElementById('btn-forgive-final');
const btnSadForgive = document.getElementById('btn-sad-forgive');
const btnSadMad = document.getElementById('btn-sad-mad');
const btnSuperForgive = document.getElementById('btn-super-forgive');
const btnSuperMad = document.getElementById('btn-super-mad');
const btnInfiniteLove = document.getElementById('btn-infinite-love');
const loveRainContainer = document.getElementById('love-rain');

// Transition: Screen 1 -> Screen 2 (Forgive path)
btnNo.addEventListener('click', () => {
  decor1.classList.add('hidden');
  decor2.classList.remove('hidden');
  document.body.classList.remove('screen-3-mode', 'screen-sad-mode', 'screen-super-sad-mode');
  document.body.classList.add('screen-2-mode');

  screen1.classList.remove('active');
  screen1.classList.add('hidden');

  screen2.classList.remove('hidden');
  screen2.classList.add('active');
});

// Transition: Screen 1 -> Screen Sad (Still mad path)
btnYes.addEventListener('click', () => {
  decor1.classList.add('hidden');
  decorSad.classList.remove('hidden');
  document.body.classList.remove('screen-2-mode', 'screen-3-mode', 'screen-super-sad-mode');
  document.body.classList.add('screen-sad-mode');

  screen1.classList.remove('active');
  screen1.classList.add('hidden');

  screenSad.classList.remove('hidden');
  screenSad.classList.add('active');
});

// Transition: Screen 2 -> Screen 1 (Return back)
btnIdk.addEventListener('click', () => {
  decor2.classList.add('hidden');
  decor1.classList.remove('hidden');
  document.body.classList.remove('screen-2-mode');

  screen2.classList.remove('active');
  screen2.classList.add('hidden');

  screen1.classList.remove('hidden');
  screen1.classList.add('active');
});

// Transition: Screen 2 -> Screen 3 (Celebration Climax)
btnForgiveFinal.addEventListener('click', () => {
  decor2.classList.add('hidden');
  decor3.classList.remove('hidden');
  document.body.classList.remove('screen-2-mode');
  document.body.classList.add('screen-3-mode');

  screen2.classList.remove('active');
  screen2.classList.add('hidden');

  screen3.classList.remove('hidden');
  screen3.classList.add('active');
});

// Transition: Screen Sad -> Screen 3 (Celebration Climax)
btnSadForgive.addEventListener('click', () => {
  decorSad.classList.add('hidden');
  decor3.classList.remove('hidden');
  document.body.classList.remove('screen-sad-mode');
  document.body.classList.add('screen-3-mode');

  screenSad.classList.remove('active');
  screenSad.classList.add('hidden');

  screen3.classList.remove('hidden');
  screen3.classList.add('active');
});

// Transition: Screen Sad -> Screen Super Sad (Refused again: "jodi abar no kore")
btnSadMad.addEventListener('click', () => {
  decorSad.classList.add('hidden');
  decorSuperSad.classList.remove('hidden');
  document.body.classList.remove('screen-sad-mode');
  document.body.classList.add('screen-super-sad-mode');

  screenSad.classList.remove('active');
  screenSad.classList.add('hidden');

  screenSuperSad.classList.remove('hidden');
  screenSuperSad.classList.add('active');
});

// Screen Super Sad: Playful Dodging with extreme emotional pleading
const phrasesSuper = [
  "Look at my tears! 🌊😭",
  "I'll do all your chores! 🧹🥺",
  "Free snacks & ice cream! 🍦💖",
  "I'm on my knees! 🙇‍♂️💔",
  "Have mercy please! 🥺",
  "Say yes please! 😭❤️"
];
let countSuper = 0;

function dodgeSuperMad() {
  countSuper++;
  btnSuperMad.textContent = phrasesSuper[countSuper % phrasesSuper.length];
  const x = (Math.random() - 0.5) * 170;
  const y = (Math.random() - 0.5) * 130;
  btnSuperMad.style.transform = `translate(${x}px, ${y}px)`;
  const scale = Math.min(1.4, 1 + countSuper * 0.08);
  btnSuperForgive.style.transform = `scale(${scale})`;
}

btnSuperMad.addEventListener('mouseenter', dodgeSuperMad);
btnSuperMad.addEventListener('click', dodgeSuperMad);
btnSuperMad.addEventListener('touchstart', (e) => { e.preventDefault(); dodgeSuperMad(); });

// Transition: Screen Super Sad -> Screen 3 (Celebration Climax)
btnSuperForgive.addEventListener('click', () => {
  decorSuperSad.classList.add('hidden');
  decor3.classList.remove('hidden');
  document.body.classList.remove('screen-super-sad-mode');
  document.body.classList.add('screen-3-mode');

  screenSuperSad.classList.remove('active');
  screenSuperSad.classList.add('hidden');

  screen3.classList.remove('hidden');
  screen3.classList.add('active');
});

// Screen 3: "Love You to Infinity" Rain Shower Effect
const loveWords = [
  "i love you ❤️",
  "love you ∞",
  "forever yours 💖",
  "ilysm 💕",
  "i love you so much 🥰",
  "my whole world 🌎✨",
  "always & forever 💖",
  "love you unconditionally 🥺❤️",
  "never letting you go 💕",
  "you & me forever ∞",
  "i love you 💖",
  "cutie pie 🥰",
  "my heart is yours ❤️"
];

const loveColors = ["#e63963", "#c9184a", "#ff758f", "#f4a261", "#d62828", "#ff4d6d"];

function triggerLoveRain() {
  if (!loveRainContainer) return;
  // Spawn flurry of 42 small love text droplets falling across screen
  for (let i = 0; i < 42; i++) {
    setTimeout(() => {
      const drop = document.createElement('span');
      drop.className = 'love-drop';
      drop.textContent = loveWords[Math.floor(Math.random() * loveWords.length)];

      const x = Math.random() * 92 + 4;
      const dur = (2.2 + Math.random() * 2.2).toFixed(2);
      const delay = (Math.random() * 0.8).toFixed(2);
      const rot = (Math.random() * 30 - 15).toFixed(1);
      const sz = (0.78 + Math.random() * 0.32).toFixed(2) + 'rem';
      const col = loveColors[Math.floor(Math.random() * loveColors.length)];

      drop.style.setProperty('--x', `${x}%`);
      drop.style.setProperty('--dur', `${dur}s`);
      drop.style.setProperty('--delay', `${delay}s`);
      drop.style.setProperty('--rot', `${rot}deg`);
      drop.style.setProperty('--sz', sz);
      drop.style.setProperty('--col', col);

      loveRainContainer.appendChild(drop);

      setTimeout(() => {
        drop.remove();
      }, (parseFloat(dur) + parseFloat(delay) + 0.4) * 1000);
    }, i * 40);
  }
}

if (btnInfiniteLove) {
  btnInfiniteLove.addEventListener('click', triggerLoveRain);
  btnInfiniteLove.addEventListener('touchstart', (e) => {
    e.preventDefault();
    triggerLoveRain();
  });
}
