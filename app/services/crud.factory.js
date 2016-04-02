/// <reference path="../../typings/tsd.d.ts" />

angular
    .module('main')
    .factory('crudFactory', function(apiFactory, getSetErrorFactory) {

        var factory = {};
        var todoEditVm = {};
        var setEditVmSubscriber;
        var todoIdUnderEdit;
        
        
        var onError = function () {
            getSetErrorFactory.setError(true);
        };

        factory.getTodos = function(successCb) {
            apiFactory.getTodos()
                .then(successCb)
                .catch(onError);
        };
        
        factory.postTodo = function(todo, successCb) {
            apiFactory.postTodo(todo)
                .then(successCb)
                .catch(onError);
        };
        
        factory.putTodo = function (id, todo, successCb) {
            apiFactory.putTodo(id, todo)
                .then(successCb)
                .catch(onError);
        };
        
        factory.deleteTodo = function (id, successCb) {
            apiFactory.deleteTodo(id)
                .then(successCb)
                .catch(onError);
        };
        
        factory.setTodoIdUnderEdit = function (id) {
            todoIdUnderEdit = id;  
        };
        
        factory.getTodoIdUnderEdit = function (id) {
            return todoIdUnderEdit;
        };
        
        factory.setEditVm = function (todo) {
            todoEditVm.id = todo.id;
            todoEditVm.date = new Date(todo.date);
            todoEditVm.label = todo.label;
            todoEditVm.text = todo.text;
            
            if(setEditVmSubscriber) {
                setEditVmSubscriber(todoEditVm);
            }
        };
        
        factory.subScribeToSetEditVm = function (callback) {
            setEditVmSubscriber = callback;
        };

        return factory;

    });