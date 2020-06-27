(function (app) {
    'use strict';

    app.controller('ProdutoController', function ($scope, ProdutoService, CategoriaService) {
        $scope.decrescente = false;
        $scope.selectedColumn = 'id';

        $scope.showTable = true;

        $scope.setColumn = function (columnName) {
            $scope.selectedColumn = columnName;

            $scope.decrescente = !$scope.decrescente;
        }

        $scope.filter = function () {
            var filtro = {};

            filtro[$scope.selectedColumn] = $scope.textFilter;

            return filtro;
        }

        $scope.novo = function () {
            $scope.produto = {
                nome: '',
                foto: '',
                descricao: '',
                preco: 0
            }

            $scope.showTable = false;
        }

        $scope.cancelar = function () {
            $scope.showTable = true;
        }

        $scope.salvar = function () {
            ProdutoService.salvar($scope.produto).then(function (result) {
                $scope.showTable = true;
            });

        }

        $scope.editar = function (produto) {
            $scope.produto = produto;
            $scope.showTable = false;
        }

        $scope.excluir = function () {
            ProdutoService.remover($scope.produto).then(function (result) {
                $scope.showTable = true;
            });
        }

        ProdutoService.listar().then(function (result) {
            $scope.categorias = [];
            $scope.produtos = result.data;

            CategoriaService.listar().then(function(result2) {
                $scope.categorias = result2.data;
            });
        });

    });
 })( appATV2 );