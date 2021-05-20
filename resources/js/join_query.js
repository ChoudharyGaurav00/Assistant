const all_subjects = [new Subject('cao', 'oce-ijqf-wse'), new Subject('se', 'zzq-bojq-crw')]
const base_link = 'https://meet.google.com/'

function handleJoinQueries(query) {
    query = query.split(' ')
    console.log(query)

    subjectLink = findSubjectLink(query)
    if (subjectLink)
        join_class(subjectLink)

    else
        say('Sorry didnt recognize that subject')
}


function findSubjectLink(query) {
    for (subject of all_subjects) {
        if (query.includes(subject.name))
            return subject.link
    }
    return false
}


function join_class(class_link) {
    link = base_link + class_link
    open(link)
}