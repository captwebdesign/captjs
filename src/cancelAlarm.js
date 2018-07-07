capt._alarms = capt._alarms || {};
capt.cancelAlarm = function(alarm_id){
  var alarm = capt._alarms[alarm_id] || false;
  if(alarm){
    clearTimeout(capt._alarms[alarm_id]);
  }
  return true;
};
