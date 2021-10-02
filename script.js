function pad(str) {
    return String(str).padStart(2, '0');
  }

function formatDate(dt) {
    const year = dt.getFullyear();
    const month = dt.getMonth();
    const day = dt.getUTCDate();
    
    return year + '.' + month + '.' + day
  } 

function formatTime(dt) {
    const hours = dt.getHours();
    const minutes = dt.getMinutes();
    const second = dt.getSeconds();
  
    return pad(hours) + ':' + pad(minutes) + ':' + pad(second);
  }

function SetTime() {
    const now = new Date();
    
    document.getElementById("time").innerText = formatTime(now);
    document.getElementById("date").innerText = formatDate(now);

  }

setInterval(SetTime,1000);