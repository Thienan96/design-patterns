
class Discount {
    calc(value) {
        return value * 0.9
    }
}
class Shipping {
    calc(value) {
        return 5
    }
}

class Fee {
    calc(value) {
        return value * 0.5
    } 
}

class Facade {
    constructor() {
        this.discount = new Discount()
        this.shipping = new Shipping()
        this.fee = new Fee()

    }

    calc(value) {
        price = this.discount(value)
        price = this.shipping(price)
        price = this.fee(price)
        return price
    }
}

facade = new Facade()
facade.calc(100);