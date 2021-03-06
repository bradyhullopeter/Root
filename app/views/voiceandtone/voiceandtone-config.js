'use strict';

import angular from 'angular';
import VoiceAndToneController from './voiceandtone-controller';

var stateConfig = ($stateProvider) => {

    $stateProvider
        .state('app.voiceandtone', {
            url: '/voiceandtone',
            controller: VoiceAndToneController,
            controllerAs: 'voiceAndTone',
            data: {
                title: 'Voice and Tone'
            },
            templateProvider: ($templateCache) => $templateCache.get('voiceandtone/voiceandtone.html')
        });
};

export default angular.module('app.voiceandtone', [])
    .config(['$stateProvider', stateConfig]);
