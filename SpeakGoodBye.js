
(function (window) {
  var byeSpeaker = {};
  byeSpeaker.speak = function(names) {
    console.log(speakWord + " " + names);
  }
  var speakWord = "Good Bye";
  window.byeSpeaker = byeSpeaker;
}(window));

