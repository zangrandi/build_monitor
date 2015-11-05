angular.module('buildMonitor', ['vAccordion', 'chart.js'])
  .controller('BuildController', function($scope, $http) {
    $http.get('/items')
      .then(function(res) {
        $scope.items = res.data;
      });

    $scope.pie_colours = ["#548039", "#eb7d3b"];
    $scope.pie_labels = ["Tests Passed", "Tests Failed"];

    $scope.hideBlocks = function(index) {
      item_blocks = ".block-" + index;
      if(angular.element(item_blocks).is(":visible")) {
        angular.element(".block").show();
        angular.element(item_blocks).hide();
      } else {
        angular.element(item_blocks).show();
      }
    }
  })
  .filter('capitalize', function() {
    return function(input, all) {
      var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
      return (!!input) ? input.replace(reg, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    }
  });