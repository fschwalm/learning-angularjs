(function() {

    var app = angular.module('custom-directives', []);

    /**
     *
     * Directive using Shared Scope
     *
     */
    var uiAlert = function() {
        var alertUiDDO = {
            template: "<p>Alert message by {{ctrl.user}}</p>"
        };

        return alertUiDDO;
    }

    app.directive('uiAlert', uiAlert);

    /**
     *
     * Controller
     *
     */
    var controller = function() {
        var self = this;
        self.user = "Fagner";
    }

    app.controller('someController', controller);

}());
