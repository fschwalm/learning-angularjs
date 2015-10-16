angular.module('store').controller('ReviewController', function() {

    this.review = {};

    this.addReview = function(product) {
        product.reviews.push(this.review);
        console.log(this.review);
        this.review = {};
    };

});
