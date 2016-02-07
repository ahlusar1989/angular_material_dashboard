(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Admin',
      email: 'pgangadharan',
      firstName: 'Prashant',
      lastName: 'Gangadharan' ,
      company: 'Wynyard Group USA' ,
      address: '1530 Wilson BLVD' ,
      city: 'Rosslyn' ,
      state: 'VA',
      biography: 'Mike, Prashant, and Derek',
      postalCode : ''
    };
  }

})();
