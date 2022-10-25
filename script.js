setInterval(() => {
  let time = document.querySelector('#time');
  let calender = document.querySelector('#date');
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let date = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();
  let session;

  // Analogue Clock

  function setClock() {
    const secondsRatio = seconds / 60;
    const minutesRatio = (secondsRatio + minutes) / 60;
    const hoursRatio = (minutesRatio + hours) / 12;

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
  }

  function setRotation(e, rotationRatio) {
    e.style.setProperty('--rotation', rotationRatio * 360);
  }

  setClock();
  // Analogue Clock end

  if (hours > 12) {
    hours = hours - 12;
    session = 'PM';
  } else {
    session = 'AM';
  }

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  let weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = weekDays[d.getDay()];

  if (month < 10) {
    month = month + 1;
  }
  if (month <= 9) {
    month = '0' + month;
  }

  time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + session;
  calender.innerHTML = `${day}, ${date}-${month}-${year}`;
}, 100);
