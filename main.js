const hourE1 = document.querySelector(".hour");
const minE1 = document.querySelector(".minute");
const secE1 = document.querySelector(".second");

function updateClock() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    hourE1.style.transform = `rotate(${hourDeg}deg)`; 

    const minuteDeg = (minute / 60) * 360;
    minE1.style.transform = `rotate(${minuteDeg}deg)`; 
    
    const secondDeg = (second / 60) * 360;
    secE1.style.transform = `rotate(${secondDeg}deg)`;    
}

setInterval(updateClock, 1000); 