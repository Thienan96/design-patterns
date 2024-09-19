const {Sale00, Sale11, Sale22, Sale33, Sale44, Sale55, Sale66} = require('./constant')

const originalPrice = 100;
const promotionStrategies = {
    [Sale00]: () => originalPrice * 0.1,
    [Sale11]: () => originalPrice * 0.2,
    [Sale22]: () => originalPrice * 0.3,
    [Sale33]: () => originalPrice * 0.4,
    [Sale44]: () => originalPrice * 0.5,
    [Sale55]: () => originalPrice * 0.6,
    [Sale66]: () => originalPrice * 0.7,
  };
  
  function computePromotion(typePromotion) {
    const strategy = promotionStrategies[typePromotion];
    return strategy ? strategy() : 0; // Return 0 or handle invalid promotions as needed
  }

  console.log(computePromotion(Sale66))