import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const outputDays = document.querySelector('[data-days]');
const outputHours = document.querySelector('[data-hours]');
const outputMinutes = document.querySelector('[data-minutes]');
const outputSeconds = document.querySelector('[data-seconds]');

btnStart.disabled = true;
let targetDate = 0;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      btnStart.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      Notify.success('Click "Start"');
      btnStart.disabled = false;
      targetDate = selectedDates[0];
    }
  },
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

let timerId = 0;

const setTime = () => {
  const date = convertMs(targetDate - new Date());
  outputDays.textContent = addLeadingZero(date.days);
  outputHours.textContent = addLeadingZero(date.hours);
  outputMinutes.textContent = addLeadingZero(date.minutes);
  outputSeconds.textContent = addLeadingZero(date.seconds);
  if (
    !((outputDays.textContent == '00') == outputHours.textContent) ==
    (outputMinutes.textContent == outputSeconds.textContent)
  ) {
    clearInterval(timerId);
    console.log('stop');
    btnStart.disabled = false;
  }
};

btnStart.addEventListener('click', () => {
  timerId = setInterval(setTime, 1000);
  btnStart.disabled = true;
});
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ДАЛЬШЕ Я ПРОСТО НАБРОСАЛ СТИЛИ. ИХ МОЖНО УБРАТЬ, ЗА КОД ОНИ НЕ СЧИТАЮТСЯ

input.style =
  'height: 30px; font-size: 18px; text-align: center; border-color: c5c5c5; color: #140909';
btnStart.style = 'height: 30px; width: 60px; text-transform: uppercase;';

const divTime = document.getElementsByClassName('timer')[0];
const divField = document.getElementsByClassName('field');

divTime.style = 'display: flex;';
divField[0].style =
  'display: flex; margin-right: 10px; flex-direction: column; text-align: center; text-shadow: 1px 1px 4px #000000;';

divField[0].firstElementChild.style =
  'font-size: 35px; text-transform: uppercase;';
divField[0].children[1].style =
  'font-size: 10px; text-transform: uppercase; text-shadow: 1px 1px 4px #000000; font-weight: 500;';
divField[1].style =
  'display: flex; margin-right: 10px; flex-direction: column; text-align: center; text-shadow: 1px 1px 4px #000000;';

divField[1].firstElementChild.style =
  'font-size: 35px; text-transform: uppercase;';
divField[1].children[1].style =
  'font-size: 10px; text-transform: uppercase; text-shadow: 1px 1px 4px #000000; font-weight: 500;';
divField[2].style =
  'display: flex; margin-right: 10px; flex-direction: column; text-align: center; text-shadow: 1px 1px 4px #000000;';

divField[2].firstElementChild.style =
  'font-size: 35px; text-transform: uppercase;';
divField[2].children[1].style =
  'font-size: 10px; text-transform: uppercase; text-shadow: 1px 1px 4px #000000; font-weight: 500;';
divField[3].style =
  'display: flex; margin-right: 10px; flex-direction: column; text-align: center; text-shadow: 1px 1px 4px #000000;';

divField[3].firstElementChild.style =
  'font-size: 35px; text-transform: uppercase;';
divField[3].children[1].style =
  'font-size: 10px; text-transform: uppercase; text-shadow: 1px 1px 4px #000000; font-weight: 500;';
