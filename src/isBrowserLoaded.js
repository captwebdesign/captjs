capt.isBrowserLoaded = function(document){
  document = document || window.document;
  return document.readyState === 'complete' ? true : false;
};
