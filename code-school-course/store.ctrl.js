angular.module('store').controller('StoreCtrl', ['$http', function($http) {
    var store = this;
    this.products = [];
    $http.get('products.json').success(function(data){
        store.products = data;
    });
}]);
