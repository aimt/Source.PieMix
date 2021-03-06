﻿angular.module('pieMixSample', ['piemix.modules'])
.controller('piemixCController', ["$scope", "$timeout", function ($scope, $timeout) {
    var self = this;

    var pieData = [
        {
            'id': '101', 'title': '# 34495e', 'value': 60, 'color': '#34495e', 'child': [
                {
                    'id': '201', 'title': '# 3498db', 'value': 40, 'color': '#3498db', 'child': [
                        { 'id': '301', 'title': '# f39c12', 'value': 67, 'color': '#f39c12' },
                        { 'id': '302', 'title': '# e74c3c', 'value': 33, 'color': '#e74c3c' }
                    ]
                },
                { 'id': '202', 'title': '# 9b59b6', 'value': 60, 'color': '#9b59b6' }
            ]
        },
        { 'id': '102', 'title': '# 2ecc71', 'value': 20, 'color': '#2ecc71' },
        { 'id': '103', 'title': '# 16a085', 'value': 20, 'color': '#16a085' }
    ];

    var pieData2 = [
        { 'id': '101', 'title': '# 34495e', 'value': 60, 'color': '#34495e' },
        { 'id': '102', 'title': '# 2ecc71', 'value': 20, 'color': '#2ecc71' },
        { 'id': '103', 'title': '# 16a085', 'value': 20, 'color': '#16a085' }
    ];

    self.pieDataSample = pieData;

    self.baseRadius = 100;
    self.radiusIncrementFactor = 0.33;
    self.gapToLabel = 60;

    var incr = 0;
    self.changePie = function () {
        if (incr % 2 == 0)
            self.pieDataSample = pieData2;
        else
            self.pieDataSample = pieData;
        incr = incr + 1;
    }

    var incr2 = 0;
    self.radiusIncrementFactorChnage = function () {
        if (incr2 % 2 == 0)
            self.radiusIncrementFactor = 0.66;
        else
            self.radiusIncrementFactor = 0.33;
        incr2 = incr2 + 1;
    }

}]);