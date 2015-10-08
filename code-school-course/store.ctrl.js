angular.module('store').controller('StoreCtrl', function() {
    this.products = gems;
});
var gems = [{
    name: 'Crystal',
    price: 2.95,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    canPurchase: true,
    images: [{
        full: 'img/blue-gem.png'
    }],
    reviews: [ { 
        stars: 5,
        body: "I love this product!",
 author: "joe@thomas.com" 
    },  { 
        stars: 1,
        body: "This product sucks",
 author: "tim@hater.com" 
    } ]

}, {
    name: 'Ruby',
    price: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    canPurchase: true,
    images: [{
        full: 'img/red-gem.png'
    }],
    reviews: [ { 
        stars: 5,
        body: "I love this product!",
 author: "joe@thomas.com" 
    },  { 
        stars: 1,
        body: "This product sucks",
 author: "tim@hater.com" 
    } ]
}, {
    name: 'Green gem',
    price: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    canPurchase: true,
    images: [{
        full: 'img/green-gem.png'
    }],
    reviews: [ { 
        stars: 5,
        body: "I love this product!",
 author: "joe@thomas.com" 
    },  { 
        stars: 1,
        body: "This product sucks",
 author: "tim@hater.com" 
    } ]
}];
