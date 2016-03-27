/// <reference path="../../typings/tsd.d.ts" />

angular
    .module('main')
    .directive('ytFilterTodos', function () {
       return {
           restrict: 'E',
           replace: true,
           scope: {},
           template: [
               '<div>',
                    '<select ng-model="ctrl.todosFilter.label">',
                        '<option value="" selected="true">Alla</option>',
                        '<option value="{{ctrl.LABELS.work}}">Work</option>',
                        '<option value="{{ctrl.LABELS.joy}}">Joy</option>',
                        '<option value="{{ctrl.LABELS.project}}">Project</option>',
                    '</select>',
                    '<input type="text" ng-model="ctrl.todosFilter.text" placeholder="Search ..." />',
               '</div>'
           ].join(''),
           controller: function (LABELS_CONSTANTS) {
               var ctrl = this;
               ctrl.LABELS = LABELS_CONSTANTS;
           },
           controllerAs: 'ctrl',
           bindToController: {
               todosFilter: '='
           }
       };
       
        
    });