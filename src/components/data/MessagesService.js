(function(){
  'use strict';

  angular.module('app')
        .service('messagesService', [
        '$q',
        messagesService
  ]);

  function messagesService($q){
    var messages = [
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Slogan',
        userName: 'Mike Dunn',
        date: '2015',
        text: 'Fighting Serious Crime!'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Comment',
        userName: 'Lauriston Nunes',
        date: '2015',
        text: 'Rock on Mike!'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Comment',
        userName: 'Kenny Warren',
        date: '2015',
        text: 'Sounds good'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Note',
        userName: 'Prashant',
        date: '2015',
        text: 'I will take a look'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Pandas',
        userName: 'Taneem',
        date: '2015',
        text: 'Pandas is incredible!'
      },
      {
        userPhoto : '/assets/images/user.svg',
        subject: 'Spin theory',
        userName: 'JW',
        date: '2015',
        text: 'Fun fact - Wolfgang Pauli is credited for the discovery of the Exclusion Principle - also called the Pauli principle'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
