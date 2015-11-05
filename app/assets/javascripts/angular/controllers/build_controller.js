angular.module('buildMonitor', ['vAccordion', 'chart.js'])
  .controller('BuildController', ['$scope', function($scope) {
    $scope.items = [
      {
        type: "firewall",
        state: "rejected",
        changelist: "Tenrox-R1_1234",
        owner: "jtuck",
        time_started: "4/18/2014 12:12pm",
        build: "pending",
        functional_test: "pending",
        details: "Metrics Reduction",
        metrics: { 
          state: "accepted",
          test: 64,
          maintainability: 53,
          security: 64,
          workmanship: 72
        },
        unit_test: {
          state: "accepted",
          code_covered: 76,
          tests_data: [142, 10]
        },
        functional_test: {
          state: "accepted",
          code_covered: 23,
          tests_data: [4321, 2145]
        }
      },
      {
        type: "build",
        state: "complete",
        changelist: "Tenrox-R1_1234",
        owner: "jtuck",
        time_started: "4/18/2014 12:12pm",
        build: "pending",
        functional_test: "pending",
        details: "Metrics Reduction",
        metrics: { 
          state: "accepted",
          test: 64,
          maintainability: 53,
          security: 64,
          workmanship: 72
        },
        unit_test: {
          state: "accepted",
          code_covered: 76,
          tests_data: [142, 10]
        },
        functional_test: {
          state: "accepted",
          code_covered: 23,
          tests_data: [4321, 2145]
        }
      }
    ]

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
  }]);