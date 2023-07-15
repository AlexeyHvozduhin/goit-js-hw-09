function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const timerId = setInterval(callback, delay, arg1, arg2, ...);

const body = document.querySelector('body');
// body.style.backgroundColor = getRandomHexColor();

const startBtn = document.querySelectorAll('button')[0];
const stopBtn = document.querySelectorAll('button')[1];
console.log(stopBtn);
let timer = 0;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.disabled = false;
});
