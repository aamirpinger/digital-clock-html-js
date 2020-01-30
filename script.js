var timeOut

function updateTime() {
  var txtDate = new Date();
  var mon_Label = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var day_Label = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// assigning current hour min and sec to variables  
  hourTxt = txtDate.getHours();
  minTxt = txtDate.getMinutes();
  secTxt = txtDate.getSeconds();

  FullDate = day_Label[txtDate.getDay()] + " " + mon_Label[txtDate.getMonth()] + " " + txtDate.getDate() + ", " + txtDate.getFullYear();
  

  amPmTxt = "AM";
  
// from 13 hour to 23 hour it will show PM
if (hourTxt >= 12) {
  amPmTxt = "PM";  
}

// making 13 to 23 hour in 12 hour format
if (hourTxt > 12) {
    hourTxt = hourTxt - 12;
  } else if (hourTxt == 0) {
    hourTxt = 12;
  }
  
  // adding zero ahead of single digit hour min and sec
  if(hourTxt < 10){
    hourTxt = "0" + hourTxt;
  }

  if (minTxt < 10) {
    minTxt = "0" + minTxt;
  }
  
  if (secTxt < 10) {
    secTxt = "0" + secTxt;
  }


  // assigning data to HTML elements by there IDs
  document.getElementById('hour_td').innerHTML = hourTxt;
  document.getElementById("min_td").innerHTML = minTxt;
  document.getElementById("sec_td").innerHTML = secTxt;
  document.getElementById("am_pm_td").innerHTML = amPmTxt;
  
  document.getElementById("td_date").innerHTML = FullDate;
  timeOut = setTimeout(updateTime,1000);    
}
  


function changeClockColor(color) {  // function for changing color of time digits

  // assign default td CSS class PLUS color CSS class to class in HTML elements
  document.getElementById('hour_td').className = "td_style color_" + color;
  document.getElementById('min_td').className = "td_style color_" + color;
  document.getElementById('sec_td').className = "td_style color_" + color;
  document.getElementById('am_pm_td').className = "td_style color_" + color;

}

function stop_watch() { // function to stop clock update

  var buttonTxt = document.getElementById('stopWatchButton').value;

  if (buttonTxt === "Stop Clock") {  // stoping clock
    clearTimeout(timeOut);
    document.getElementById('stopWatchButton').value = "Start Clock";

  }else { // resuming clock
    document.getElementById('stopWatchButton').value = "Stop Clock";
    updateTime();
  }
  
}
