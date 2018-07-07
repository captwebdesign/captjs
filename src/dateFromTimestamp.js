capt.dateFromTimestamp= function(timestamp){
  var date = new Date(timestamp);
  return date.toUTCString();
};
