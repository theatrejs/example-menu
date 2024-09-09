import {ActorPreloadable, EVENTCODES, FiniteStateMachine, Sound, STORAGE, Vector2, Vibration} from '@theatrejs/theatrejs';

import ActorButtonContinue from 'actors/button-continue/actor-button-continue.js';
import ActorButtonDlc from 'actors/button-dlc/actor-button-dlc.js';
import ActorButtonNewGame from 'actors/button-new-game/actor-button-new-game.js';
import ActorButtonQuit from 'actors/button-quit/actor-button-quit.js';

import soundNavigation from './navigation.mp3';
import soundSelection from './selection.mp3';

class ActorMenu extends ActorPreloadable([ActorButtonContinue, ActorButtonDlc, ActorButtonNewGame, ActorButtonQuit, soundNavigation, soundSelection]) {

    /**
     * Stores the finite state machine.
     * @type {import('@theatrejs/theatrejs').FiniteStateMachine<('INITIATE' | 'CONTINUESELECTED' | 'CONTINUEACTIVATED' | 'NEWGAMESELECTED' | 'NEWGAMEACTIVATED' | 'QUITSELECTED' | 'QUITACTIVATED')>}
     * @private
     */
    $finiteStateMachineMenu;

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onBeforeRemove']}
     */
    onBeforeRemove() {

        this.followers.forEach(($follower) => {

            this.stage.removeActor($follower);
        });
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onCreate']}
     */
    onCreate() {

        const DEBOUNCEINITIATE = 800;
        const DEBOUNCENAVIGATION = 200;
        const DEBOUNCESELECTION = 800;

        const buttonContinue = /** @type {ActorButtonContinue} */(this.stage.createActor(ActorButtonContinue)).translate(new Vector2(0, 24 * 1.5));
        const buttonNewGame = /** @type {ActorButtonNewGame} */(this.stage.createActor(ActorButtonNewGame)).translate(new Vector2(0, 24 * 0.5));
        const buttonDlc = /** @type {ActorButtonDlc} */(this.stage.createActor(ActorButtonDlc)).translate(new Vector2(0, -24 * 0.5));
        const buttonQuit = /** @type {ActorButtonQuit} */(this.stage.createActor(ActorButtonQuit)).translate(new Vector2(0, -24 * 1.5));

        if (STORAGE.get('continue') !== true) {

            buttonContinue.actionDisable();
        }

        buttonDlc.actionDisable();

        this.addFollower(buttonContinue);
        this.addFollower(buttonNewGame);
        this.addFollower(buttonDlc);
        this.addFollower(buttonQuit);

        const checkCommandActivate = () => {

            return this.engine.getInput(EVENTCODES.KEYBOARDAZERTY.ENTER)
            || this.engine.getInput(EVENTCODES.GAMEPADXBOX.A)
            || this.engine.getInput(EVENTCODES.GAMEPADXBOX.START);
        };

        const checkCommandNavigateUp = () => {

            return this.engine.getInput(EVENTCODES.KEYBOARDAZERTY.UP)
            || this.engine.getInput(EVENTCODES.GAMEPADXBOX.UP)
            || this.engine.getInput(EVENTCODES.GAMEPADXBOX.LSUP);
        };

        const checkCommandNavigateDown = () => {

            return this.engine.getInput(EVENTCODES.KEYBOARDAZERTY.DOWN)
            || this.engine.getInput(EVENTCODES.GAMEPADXBOX.DOWN)
            || this.engine.getInput(EVENTCODES.GAMEPADXBOX.LSDOWN);
        };

        this.$finiteStateMachineMenu = new FiniteStateMachine([

            {
                $state: 'INITIATE',
                $transitions: [

                    {
                        $state: 'CONTINUESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCEINITIATE && STORAGE.get('continue') === true
                    },
                    {
                        $state: 'NEWGAMESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCEINITIATE && STORAGE.get('continue') !== true
                    }
                ]
            },
            {
                $state: 'CONTINUESELECTED',
                $onEnter: ({$previous}) => {

                    buttonContinue.actionFocus();

                    if ($previous === 'INITIATE') {

                        return;
                    }

                    if ($previous === 'CONTINUEACTIVATED') {

                        return;
                    }

                    this.addSound(new Sound({

                        $audio: soundNavigation,
                        $volume: 0.5
                    }));
                },
                $onLeave: () => buttonContinue.actionRest(),
                $transitions: [

                    {
                        $state: 'CONTINUEACTIVATED',
                        $condition: () => checkCommandActivate() === true
                    },
                    {
                        $state: 'NEWGAMESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCENAVIGATION && checkCommandNavigateDown() === true && checkCommandNavigateUp() === false && checkCommandActivate() === false
                    }
                ]
            },
            {
                $state: 'CONTINUEACTIVATED',
                $onEnter: () => {

                    buttonContinue.actionActivate();

                    this.addSound(new Sound({

                        $audio: soundSelection,
                        $volume: 0.5
                    }));

                    this.addVibration(new Vibration({

                        $duration: 100,
                        $intensityFrequencyHigh: 1,
                        $intensityFrequencyLow: 0
                    }));
                },
                $onLeave: () => {

                    buttonContinue.actionRest();

                    console.log('Continue');
                },
                $transitions: [

                    {
                        $state: 'CONTINUESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCESELECTION && checkCommandActivate() === false
                    }
                ]
            },
            {
                $state: 'NEWGAMESELECTED',
                $onEnter: ({$previous}) => {

                    buttonNewGame.actionFocus();

                    if ($previous === 'INITIATE') {

                        return;
                    }

                    if ($previous === 'NEWGAMEACTIVATED') {

                        return;
                    }

                    this.addSound(new Sound({

                        $audio: soundNavigation,
                        $volume: 0.5
                    }));
                },
                $onLeave: () => buttonNewGame.actionRest(),
                $transitions: [

                    {
                        $state: 'NEWGAMEACTIVATED',
                        $condition: () => checkCommandActivate() === true
                    },
                    {
                        $state: 'CONTINUESELECTED',
                        $condition: ({$timer}) => STORAGE.get('continue') === true && $timer >= DEBOUNCENAVIGATION && checkCommandNavigateUp() === true && checkCommandNavigateDown() === false && checkCommandActivate() === false
                    },
                    {
                        $state: 'QUITSELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCENAVIGATION && checkCommandNavigateDown() === true && checkCommandNavigateUp() === false && checkCommandActivate() === false
                    }
                ]
            },
            {
                $state: 'NEWGAMEACTIVATED',
                $onEnter: () => {

                    buttonNewGame.actionActivate();

                    this.addSound(new Sound({

                        $audio: soundSelection,
                        $volume: 0.5
                    }));

                    this.addVibration(new Vibration({

                        $duration: 100,
                        $intensityFrequencyHigh: 1,
                        $intensityFrequencyLow: 0
                    }));
                },
                $onLeave: () => {

                    buttonNewGame.actionRest();

                    if (STORAGE.get('continue') !== true) {

                        buttonContinue.actionRest();
                        STORAGE.set('continue', true);
                    }

                    console.log('New Game');
                },
                $transitions: [

                    {
                        $state: 'NEWGAMESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCESELECTION && checkCommandActivate() === false
                    }
                ]
            },
            {
                $state: 'QUITSELECTED',
                $onEnter: ({$previous}) => {

                    buttonQuit.actionFocus();

                    if ($previous === 'QUITACTIVATED') {

                        return;
                    }

                    this.addSound(new Sound({

                        $audio: soundNavigation,
                        $volume: 0.5
                    }));
                },
                $onLeave: () => buttonQuit.actionRest(),
                $transitions: [

                    {
                        $state: 'QUITACTIVATED',
                        $condition: () => checkCommandActivate() === true
                    },
                    {
                        $state: 'NEWGAMESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCENAVIGATION && checkCommandNavigateUp() === true && checkCommandNavigateDown() === false && checkCommandActivate() === false
                    }
                ]
            },
            {
                $state: 'QUITACTIVATED',
                $onEnter: () => {

                    buttonQuit.actionActivate();

                    this.addSound(new Sound({

                        $audio: soundSelection,
                        $volume: 0.5
                    }));

                    this.addVibration(new Vibration({

                        $duration: 100,
                        $intensityFrequencyHigh: 1,
                        $intensityFrequencyLow: 0
                    }));
                },
                $onLeave: () => {

                    buttonQuit.actionRest();

                    if (STORAGE.get('continue') === true) {

                        buttonContinue.actionDisable()
                        STORAGE.set('continue', false);
                    }

                    console.log('Quit');
                },
                $transitions: [

                    {
                        $state: 'QUITSELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCESELECTION && checkCommandActivate() === false
                    }
                ]
            }
        ]);

        this.$finiteStateMachineMenu.initiate('INITIATE');
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onTick']}
     */
    onTick($timetick) {

        this.$finiteStateMachineMenu.update($timetick);
    }
}

export default ActorMenu;
