function processQuery(query) {
    if (query.includes('join')) {
        handleJoinQueries(query)
    }
}


const all_subjects = [new Subject('cao', 'oce-ijqf-wse'), new Subject('se', 'zzq-bojq-crw')]
const base_link = 'https://meet.google.com/'


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
