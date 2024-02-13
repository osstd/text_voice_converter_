let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

voiceSelect.addEventListener("click", () => {
  voiceSelect.innerHTML = "";

  const placeholderOption = new Option("Loading voices...", -1);
  voiceSelect.appendChild(placeholderOption);

  setTimeout(() => {
    voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, i) => {
      const option = new Option(voice.name, i);
      voiceSelect.appendChild(option);
    });

    voiceSelect.removeChild(placeholderOption);
  }, 500);
});

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  voices = window.speechSynthesis.getVoices();
  let text = document.querySelector("textarea").value;
  if (!text) {
    alert("You must write something!");
  } else {
    speech.text = text;
    if (voiceSelect.value !== "") {
      speech.voice = voices[voiceSelect.value];
    } else {
      speech.voice = voices[0];
    }
    window.speechSynthesis.speak(speech);
  }
});
