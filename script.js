let speech = new SpeechSynthesisUtterance();

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})
let Voices = [];

let VoiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () =>{
    Voices = window.speechSynthesis.getVoices();
    speech.voice = Voices[0];
    Voices.forEach((voice, i) => (VoiceSelect.options[i] = new Option(voice.name, i)))
}
VoiceSelect.addEventListener("change", () =>{
    speech.voice = Voices[VoiceSelect.value];
})