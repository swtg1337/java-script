setInterval(function() {
    
const today = new Date();
const day = today.getUTCDate();
const second  = String(today.getSeconds()).padStart(2, '0'); 
const minutes = String(today.getMinutes()).padStart(2, '0');
const hours = String(today.getHours()).padStart(2, '0');
const month = today.getMonth();
const year = today.getFullYear();
 
document.getElementById("refresh").innerText = hours + ':' + minutes + ':' + second;
document.getElementById("refresh1").innerText = day + '.' + month + '.' + year;
}, 1000);   