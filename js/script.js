runClock();
setInterval("runClock()", 1000);
function runClock() {

    // Variable Declarations
    var currentDay = new Date();
    var timeStr = currentDay.toLocaleTimeString();
    var dateStr = currentDay.toLocaleDateString();
    var newYear = new Date(2021, 0, 1);
    var nextYear = currentDay.getFullYear() + 1;
    newYear = newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000*60*60*24);


    // Calc and Print Time Left Until New Years

    document.getElementById("daysLeft").innerHTML = Math.floor(daysLeft);
    var hoursLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    document.getElementById("hoursLeft").innerHTML = Math.floor(hoursLeft);
    var minutesLeft = (hoursLeft - Math.floor(hoursLeft))*60;
    document.getElementById("minutesLeft").innerHTML = Math.floor(minutesLeft);
    var secondsLeft = (minutesLeft - Math.floor(minutesLeft)) * 60;
    document.getElementById("secondsLeft").innerHTML = Math.floor(secondsLeft);


    // Print Current Time/Date to Span
    document.getElementById("currentDate").innerHTML = dateStr;
    document.getElementById("currentTime").innerHTML = timeStr;

    //Test print
    
}

// Test Button
function printDate() {;
}