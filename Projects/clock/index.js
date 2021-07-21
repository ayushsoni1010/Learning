console.log('Hello Clock');

function updateClock(){
    let currentTime= new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    let timeOfDay = (currentHour<12)? "AM" : "PM";

    currentHour = (currentHour==0)? 12 : currentHour;

    currentHour = (currentHour>12)? currentHour-12 : currentHour;

    let currentTimeStr= currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    document.getElementById('clock').innerHTML = currentTimeStr;

}