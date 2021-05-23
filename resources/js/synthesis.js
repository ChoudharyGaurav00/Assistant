const synth = window.speechSynthesis

function say(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1;
    utterance.lang = "en-IN";
    utterance.pitch = 1.10;
    utterance.volume = 0.80;
    synth.speak(utterance)
}