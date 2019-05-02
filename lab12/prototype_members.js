function Event(){

}
Event.prototype.setReminder = function(minutesBefore) {
  console.log('Reminder set for '+  minutesBefore +' minutes before start!');
};


let obj = new Event();
obj.setReminder(1000);

Event.setReminder(1000);