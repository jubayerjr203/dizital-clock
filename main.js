let hour = document.getElementById('hour');
let minit = document.getElementById('minit');
let sec = document.getElementById('sec');

function fung() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();
    
    hour.textContent = h;
    minit.textContent = m;
    sec.textContent = s;
    
}
 
 setInterval(() => {
    fung();  
 }, 1000);