let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

voiceSelect.addEventListener("click", () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  voices = window.speechSynthesis.getVoices();
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
