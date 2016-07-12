angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'College', id: 1 , image: 'img/college.jpg', occupations: ["Professor", "Adminstrator"]},
    { title: 'Medical', id: 2 , image: 'img/medical.jpg',  occupations: ["Sugeon", "Pediatrician"]},
    { title: 'Military', id: 3 , image: 'img/military.jpg', occupations: ["Air Force", "Navy"]},
    { title: 'Legal/Politics', id: 4 , image: 'img/legal.jpg', occupations: ["Lawyer", "Judge"]},
    { title: 'Business', id: 5 ,  image: 'img/business.jpg', occupations: ["Sales Associate", "Youtuber"]},
    { title: 'Agriculture', id: 6 ,  image: 'img/agriculture.png', occupations:["Farmer", "Urban gardener"]},
    { title: 'Communication', id: 7 ,  image: 'img/communication.jpeg', occupations:["Radio Host", "UN representative"]},
    { title: 'Engineering', id: 8 ,  image: 'img/engineering.jpg', occupations:["Software Engineer", "Bioengineer"]},
    { title: 'Media & Entertainment', id: 9 ,  image: 'img/media.png', occupations:["Actor", "Clown"]},
    { title: 'Civil Service', id: 10 ,  image: 'img/civil.png', occupations:["Social Worker", "Mayor"]},
    { title: 'Arts & Literature', id: 11 ,  image: 'img/arts.png', occupations:["Author", "Artist"]}
  ];
})
.controller('CareerCtrl', function($scope, $stateParams) {
  $scope.careers = [
    { title: 'College', id: 1 , image: 'img/college.jpg', occupations: ["Professor", "Adminstrator"]},
    { title: 'Medical', id: 2 , image: 'img/medical.jpg',  occupations: ["Sugeon", "Pediatrician"]},
    { title: 'Military', id: 3 , image: 'img/military.jpg', occupations: ["Air Force", "Navy"]},
    { title: 'Legal/Politics', id: 4 , image: 'img/legal.jpg', occupations: ["Lawyer", "Judge"]},
    { title: 'Business', id: 5 ,  image: 'img/business.jpg', occupations: ["Sales Associate", "Youtuber"]},
    { title: 'Agriculture', id: 6 ,  image: 'img/agriculture.png', occupations:["Farmer", "Urban gardener"]},
    { title: 'Communication', id: 7 ,  image: 'img/communication.jpeg', occupations:["Radio Host", "UN representative"]},
    { title: 'Engineering', id: 8 ,  image: 'img/engineering.jpeg', occupations:[{name: "Bill Nye", id: 1, title: "Mechanical Engineer",
    image: "img/billnye.jpeg", biography: "Bill Nye had a long professional history in science before switching to educational television. Nye began his career in Seattle at Boeing where he starred in training films and developed a hydraulic pressure resonance suppressor for the 747. Later, he worked as a consultant in the aeronautics industry.", video: "https://www.youtube.com/watch?v=54q6M48WxSs" ,
    accomplishments: "Nye began his professional entertainment career as a writer/actor on a local sketch comedy television show in Seattle, Washington, called Almost Live!. He remained interested in science education through entertainment and became famous for his show Bill Nye the Science Guy. "},
    {name: "Dmitri Skjorshammer", id: 2, title: "Software Engineer", image: "img/dmitri.jpeg", biography: "Dmitri Skjorshammer has a professional career in engineering, and is currently spending time wandering the planet.", accomplishments: "CEO of Startup U"}]},
    { title: 'Media & Entertainment', id: 9 ,  image: 'img/media.png', occupations:["Actor", "Clown"]},
    { title: 'Civil Service', id: 10 ,  image: 'img/civil.png', occupations:["Social Worker", "Mayor"]},
    { title: 'Arts & Literature', id: 11 ,  image: 'img/arts.png', occupations:["Author", "Artist"]}
  ]

  for (var i = 0; i < $scope.careers.length; i++){
    var occupations = $scope.careers[i].occupations;

    for (var j = 0; j < occupations.length; j++) {
      if ($stateParams.careerName == occupations[j]) {
        $scope.occupation = occupations[j];
      }
    }
  }
}
)

.controller('PlaylistCtrl', function($scope, $stateParams) {
  //rename to $scope.playlists, add new property called occupations
  $scope.playlists = [
    { title: 'College', id: 1 , image: 'img/college.jpg', occupations: ["Professor", "Adminstrator"]},
    { title: 'Medical', id: 2 , image: 'img/medical.jpg',  occupations: ["Sugeon", "Pediatrician"]},
    { title: 'Military', id: 3 , image: 'img/military.jpg', occupations: ["Air Force", "Navy"]},
    { title: 'Legal/Politics', id: 4 , image: 'img/legal.jpg', occupations: ["Lawyer", "Judge"]},
    { title: 'Business', id: 5 ,  image: 'img/business.jpg', occupations: ["Sales Associate", "Youtuber"]},
    { title: 'Agriculture', id: 6 ,  image: 'img/agriculture.png', occupations:["Farmer", "Urban gardener"]},
    { title: 'Communication', id: 7 ,  image: 'img/communication.jpeg', occupations:["Radio Host", "UN representative"]},
    { title: 'Engineering', id: 8 ,  image: 'img/engineering.jpeg', occupations:["Software Engineer", "Bioengineer"]},
    { title: 'Media & Entertainment', id: 9 ,  image: 'img/media.png', occupations:["Actor", "Clown"]},
    { title: 'Civil Service', id: 10 ,  image: 'img/civil.png', occupations:["Social Worker", "Mayor"]},
    { title: 'Arts & Literature', id: 11 ,  image: 'img/arts.png', occupations:["Author", "Artist"]}
  ]

  //code below is new
  console.log($stateParams)
  for (var i = 0; i < $scope.playlists.length; i++){
    if ($stateParams.playlistId == $scope.playlists[i].id) {
      $scope.career = $scope.playlists[i];
    }
  }


});
