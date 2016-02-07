(function(){
  'use strict';

  angular.module('app')
        .service('todoListService', [
        '$q',
      todoList
  ]);

  function todoList($q){
    var todos = [
      {text: 'Continuous integration with Cassandra', done: false},
      {text: 'Implement panel-widget directive', done: true},
      {text: 'Add directive for D3 and crossfilter', done: false}
    ];

    return {
      loadAllItems : function() {
        return $q.when(todos);
      }
    };
  }
})();
