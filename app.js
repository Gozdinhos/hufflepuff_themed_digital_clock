function hufflepuff_clock() {
  var now = new Date();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();

  if(hours<10) {
    hours = "0" + hours;
  }

  if(mins<10) {
    mins = "0" + mins;
  }

  if(secs<10) {
    secs = "0" + secs;
  }

  document.getElementById('hour').innerHTML =hours;
  document.getElementById('minute').innerHTML = ":" +  mins;
  document.getElementById('second').innerHTML = ":" +  secs;
}

setInterval(hufflepuff_clock,100);
