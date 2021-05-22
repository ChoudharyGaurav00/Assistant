class WhatsappContact {
    baseUrl = 'https://api.whatsapp.com/send?phone=91'

    constructor(name, number) {
        this.name = name
        this.number = number
    }

    chat() {
        const newWindow = open(this.baseUrl + this.number)
        setTimeout(() => newWindow.close(), 4000)
    }
}
