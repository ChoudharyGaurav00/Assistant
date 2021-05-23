joinWords = ['join', 'joined', 'joining']
whatsappWords = ['text', 'whatsapp', 'message']

function processQuery(query) {
    query = query.toLowerCase()

    if (query.charAt(query.length - 1) == '.')
        query = query.substring(0, query.length - 1)

    for (joinWord of joinWords) {
        if (query.includes(joinWord))
            return handleJoinQueries(query)
    }

    for (whatsappWord of whatsappWords) {
        if (query.includes(whatsappWord))
            return handleWhatsappQueries(query)
    }
}
