'use strict';

import angular from 'angular';
import ctrl from './home-five-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.home.five', {
            url: '/five',
            controller: ctrl,
            controllerAs: 'homeFive',
            templateProvider: ($templateCache) => $templateCache.get('home/five/home-five.html')
        });
};

export default angular.module('app.home.five', [])
    .config(['$stateProvider', stateConfig]);
