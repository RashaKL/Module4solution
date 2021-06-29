
(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function speak(names) {
    console.log(speakWord + " " + names);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));

