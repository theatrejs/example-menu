import {Actor, EVENTCODES, FACTORIES, FiniteStateMachine, Sound, STORAGE, UTILS, Vector2, Vibration} from '@theatrejs/theatrejs';

import StageMenu from 'stages/stage-menu.js';

import ActorButtonContinue from 'actors/button-continue/actor-button-continue.js';
import ActorButtonDlc from 'actors/button-dlc/actor-button-dlc.js';
import ActorButtonNewGame from 'actors/button-new-game/actor-button-new-game.js';
import ActorButtonQuit from 'actors/button-quit/actor-button-quit.js';

import soundNavigation from './navigation.mp3';
import soundSelection from './selection.mp3';

class ActorMenu extends FACTORIES.ActorWithPreloadables([

    ActorButtonContinue,
    ActorButtonDlc,
    ActorButtonNewGame,
    ActorButtonQuit,
    FACTORIES.PreloadableSound(soundNavigation),
    FACTORIES.PreloadableSound(soundSelection)
]) {

    /**
     * Stores the 'continue' button.
     * @type {ActorButtonContinue}
     * @private
     */
    $buttonContinue;

    /**
     * Stores the 'new game' button.
     * @type {ActorButtonNewGame}
     * @private
     */
    $buttonNewGame;

    /**
     * Stores the 'DLC' button.
     * @type {ActorButtonDlc}
     * @private
     */
    $buttonDlc;

    /**
     * Stores the 'quit' button.
     * @type {ActorButtonQuit}
     * @private
     */
    $buttonQuit;

    /**
     * Stores the finite state machine.
     * @type {FiniteStateMachine<('INITIATE' | 'CONTINUESELECTED' | 'CONTINUEACTIVATED' | 'NEWGAMESELECTED' | 'NEWGAMEACTIVATED' | 'QUITSELECTED' | 'QUITACTIVATED')>}
     * @private
     */
    $finiteStateMachineMenu;

    /**
     * @type {Actor['onBeforeRemove']}
     */
    onBeforeRemove() {

        this.stage.removeActor(this.$buttonContinue);
        this.stage.removeActor(this.$buttonNewGame);
        this.stage.removeActor(this.$buttonDlc);
        this.stage.removeActor(this.$buttonQuit);
    }

    /**
     * @type {Actor['onCreate']}
     */
    onCreate() {

        this.$buttonContinue = /** @type {ActorButtonContinue} */(this.stage.createActor(ActorButtonContinue)).translate(new Vector2(0, 24 * 1.5));
        this.$buttonNewGame = /** @type {ActorButtonNewGame} */(this.stage.createActor(ActorButtonNewGame)).translate(new Vector2(0, 24 * 0.5));
        this.$buttonDlc = /** @type {ActorButtonDlc} */(this.stage.createActor(ActorButtonDlc)).translate(new Vector2(0, -24 * 0.5));
        this.$buttonQuit = /** @type {ActorButtonQuit} */(this.stage.createActor(ActorButtonQuit)).translate(new Vector2(0, -24 * 1.5));

        if (STORAGE.get('continue') !== true) {

            this.$buttonContinue.actionDisable();
        }

        this.$buttonDlc.actionDisable();

        const DEBOUNCEINITIATE = 800;
        const DEBOUNCENAVIGATION = 200;
        const DEBOUNCEQUIT = 1200;
        const DEBOUNCESELECTION = 800;

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

                    this.$buttonContinue.actionFocus();

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
                $onLeave: () => this.$buttonContinue.actionRest(),
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

                    this.$buttonContinue.actionActivate();

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

                    this.$buttonContinue.actionRest();

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

                    this.$buttonNewGame.actionFocus();

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
                $onLeave: () => this.$buttonNewGame.actionRest(),
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

                    this.$buttonNewGame.actionActivate();

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

                    this.$buttonNewGame.actionRest();

                    if (STORAGE.get('continue') !== true) {

                        this.$buttonContinue.actionRest();
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

                    this.$buttonQuit.actionFocus();

                    if ($previous === 'QUITACTIVATED') {

                        return;
                    }

                    this.addSound(new Sound({

                        $audio: soundNavigation,
                        $volume: 0.5
                    }));
                },
                $onLeave: () => this.$buttonQuit.actionRest(),
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

                    this.$buttonQuit.actionActivate();

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
                $onLeave: async () => {

                    this.$buttonQuit.actionRest();

                    if (STORAGE.get('continue') === true) {

                        this.$buttonContinue.actionDisable();
                        STORAGE.set('continue', false);
                    }

                    console.log('Quit');

                    window.close();

                    window.queueMicrotask(async () => {

                        this.engine.terminate();

                        await UTILS.sleep(1000);

                        this.engine.initiate(60);

                        await this.engine.preloadStage(StageMenu);

                        this.engine.createStage(StageMenu);
                    });
                },
                $transitions: [

                    {
                        $state: 'QUITSELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCEQUIT && checkCommandActivate() === false
                    }
                ]
            }
        ]);

        this.$finiteStateMachineMenu.initiate('INITIATE');
    }

    /**
     * @type {Actor['onSetVisible']}
     */
    onSetVisible($visible) {

        this.$buttonContinue.setVisible($visible);
        this.$buttonNewGame.setVisible($visible);
        this.$buttonDlc.setVisible($visible);
        this.$buttonQuit.setVisible($visible);
    }

    /**
     * @type {Actor['onSetZIndex']}
     */
    onSetZIndex($zIndex) {

        this.$buttonContinue.setZIndex($zIndex);
        this.$buttonNewGame.setZIndex($zIndex);
        this.$buttonDlc.setZIndex($zIndex);
        this.$buttonQuit.setZIndex($zIndex);
    }

    /**
     * @type {Actor['onTick']}
     */
    onTick($timetick) {

        this.$finiteStateMachineMenu.update($timetick);
    }

    /**
     * @type {Actor['onTranslate']}
     */
    onTranslate($vector) {

        this.$buttonContinue.translate($vector);
        this.$buttonNewGame.translate($vector);
        this.$buttonDlc.translate($vector);
        this.$buttonQuit.translate($vector);
    }
}

export default ActorMenu;
