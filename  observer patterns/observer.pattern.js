class Observer {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`Observer no1 ${this.name} received message: ${message}`);
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(message) {
        console.log(`Observer no2 ${this.name} received message: ${message}`);
    }
}

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.update(message));
    }
}

// Example usage
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

const subject = new Subject();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Hello observers!');
