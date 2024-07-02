const currentDay = document.querySelector('.current-day');
const currentTime = document.querySelector('.current-time');

function displayUTCTime() {
  const presentTime = new Date();
  let hour = presentTime.getUTCHours();
  let min = presentTime.getUTCMinutes();
  let sec = presentTime.getUTCSeconds();

  let UTCtime = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2,'0')}`;

  currentTime.innerHTML = UTCtime;
}

function displayUTCDay() {
  const presentTime = new Date();
  presentDay = presentTime.getUTCDay();

  const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  currentDay.innerHTML = day[presentDay];
}

setInterval(displayUTCTime, 1000);
setInterval(displayUTCDay, 1000);