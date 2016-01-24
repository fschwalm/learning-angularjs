(function() {
    /**
     *
     * Application
     *
     */
    var app = angular.module('listaTelefonica', []);

    /**
     *
     * Controller
     *
     */
    var listaTelefonicaController = function($scope) {
        var self = this;
        self.contatos = [{
            nome: "Pedro",
            telefone: "99999999"
        }, {
            nome: "Maria",
            telefone: "99333333"
        }, {
            nome: "Ana",
            telefone: "88888888"
        }];

        self.adicionarContato = function(contato) {
            self.contatos.push(angular.copy(contato));
            delete $scope.contato;
        };
    }

    app.controller('listaTelefonicaController', ['$scope', listaTelefonicaController]);

}());
