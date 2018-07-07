capt._alarms = capt._alarms || {};
capt.setAlarm = function(delayInMilliseconds,callback){
  var alarm_id = Date.now();
  capt._alarms[alarm_id] = setTimeout(function(){
    callback();
  },delayInMilliseconds);
  return alarm_id;
};
