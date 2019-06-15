const countdown = document.querySelector('.countdown');

// set launch date (ms)

const launchDate = new Date('July 1, 2022 12:00:00').getTime();
//console.log(launchDate)
//update every second

const intvl = setInterval(() => {
  //get today's today's date in time (ms)
  const now = new Date().getTime();

  //distance from now to launch date in ms
  const distance = launchDate - now;

  //time calculations
  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
  const mins = Math.floor((distance % (1000*60*60))/(1000*60));
  const secs = Math.floor((distance % (1000*60))/1000);

  //template string = `
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${secs}<span>Seconds</span></div>
  `;

  // if past launch date passed
  if (distance < 0) {
    //stop countdown
    clearInterval(intvl);
    //style output
    countdown.style.color = '#69DD70';
    countdown.innerHTML = 'Launched';
  }

}, 1000);