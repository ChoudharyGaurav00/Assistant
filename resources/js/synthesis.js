const synth = window.speechSynthesis

function say(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.0
    synth.speak(utterance)
}