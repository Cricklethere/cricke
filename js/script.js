// You can code JavaScript here

function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "this is a cricket blog, have a nice day, if you any query click on contact us";
    speechSynthesis.speak(voice);
}