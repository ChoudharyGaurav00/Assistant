window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()


function start_recognition() {
    recognition.start()
    console.log('Recognition started')
}


recognition.onresult = (event) => {
    const query = event.results[0][0].transcript
    console.log(query)
    processQuery(query)
}


recognition.onnomatch = () => {
    text = 'I didnt recognize that.'
    say(text)
}


recognition.onerror = (event) => {
    text = 'Error occurred in recognition. Logging to console'
    console.log('Error - ', event.error)
    say(text)
}
