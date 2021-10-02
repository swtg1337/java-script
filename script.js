function pad(str) {
    return String(str).padStart(2, '0');
  }

function formatDate(dt) {
    const year = dt.getFullyear();
    const month = dt.getMonth();
    const day = dt.getUTCDate();
    
    return pad(day) + '.' + pad(month) + '.' + year;
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
    //document.getElementById("date").innerText = formatDate(now); // не выводится, как-будто зацикливается. Если ставлю вначало, то не выводится даже время 
    document.getElementById("date").innerText = pad(now.getUTCDate()) + '.' + pad(now.getMonth()) + '.' + now.getUTCFullYear();

  }

setInterval(SetTime,1000);