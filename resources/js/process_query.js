function processQuery(query) {
    if (query.includes('join')) {
        handleJoinQueries(query)
    }
}
