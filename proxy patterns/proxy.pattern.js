class Source {
    receiveRequest(request) {
        console.log('Leader receive request:::' , request)
    }
}
class Proxy {
    constructor() {
        this.source = new Source();
    }
    sendRequest(request) {
        this.source.receiveRequest(request);
    }
}

class Subject {
    constructor(message) {
        this.message = message
    }

    requestFor(proxy) {
        proxy.sendRequest(this.message)
    }
}

const subject = new Subject('Hello 123 456')
subject.requestFor(new Proxy())