const {Sale00, Sale11, Sale22, Sale33, Sale44, Sale55, Sale66} = require('./constant')

const originalPrice = 100;

function computePromotion(typePromotion) {
    if(typePromotion === Sale00){
        return originalPrice * 0.1
    }

    if(typePromotion === Sale11){
        return originalPrice * 0.2
    }

    if(typePromotion === Sale22){
        return originalPrice * 0.3
    }

    if(typePromotion === Sale33){
        return originalPrice * 0.4
    }

    if(typePromotion === Sale44){
        return originalPrice * 0.5
    }

    if(typePromotion === Sale55){
        return originalPrice * 0.6
    }

    if(typePromotion === Sale66){
        return originalPrice * 0.7
    }

}

console.log(computePromotion(Sale66))