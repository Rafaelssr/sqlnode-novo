myApp.directive("profileModal", function () {
    return {
        restrict: "E", // Elemento personalizado
        scope: {
            show: "=" // Bind de duas vias para controlar a exibição do modal
        },
        transclude: true, // Permite conteúdo customizado dentro do modal
        template: `
        <div class="modal-overlay" ng-show="show">
            <div class="modal">
                <div class="modal-header">
                    <h3>{{title}}</h3>
                    <button class="close-btn" ng-click="closeModal()">×</button>
                </div>
                <div class="modal-body" ng-transclude></div>
            </div>
        </div>
        `,
        link: function (scope, attrs) {
            scope.title = attrs.title || "Título do Modal"; // Propriedade opcional
            scope.closeModal = function () {
                scope.show = false;
            };
        }
    };
});
