(function( app ) {

    app.controller('SiteController', function( $scope, CategoriaService, ProdutoService ) {


        CategoriaService.listar().then(function(result) {
            $scope.produtos = [];
            $scope.categorias = result.data;

            ProdutoService.listar().then(function(result2) {
                $scope.produtos = result2.data;
            });
        });
    });

})( appATV2 );