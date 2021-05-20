const synth = window.speechSynthesis

function say(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.5
    synth.speak(utterance)
}