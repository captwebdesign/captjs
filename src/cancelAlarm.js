capt._alarms = capt._alarms || {};
capt.cancelAlarm = function(alarm_id){
  if(capt._alarms[alarm_id]){
    clearTimeout(capt._alarms[alarm_id]);
  }
  return true;
};
