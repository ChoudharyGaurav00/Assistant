const btn = document.querySelector('#start')
btn.addEventListener('click', start_recognition)

const cao = 'oce-ijqf-wse'
const se = 'zzq-bojq-crw'
const base_link = 'https://meet.google.com/'

const test_join_query = 'join cao'

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

const synth = window.speechSynthesis


class Subject {
    constructor(name, link) {
        this.name = name
        this.link = link
    }
}

const all_subjects = [new Subject('cao', 'oce-ijqf-wse'), new Subject('se', 'zzq-bojq-crw')]


function start_recognition() {
    recognition.start()
    console.log('Recognition started')
    handleJoinQueries(test_join_query)
}


function handleJoinQueries(query) {
    words = query.split(' ')
    console.log(words)

    for (subject of all_subjects) {
        if (words.includes(subject.name)) {
            join_class(subject.link)
            break
        }
    }
}


function join_class(class_link) {
    link = base_link + class_link
    open(link)
}


recognition.onresult = (event) => {
    const query = event.results[0][0].transcript
    console.log(query)

    if (query.includes('join')) {
        handleJoinQueries(query)
    }
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


function say(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1.5
    synth.speak(utterance)
}

