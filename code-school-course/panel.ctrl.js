angular.module('store').controller('PanelController', function() {
    this.tab = 1;
    this.selectTab = function(setTab){
        this.tab = setTab;
    };
    this.isSelected = function(numberTab){
        return this.tab === numberTab;
    };
});