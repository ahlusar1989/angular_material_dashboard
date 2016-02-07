(function(){

  angular
    .module('app')
    .controller('TableController', [
      'tableService',
      TableController
    ]);

  function TableController(tableService) {
    var vm = this;


    vm.sortType     = 'Date'; // set the default sort type
    vm.sortReverse  = false;  // set the default sort order
    // vm.searchTerm   = '';     // set the default search/filter term

    vm.tableData = [];

    tableService
      .loadAllItems()
      .then(function(tableData) {
        vm.tableData = [].concat(tableData);
      });
  }

})();
