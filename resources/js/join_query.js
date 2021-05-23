const allSubjects = [
    new Subject('computer', 'https://meet.google.com/oce-ijqf-wse'),
    new Subject('software', 'https://meet.google.com/zzq-bojq-crw'),
    new Subject('operating', 'https://meet.google.com/wgj-pupt-sdo'),
    new Subject('algorithm', 'https://us02web.zoom.us/j/5805726421')
]


function handleJoinQueries(query) {
    query = query.split(' ')

    subjectLink = findSubjectLink(query)
    if (subjectLink)
        joinClass(subjectLink)

    else
        say('Sorry didnt recognize that subject')
}


function findSubjectLink(query) {
    for (subject of allSubjects) {
        if (query.includes(subject.name))
            return subject.link
    }
    return false
}


function joinClass(subjectLink) {
    open(subjectLink)
}