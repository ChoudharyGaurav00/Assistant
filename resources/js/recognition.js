window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'en-in'


window.addEventListener("load", function loading() {
    let started = document.getElementById("welcome");
    // console.log(started.innerText);
    p = started.innerText;
    say(p)
});

function start_recognition() {
    recognition.start()
    console.log('Recognition started')
}

recognition.onresult = (event) => {
    const query = event.results[0][0].transcript
    console.log(query)
    if (event.results[0][0].confidence > 0.3)
        processQuery(query)
    else {
        text = 'I didnt recognize this.please try again';
        console.log(text);
        say(text)
    }
}


recognition.onerror = (event) => {
    text = 'Error occurred in recognition. Logging to console'
    console.log('Error - ', event.error)
    say(text)
}
