"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Alice Chevrier-King
   Date: 11/10/2026

*/

/* Update countdown every second */
showClock();
setInterval(showClock, 1000);

/* Function to create and run the countdown clock */
function showClock() {
   /* Store the current date and time */
   var thisDay = new Date();
   var localDate = thisDay.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();

   /* Display the current date and time */
   document.getElementById("currentTime").innerHTML = "<span>" + localDate + "</span><span>" + localTime + "</span>";

   /* Store the date of the fireworks show */
   var j4Date = nextJuly4(thisDay);
   j4Date.setHours(21);

   /* Calculate the time until the fireworks show */
   var days = (j4Date - thisDay) / (1000 * 60 * 60 * 24);
   var hrs = (days - Math.floor(days)) * 24;
   var mins = (hrs - Math.floor(hrs)) * 60;
   var secs = (mins - Math.floor(mins)) * 60;

   /* Display the time left until the fireworks show */
   document.getElementById("dLeft").textContent = Math.floor(days);
   document.getElementById("hLeft").textContent = Math.floor(hrs);
   document.getElementById("mLeft").textContent = Math.floor(mins);
   document.getElementById("sLeft").textContent = Math.floor(secs);
}

/* Function to set the date for next July 4th */
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2021");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
