angular.module('store').controller('StoreCtrl', function() {
    this.products = gems;
});
var gems = [{
    name: 'Crystal',
    price: 2.95,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    canPurchase: true
}, {
    name: 'Ruby',
    price: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    canPurchase: true
}, {
    name: 'Yellow gem',
    price: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    canPurchase: true
}];
