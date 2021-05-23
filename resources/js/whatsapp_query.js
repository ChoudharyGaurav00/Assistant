whatsappContacts = [new WhatsappContact('gaurav', '8574936316'), new WhatsappContact('hacker', '8727894064')]


function handleWhatsappQueries(query) {
    for (whatsappContact of whatsappContacts) {
        if (query.includes(whatsappContact.name))
            return whatsappContact.chat()
    }

    return say('Sorry I dont recognize that name')
}
