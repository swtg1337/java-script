setInterval(function() {
    
    const today = new Date();
    const day = today.getUTCDate();
    const second  = today.getSeconds(); 
    const minutes = today.getMinutes();
    const hours = today.getHours();
    const month = today.getMonth();
    const year = today.getFullYear();
 
    document.getElementById("time").innerText = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(second).padStart(2, '0'); 
    document.getElementById("date").innerText = day + '.' + month + '.' + year;
}, 1000);   