/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var stages_stage_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stages/stage-menu.js */ "./sources/stages/stage-menu.js");




const engine = new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Engine({$container: document.body});
engine.initiate(60);

await engine.preloadStage(stages_stage_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
await _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.UTILS.frame();
engine.createStage(stages_stage_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

__webpack_handle_async_dependencies__();
}, 1);

/***/ }),

/***/ "./sources/actors/actor-menu/navigation.mp3":
/*!**************************************************!*\
  !*** ./sources/actors/actor-menu/navigation.mp3 ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "4378e9fa9e4ca0b2781ec67b69c8af0f.mp3");

/***/ }),

/***/ "./sources/actors/actor-menu/selection.mp3":
/*!*************************************************!*\
  !*** ./sources/actors/actor-menu/selection.mp3 ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f2651d13f4de25921433f7a8c179abd0.mp3");

/***/ }),

/***/ "./sources/actors/actor-menu/actor-menu.js":
/*!*************************************************!*\
  !*** ./sources/actors/actor-menu/actor-menu.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var actors_button_continue_actor_button_continue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actors/button-continue/actor-button-continue.js */ "./sources/actors/button-continue/actor-button-continue.js");
/* harmony import */ var actors_button_dlc_actor_button_dlc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actors/button-dlc/actor-button-dlc.js */ "./sources/actors/button-dlc/actor-button-dlc.js");
/* harmony import */ var actors_button_new_game_actor_button_new_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actors/button-new-game/actor-button-new-game.js */ "./sources/actors/button-new-game/actor-button-new-game.js");
/* harmony import */ var actors_button_quit_actor_button_quit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actors/button-quit/actor-button-quit.js */ "./sources/actors/button-quit/actor-button-quit.js");
/* harmony import */ var _navigation_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation.mp3 */ "./sources/actors/actor-menu/navigation.mp3");
/* harmony import */ var _selection_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection.mp3 */ "./sources/actors/actor-menu/selection.mp3");










class ActorMenu extends (0,_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.ActorPreloadable)([actors_button_continue_actor_button_continue_js__WEBPACK_IMPORTED_MODULE_1__["default"], actors_button_dlc_actor_button_dlc_js__WEBPACK_IMPORTED_MODULE_2__["default"], actors_button_new_game_actor_button_new_game_js__WEBPACK_IMPORTED_MODULE_3__["default"], actors_button_quit_actor_button_quit_js__WEBPACK_IMPORTED_MODULE_4__["default"], _navigation_mp3__WEBPACK_IMPORTED_MODULE_5__["default"], _selection_mp3__WEBPACK_IMPORTED_MODULE_6__["default"]]) {

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

        const buttonContinue = /** @type {ActorButtonContinue} */(this.stage.createActor(actors_button_continue_actor_button_continue_js__WEBPACK_IMPORTED_MODULE_1__["default"])).translate(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 24 * 1.5));
        const buttonNewGame = /** @type {ActorButtonNewGame} */(this.stage.createActor(actors_button_new_game_actor_button_new_game_js__WEBPACK_IMPORTED_MODULE_3__["default"])).translate(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 24 * 0.5));
        const buttonDlc = /** @type {ActorButtonDlc} */(this.stage.createActor(actors_button_dlc_actor_button_dlc_js__WEBPACK_IMPORTED_MODULE_2__["default"])).translate(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, -24 * 0.5));
        const buttonQuit = /** @type {ActorButtonQuit} */(this.stage.createActor(actors_button_quit_actor_button_quit_js__WEBPACK_IMPORTED_MODULE_4__["default"])).translate(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, -24 * 1.5));

        if (_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.get('continue') !== true) {

            buttonContinue.actionDisable();
        }

        buttonDlc.actionDisable();

        this.addFollower(buttonContinue);
        this.addFollower(buttonNewGame);
        this.addFollower(buttonDlc);
        this.addFollower(buttonQuit);

        const checkCommandActivate = () => {

            return this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.KEYBOARDAZERTY.ENTER)
            || this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.A)
            || this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.START);
        };

        const checkCommandNavigateUp = () => {

            return this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.KEYBOARDAZERTY.UP)
            || this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.UP)
            || this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.LSUP);
        };

        const checkCommandNavigateDown = () => {

            return this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.KEYBOARDAZERTY.DOWN)
            || this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.DOWN)
            || this.engine.getInput(_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.LSDOWN);
        };

        this.$finiteStateMachineMenu = new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.FiniteStateMachine([

            {
                $state: 'INITIATE',
                $transitions: [

                    {
                        $state: 'CONTINUESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCEINITIATE && _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.get('continue') === true
                    },
                    {
                        $state: 'NEWGAMESELECTED',
                        $condition: ({$timer}) => $timer >= DEBOUNCEINITIATE && _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.get('continue') !== true
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

                    this.addSound(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sound({

                        $audio: _navigation_mp3__WEBPACK_IMPORTED_MODULE_5__["default"],
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

                    this.addSound(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sound({

                        $audio: _selection_mp3__WEBPACK_IMPORTED_MODULE_6__["default"],
                        $volume: 0.5
                    }));

                    this.addVibration(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vibration({

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

                    this.addSound(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sound({

                        $audio: _navigation_mp3__WEBPACK_IMPORTED_MODULE_5__["default"],
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
                        $condition: ({$timer}) => _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.get('continue') === true && $timer >= DEBOUNCENAVIGATION && checkCommandNavigateUp() === true && checkCommandNavigateDown() === false && checkCommandActivate() === false
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

                    this.addSound(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sound({

                        $audio: _selection_mp3__WEBPACK_IMPORTED_MODULE_6__["default"],
                        $volume: 0.5
                    }));

                    this.addVibration(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vibration({

                        $duration: 100,
                        $intensityFrequencyHigh: 1,
                        $intensityFrequencyLow: 0
                    }));
                },
                $onLeave: () => {

                    buttonNewGame.actionRest();

                    if (_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.get('continue') !== true) {

                        buttonContinue.actionRest();
                        _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.set('continue', true);
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

                    this.addSound(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sound({

                        $audio: _navigation_mp3__WEBPACK_IMPORTED_MODULE_5__["default"],
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

                    this.addSound(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sound({

                        $audio: _selection_mp3__WEBPACK_IMPORTED_MODULE_6__["default"],
                        $volume: 0.5
                    }));

                    this.addVibration(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vibration({

                        $duration: 100,
                        $intensityFrequencyHigh: 1,
                        $intensityFrequencyLow: 0
                    }));
                },
                $onLeave: () => {

                    buttonQuit.actionRest();

                    if (_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.get('continue') === true) {

                        buttonContinue.actionDisable()
                        _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.STORAGE.set('continue', false);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorMenu);


/***/ }),

/***/ "./sources/actors/button-continue/actor-button-continue.js":
/*!*****************************************************************!*\
  !*** ./sources/actors/button-continue/actor-button-continue.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var _button_continue_64x16_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-continue-64x16.json */ "./sources/actors/button-continue/button-continue-64x16.json");
/* harmony import */ var _button_continue_64x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-continue-64x16.png */ "./sources/actors/button-continue/button-continue-64x16.png");





class ActorButtonContinue extends (0,_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.ActorPreloadable)([_button_continue_64x16_png__WEBPACK_IMPORTED_MODULE_2__]) {

    /**
     * Stores sprite data.
     * @type {typedatasprite}
     * @private
     */
    $data;

    /**
     * Stores the timeline.
     * @type {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $timeline;

    /**
     * Creates an animated timeline for the spritesheet.
     * @param {typedataspriteframe[]} $frames The sprite frames data.
     * @param {typedataspritesize} $size The sprite size data.
     * @returns {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $createTimeline($frames, $size) {

        return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Timeline([

            ...($frames.map(($frame, $index) => {

                const {x, y, width, height} = $frame;

                const sprite = new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sprite({

                    $frameSource: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.AABB(

                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(x / $size.width, y / $size.height),
                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2((x + width) / $size.width, (y + height) / $size.height)
                    ),
                    $sizeTarget: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(width, height),
                    $textureColor: _button_continue_64x16_png__WEBPACK_IMPORTED_MODULE_2__
                });

                return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                    $onEnter: () => {

                        this.setSprite(sprite);
                    },
                    $timecode: $index * (1000 / 10)
                });
            })),
            new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                $onEnter: ($timeline) => {

                    $timeline.seekTimecode(0);
                },
                $timecode: $frames.length * (1000 / 10)
            })
        ]);
    }

    /**
     * Triggers the 'activate' action.
     * @public
     */
    actionActivate() {

        this.$timeline = this.$createTimeline(this.$data.frames.active, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'disable' action.
     * @public
     */
    actionDisable() {

        this.$timeline = this.$createTimeline(this.$data.frames.disabled, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'focus' action.
     * @public
     */
    actionFocus() {

        this.$timeline = this.$createTimeline(this.$data.frames.focus, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'rest' action.
     * @public
     */
    actionRest() {

        this.$timeline = this.$createTimeline(this.$data.frames.idle, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onCreate']}
     */
    onCreate() {

        this.$data = _button_continue_64x16_json__WEBPACK_IMPORTED_MODULE_1__;

        this.actionRest();
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onTick']}
     */
    onTick($timetick) {

        this.$timeline.tick($timetick);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorButtonContinue);


/***/ }),

/***/ "./sources/actors/button-dlc/actor-button-dlc.js":
/*!*******************************************************!*\
  !*** ./sources/actors/button-dlc/actor-button-dlc.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var _button_dlc_64x16_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-dlc-64x16.json */ "./sources/actors/button-dlc/button-dlc-64x16.json");
/* harmony import */ var _button_dlc_64x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-dlc-64x16.png */ "./sources/actors/button-dlc/button-dlc-64x16.png");





class ActorButtonDlc extends (0,_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.ActorPreloadable)([_button_dlc_64x16_png__WEBPACK_IMPORTED_MODULE_2__]) {

    /**
     * Stores sprite data.
     * @type {typedatasprite}
     * @private
     */
    $data;

    /**
     * Stores the timeline.
     * @type {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $timeline;

    /**
     * Creates an animated timeline for the spritesheet.
     * @param {typedataspriteframe[]} $frames The sprite frames data.
     * @param {typedataspritesize} $size The sprite size data.
     * @returns {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $createTimeline($frames, $size) {

        return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Timeline([

            ...($frames.map(($frame, $index) => {

                const {x, y, width, height} = $frame;

                const sprite = new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sprite({

                    $frameSource: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.AABB(

                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(x / $size.width, y / $size.height),
                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2((x + width) / $size.width, (y + height) / $size.height)
                    ),
                    $sizeTarget: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(width, height),
                    $textureColor: _button_dlc_64x16_png__WEBPACK_IMPORTED_MODULE_2__
                });

                return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                    $onEnter: () => {

                        this.setSprite(sprite);
                    },
                    $timecode: $index * (1000 / 10)
                });
            })),
            new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                $onEnter: ($timeline) => {

                    $timeline.seekTimecode(0);
                },
                $timecode: $frames.length * (1000 / 10)
            })
        ]);
    }

    /**
     * Triggers the 'activate' action.
     * @public
     */
    actionActivate() {

        this.$timeline = this.$createTimeline(this.$data.frames.active, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'disable' action.
     * @public
     */
    actionDisable() {

        this.$timeline = this.$createTimeline(this.$data.frames.disabled, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'focus' action.
     * @public
     */
    actionFocus() {

        this.$timeline = this.$createTimeline(this.$data.frames.focus, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'rest' action.
     * @public
     */
    actionRest() {

        this.$timeline = this.$createTimeline(this.$data.frames.idle, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onCreate']}
     */
    onCreate() {

        this.$data = _button_dlc_64x16_json__WEBPACK_IMPORTED_MODULE_1__;

        this.actionRest();
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onTick']}
     */
    onTick($timetick) {

        this.$timeline.tick($timetick);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorButtonDlc);


/***/ }),

/***/ "./sources/actors/button-new-game/actor-button-new-game.js":
/*!*****************************************************************!*\
  !*** ./sources/actors/button-new-game/actor-button-new-game.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var _button_new_game_64x16_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-new-game-64x16.json */ "./sources/actors/button-new-game/button-new-game-64x16.json");
/* harmony import */ var _button_new_game_64x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-new-game-64x16.png */ "./sources/actors/button-new-game/button-new-game-64x16.png");





class ActorButtonNewGame extends (0,_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.ActorPreloadable)([_button_new_game_64x16_png__WEBPACK_IMPORTED_MODULE_2__]) {

    /**
     * Stores sprite data.
     * @type {typedatasprite}
     * @private
     */
    $data;

    /**
     * Stores the timeline.
     * @type {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $timeline;

    /**
     * Creates an animated timeline for the spritesheet.
     * @param {typedataspriteframe[]} $frames The sprite frames data.
     * @param {typedataspritesize} $size The sprite size data.
     * @returns {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $createTimeline($frames, $size) {

        return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Timeline([

            ...($frames.map(($frame, $index) => {

                const {x, y, width, height} = $frame;

                const sprite = new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sprite({

                    $frameSource: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.AABB(

                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(x / $size.width, y / $size.height),
                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2((x + width) / $size.width, (y + height) / $size.height)
                    ),
                    $sizeTarget: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(width, height),
                    $textureColor: _button_new_game_64x16_png__WEBPACK_IMPORTED_MODULE_2__
                });

                return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                    $onEnter: () => {

                        this.setSprite(sprite);
                    },
                    $timecode: $index * (1000 / 10)
                });
            })),
            new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                $onEnter: ($timeline) => {

                    $timeline.seekTimecode(0);
                },
                $timecode: $frames.length * (1000 / 10)
            })
        ]);
    }

    /**
     * Triggers the 'activate' action.
     * @public
     */
    actionActivate() {

        this.$timeline = this.$createTimeline(this.$data.frames.active, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'disable' action.
     * @public
     */
    actionDisable() {

        this.$timeline = this.$createTimeline(this.$data.frames.disabled, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'focus' action.
     * @public
     */
    actionFocus() {

        this.$timeline = this.$createTimeline(this.$data.frames.focus, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'rest' action.
     * @public
     */
    actionRest() {

        this.$timeline = this.$createTimeline(this.$data.frames.idle, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onCreate']}
     */
    onCreate() {

        this.$data = _button_new_game_64x16_json__WEBPACK_IMPORTED_MODULE_1__;

        this.actionRest();
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onTick']}
     */
    onTick($timetick) {

        this.$timeline.tick($timetick);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorButtonNewGame);


/***/ }),

/***/ "./sources/actors/button-quit/actor-button-quit.js":
/*!*********************************************************!*\
  !*** ./sources/actors/button-quit/actor-button-quit.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var _button_quit_64x16_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button-quit-64x16.json */ "./sources/actors/button-quit/button-quit-64x16.json");
/* harmony import */ var _button_quit_64x16_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button-quit-64x16.png */ "./sources/actors/button-quit/button-quit-64x16.png");





class ActorButtonQuit extends (0,_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.ActorPreloadable)([_button_quit_64x16_png__WEBPACK_IMPORTED_MODULE_2__]) {

    /**
     * Stores sprite data.
     * @type {typedatasprite}
     * @private
     */
    $data;

    /**
     * Stores the timeline.
     * @type {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $timeline;

    /**
     * Creates an animated timeline for the spritesheet.
     * @param {typedataspriteframe[]} $frames The sprite frames data.
     * @param {typedataspritesize} $size The sprite size data.
     * @returns {import('@theatrejs/theatrejs').Timeline}
     * @private
     */
    $createTimeline($frames, $size) {

        return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Timeline([

            ...($frames.map(($frame, $index) => {

                const {x, y, width, height} = $frame;

                const sprite = new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Sprite({

                    $frameSource: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.AABB(

                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(x / $size.width, y / $size.height),
                        new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2((x + width) / $size.width, (y + height) / $size.height)
                    ),
                    $sizeTarget: new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(width, height),
                    $textureColor: _button_quit_64x16_png__WEBPACK_IMPORTED_MODULE_2__
                });

                return new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                    $onEnter: () => {

                        this.setSprite(sprite);
                    },
                    $timecode: $index * (1000 / 10)
                });
            })),
            new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.TimelineKeyframe({

                $onEnter: ($timeline) => {

                    $timeline.seekTimecode(0);
                },
                $timecode: $frames.length * (1000 / 10)
            })
        ]);
    }

    /**
     * Triggers the 'activate' action.
     * @public
     */
    actionActivate() {

        this.$timeline = this.$createTimeline(this.$data.frames.active, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'disable' action.
     * @public
     */
    actionDisable() {

        this.$timeline = this.$createTimeline(this.$data.frames.disabled, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'focus' action.
     * @public
     */
    actionFocus() {

        this.$timeline = this.$createTimeline(this.$data.frames.focus, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'rest' action.
     * @public
     */
    actionRest() {

        this.$timeline = this.$createTimeline(this.$data.frames.idle, this.$data.sprite);
        this.$timeline.seekTimecode(0);
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onCreate']}
     */
    onCreate() {

        this.$data = _button_quit_64x16_json__WEBPACK_IMPORTED_MODULE_1__;

        this.actionRest();
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onTick']}
     */
    onTick($timetick) {

        this.$timeline.tick($timetick);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorButtonQuit);


/***/ }),

/***/ "./sources/stages/stage-menu.js":
/*!**************************************!*\
  !*** ./sources/stages/stage-menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @theatrejs/theatrejs */ "./node_modules/@theatrejs/theatrejs/sources/index.js");
/* harmony import */ var actors_actor_menu_actor_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actors/actor-menu/actor-menu.js */ "./sources/actors/actor-menu/actor-menu.js");




class StageMenu extends (0,_theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.StagePreloadable)([actors_actor_menu_actor_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]]) {

    /**
     * @type {import('@theatrejs/theatrejs').Stage['onCreate']}
     */
    onCreate() {

        this.engine.setColor(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector3(27 / 255, 36 / 255, 71 / 255));
        this.engine.setResolution(new _theatrejs_theatrejs__WEBPACK_IMPORTED_MODULE_0__.Vector2(480, 360));

        this.createActor(actors_actor_menu_actor_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StageMenu);


/***/ }),

/***/ "./sources/actors/button-continue/button-continue-64x16.png":
/*!******************************************************************!*\
  !*** ./sources/actors/button-continue/button-continue-64x16.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45385cb9802e161df407.png";

/***/ }),

/***/ "./sources/actors/button-dlc/button-dlc-64x16.png":
/*!********************************************************!*\
  !*** ./sources/actors/button-dlc/button-dlc-64x16.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b9a71887e5413fa264c.png";

/***/ }),

/***/ "./sources/actors/button-new-game/button-new-game-64x16.png":
/*!******************************************************************!*\
  !*** ./sources/actors/button-new-game/button-new-game-64x16.png ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67f54bb77cfb6805833b.png";

/***/ }),

/***/ "./sources/actors/button-quit/button-quit-64x16.png":
/*!**********************************************************!*\
  !*** ./sources/actors/button-quit/button-quit-64x16.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82de72dbd7b0f16cfa3e.png";

/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/collidertypes.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/collidertypes.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DYNAMIC": () => (/* binding */ DYNAMIC),
/* harmony export */   "KINETIC": () => (/* binding */ KINETIC),
/* harmony export */   "STATIC": () => (/* binding */ STATIC)
/* harmony export */ });
/**
 * The dynamic collider type.
 * @type {'DYNAMIC'}
 * @constant
 */
const DYNAMIC = 'DYNAMIC';

/**
 * The kinetic collider type.
 * @type {'KINETIC'}
 * @constant
 */
const KINETIC = 'KINETIC';

/**
 * The static collider type.
 * @type {'STATIC'}
 * @constant
 */
const STATIC = 'STATIC';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/contenttypes.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/contenttypes.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUDIOMPEG": () => (/* binding */ AUDIOMPEG),
/* harmony export */   "AUDIOWAVE": () => (/* binding */ AUDIOWAVE),
/* harmony export */   "IMAGEJPEG": () => (/* binding */ IMAGEJPEG),
/* harmony export */   "IMAGEPNG": () => (/* binding */ IMAGEPNG)
/* harmony export */ });
/**
 * The audio/mpeg Content-Type.
 * @type {'audio/mpeg'}
 * @constant
 */
const AUDIOMPEG = 'audio/mpeg';

/**
 * The audio/wave Content-Type.
 * @type {'audio/wave'}
 * @constant
 */
const AUDIOWAVE = 'audio/wave';

/**
 * The image/jpeg Content-Type.
 * @type {'image/jpeg'}
 * @constant
 */
const IMAGEJPEG = 'image/jpeg';

/**
 * The image/png Content-Type.
 * @type {'image/png'}
 * @constant
 */
const IMAGEPNG = 'image/png';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAMEPADXBOX": () => (/* reexport module object */ _eventcodes_gamepad_xbox_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "KEYBOARDAZERTY": () => (/* reexport module object */ _eventcodes_keyboard_azerty_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "KEYBOARDQWERTY": () => (/* reexport module object */ _eventcodes_keyboard_qwerty_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _eventcodes_gamepad_xbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventcodes/gamepad.xbox.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/gamepad.xbox.js");
/* harmony import */ var _eventcodes_keyboard_azerty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventcodes/keyboard.azerty.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azerty.js");
/* harmony import */ var _eventcodes_keyboard_qwerty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventcodes/keyboard.qwerty.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwerty.js");







/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/gamepad.xbox.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/gamepad.xbox.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "LB": () => (/* binding */ LB),
/* harmony export */   "RB": () => (/* binding */ RB),
/* harmony export */   "LT": () => (/* binding */ LT),
/* harmony export */   "RT": () => (/* binding */ RT),
/* harmony export */   "BACK": () => (/* binding */ BACK),
/* harmony export */   "START": () => (/* binding */ START),
/* harmony export */   "LSB": () => (/* binding */ LSB),
/* harmony export */   "RSB": () => (/* binding */ RSB),
/* harmony export */   "UP": () => (/* binding */ UP),
/* harmony export */   "DOWN": () => (/* binding */ DOWN),
/* harmony export */   "LEFT": () => (/* binding */ LEFT),
/* harmony export */   "RIGHT": () => (/* binding */ RIGHT),
/* harmony export */   "XBOX": () => (/* binding */ XBOX),
/* harmony export */   "LSLEFT": () => (/* binding */ LSLEFT),
/* harmony export */   "LSRIGHT": () => (/* binding */ LSRIGHT),
/* harmony export */   "LSUP": () => (/* binding */ LSUP),
/* harmony export */   "LSDOWN": () => (/* binding */ LSDOWN),
/* harmony export */   "RSLEFT": () => (/* binding */ RSLEFT),
/* harmony export */   "RSRIGHT": () => (/* binding */ RSRIGHT),
/* harmony export */   "RSUP": () => (/* binding */ RSUP),
/* harmony export */   "RSDOWN": () => (/* binding */ RSDOWN),
/* harmony export */   "CONNECTED": () => (/* binding */ CONNECTED),
/* harmony export */   "DISCONNECTED": () => (/* binding */ DISCONNECTED),
/* harmony export */   "VIBRATEEND": () => (/* binding */ VIBRATEEND),
/* harmony export */   "VIBRATESTART": () => (/* binding */ VIBRATESTART)
/* harmony export */ });
/**
 * The XBOX gamepad 'A' event code.
 * @type {'ClusterRightButtonBottom'}
 * @constant
 */
const A = 'ClusterRightButtonBottom';

/**
 * The XBOX gamepad 'B' event code.
 * @type {'ClusterRightButtonRight'}
 * @constant
 */
const B = 'ClusterRightButtonRight';

/**
 * The XBOX gamepad 'X' event code.
 * @type {'ClusterRightButtonLeft'}
 * @constant
 */
const X = 'ClusterRightButtonLeft';

/**
 * The XBOX gamepad 'Y' event code.
 * @type {'ClusterRightButtonTop'}
 * @constant
 */
const Y = 'ClusterRightButtonTop';

/**
 * The XBOX gamepad 'LB' event code.
 * @type {'ClusterFrontButtonTopLeft'}
 * @constant
 */
const LB = 'ClusterFrontButtonTopLeft';

/**
 * The XBOX gamepad 'RB' event code.
 * @type {'ClusterFrontButtonTopRight'}
 * @constant
 */
const RB = 'ClusterFrontButtonTopRight';

/**
 * The XBOX gamepad 'LT' event code.
 * @type {'ClusterFrontButtonBottomLeft'}
 * @constant
 */
const LT = 'ClusterFrontButtonBottomLeft';

/**
 * The XBOX gamepad 'RT' event code.
 * @type {'ClusterFrontButtonBottomRight'}
 * @constant
 */
const RT = 'ClusterFrontButtonBottomRight';

/**
 * The XBOX gamepad 'BACK' event code.
 * @type {'ClusterCenterButtonLeft'}
 * @constant
 */
const BACK = 'ClusterCenterButtonLeft';

/**
 * The XBOX gamepad 'START' event code.
 * @type {'ClusterCenterButtonRight'}
 * @constant
 */
const START = 'ClusterCenterButtonRight';

/**
 * The XBOX gamepad 'LSB' event code.
 * @type {'StickLeftButton'}
 * @constant
 */
const LSB = 'StickLeftButton';

/**
 * The XBOX gamepad 'RSB' event code.
 * @type {'StickRightButton'}
 * @constant
 */
const RSB = 'StickRightButton';

/**
 * The XBOX gamepad 'UP' event code.
 * @type {'ClusterLeftButtonTop'}
 * @constant
 */
const UP = 'ClusterLeftButtonTop';

/**
 * The XBOX gamepad 'DOWN' event code.
 * @type {'ClusterLeftButtonBottom'}
 * @constant
 */
const DOWN = 'ClusterLeftButtonBottom';

/**
 * The XBOX gamepad 'LEFT' event code.
 * @type {'ClusterLeftButtonLeft'}
 * @constant
 */
const LEFT = 'ClusterLeftButtonLeft';

/**
 * The XBOX gamepad 'RIGHT' event code.
 * @type {'ClusterLeftButtonRight'}
 * @constant
 */
const RIGHT = 'ClusterLeftButtonRight';

/**
 * The XBOX gamepad 'XBOX' event code.
 * @type {'ClusterCenterButtonCenter'}
 * @constant
 */
const XBOX = 'ClusterCenterButtonCenter';

/**
 * The XBOX gamepad 'LSLEFT' event code.
 * @type {'StickLeftLeft'}
 * @constant
 */
const LSLEFT = 'StickLeftLeft';

/**
 * The XBOX gamepad 'LSRIGHT' event code.
 * @type {'StickLeftRight'}
 * @constant
 */
const LSRIGHT = 'StickLeftRight';

/**
 * The XBOX gamepad 'LSUP' event code.
 * @type {'StickLeftUp'}
 * @constant
 */
const LSUP = 'StickLeftUp';

/**
 * The XBOX gamepad 'LSDOWN' event code.
 * @type {'StickLeftDown'}
 * @constant
 */
const LSDOWN = 'StickLeftDown';

/**
 * The XBOX gamepad 'RSLEFT' event code.
 * @type {'StickRightLeft'}
 * @constant
 */
const RSLEFT = 'StickRightLeft';

/**
 * The XBOX gamepad 'RSRIGHT' event code.
 * @type {'StickRightRight'}
 * @constant
 */
const RSRIGHT = 'StickRightRight';

/**
 * The XBOX gamepad 'RSUP' event code.
 * @type {'StickRightUp'}
 * @constant
 */
const RSUP = 'StickRightUp';

/**
 * The XBOX gamepad 'RSDOWN' event code.
 * @type {'StickRightDown'}
 * @constant
 */
const RSDOWN = 'StickRightDown';

/**
 * The XBOX gamepad 'CONNECTED' event code.
 * @type {'Connected'}
 * @constant
 */
const CONNECTED = 'Connected';

/**
 * The XBOX gamepad 'DISCONNECTED' event code.
 * @type {'Disconnected'}
 * @constant
 */
const DISCONNECTED = 'Disconnected';

/**
 * The XBOX gamepad 'VIBRATEEND' event code.
 * @type {'VibrateEnd'}
 * @constant
 */
const VIBRATEEND = 'VibrateEnd';

/**
 * The XBOX gamepad 'VIBRATESTART' event code.
 * @type {'VibrateStart'}
 * @constant
 */
const VIBRATESTART = 'VibrateStart';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azerty.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azerty.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGIT0": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT0),
/* harmony export */   "DIGIT1": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT1),
/* harmony export */   "DIGIT2": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT2),
/* harmony export */   "DIGIT3": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT3),
/* harmony export */   "DIGIT4": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT4),
/* harmony export */   "DIGIT5": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT5),
/* harmony export */   "DIGIT6": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT6),
/* harmony export */   "DIGIT7": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT7),
/* harmony export */   "DIGIT8": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT8),
/* harmony export */   "DIGIT9": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT9),
/* harmony export */   "A": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "B": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "C": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "D": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "E": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "F": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "G": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "H": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "I": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "J": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "K": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "L": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "M": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "N": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "O": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "P": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "Q": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "R": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "S": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "T": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "U": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "V": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "W": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "X": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "Y": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "Z": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "SPACE": () => (/* reexport safe */ _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.SPACE),
/* harmony export */   "ENTER": () => (/* reexport safe */ _keyboard_azertyeditors_js__WEBPACK_IMPORTED_MODULE_1__.ENTER),
/* harmony export */   "DELETE": () => (/* reexport safe */ _keyboard_azertyeditors_js__WEBPACK_IMPORTED_MODULE_1__.DELETE),
/* harmony export */   "F1": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F1),
/* harmony export */   "F2": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F2),
/* harmony export */   "F3": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F3),
/* harmony export */   "F4": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F4),
/* harmony export */   "F5": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F5),
/* harmony export */   "F6": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F6),
/* harmony export */   "F7": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F7),
/* harmony export */   "F8": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F8),
/* harmony export */   "F9": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F9),
/* harmony export */   "F10": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F10),
/* harmony export */   "F11": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F11),
/* harmony export */   "F12": () => (/* reexport safe */ _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F12),
/* harmony export */   "CAPSLOCK": () => (/* reexport safe */ _keyboard_azertylockers_js__WEBPACK_IMPORTED_MODULE_3__.CAPSLOCK),
/* harmony export */   "ALTLEFT": () => (/* reexport safe */ _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.ALTLEFT),
/* harmony export */   "ALTRIGHT": () => (/* reexport safe */ _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.ALTRIGHT),
/* harmony export */   "CONTROLLEFT": () => (/* reexport safe */ _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.CONTROLLEFT),
/* harmony export */   "CONTROLRIGHT": () => (/* reexport safe */ _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.CONTROLRIGHT),
/* harmony export */   "SHIFTLEFT": () => (/* reexport safe */ _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.SHIFTLEFT),
/* harmony export */   "SHIFTRIGHT": () => (/* reexport safe */ _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.SHIFTRIGHT),
/* harmony export */   "TAB": () => (/* reexport safe */ _keyboard_azertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.TAB),
/* harmony export */   "UP": () => (/* reexport safe */ _keyboard_azertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.UP),
/* harmony export */   "LEFT": () => (/* reexport safe */ _keyboard_azertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.LEFT),
/* harmony export */   "RIGHT": () => (/* reexport safe */ _keyboard_azertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.RIGHT),
/* harmony export */   "DOWN": () => (/* reexport safe */ _keyboard_azertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.DOWN),
/* harmony export */   "CONTEXTMENU": () => (/* reexport safe */ _keyboard_azertysystems_js__WEBPACK_IMPORTED_MODULE_6__.CONTEXTMENU),
/* harmony export */   "ESCAPE": () => (/* reexport safe */ _keyboard_azertysystems_js__WEBPACK_IMPORTED_MODULE_6__.ESCAPE)
/* harmony export */ });
/* harmony import */ var _keyboard_azertycharacters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.azertycharacters.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertycharacters.js");
/* harmony import */ var _keyboard_azertyeditors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.azertyeditors.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertyeditors.js");
/* harmony import */ var _keyboard_azertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard.azertyfunctions.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertyfunctions.js");
/* harmony import */ var _keyboard_azertylockers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard.azertylockers.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertylockers.js");
/* harmony import */ var _keyboard_azertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyboard.azertymodifiers.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertymodifiers.js");
/* harmony import */ var _keyboard_azertynavigators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyboard.azertynavigators.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertynavigators.js");
/* harmony import */ var _keyboard_azertysystems_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyboard.azertysystems.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertysystems.js");











/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertycharacters.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertycharacters.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGIT0": () => (/* binding */ DIGIT0),
/* harmony export */   "DIGIT1": () => (/* binding */ DIGIT1),
/* harmony export */   "DIGIT2": () => (/* binding */ DIGIT2),
/* harmony export */   "DIGIT3": () => (/* binding */ DIGIT3),
/* harmony export */   "DIGIT4": () => (/* binding */ DIGIT4),
/* harmony export */   "DIGIT5": () => (/* binding */ DIGIT5),
/* harmony export */   "DIGIT6": () => (/* binding */ DIGIT6),
/* harmony export */   "DIGIT7": () => (/* binding */ DIGIT7),
/* harmony export */   "DIGIT8": () => (/* binding */ DIGIT8),
/* harmony export */   "DIGIT9": () => (/* binding */ DIGIT9),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "J": () => (/* binding */ J),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "O": () => (/* binding */ O),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "T": () => (/* binding */ T),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "V": () => (/* binding */ V),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z),
/* harmony export */   "SPACE": () => (/* binding */ SPACE)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'DIGIT0' event code.
 * @type {'Digit0'}
 * @constant
 */
const DIGIT0 = 'Digit0';

/**
 * The AZERTY-based keyboard 'DIGIT1' event code.
 * @type {'Digit1'}
 * @constant
 */
const DIGIT1 = 'Digit1';

/**
 * The AZERTY-based keyboard 'DIGIT2' event code.
 * @type {'Digit2'}
 * @constant
 */
const DIGIT2 = 'Digit2';

/**
 * The AZERTY-based keyboard 'DIGIT3' event code.
 * @type {'Digit3'}
 * @constant
 */
const DIGIT3 = 'Digit3';

/**
 * The AZERTY-based keyboard 'DIGIT4' event code.
 * @type {'Digit4'}
 * @constant
 */
const DIGIT4 = 'Digit4';

/**
 * The AZERTY-based keyboard 'DIGIT5' event code.
 * @type {'Digit5'}
 * @constant
 */
const DIGIT5 = 'Digit5';

/**
 * The AZERTY-based keyboard 'DIGIT6' event code.
 * @type {'Digit6'}
 * @constant
 */
const DIGIT6 = 'Digit6';

/**
 * The AZERTY-based keyboard 'DIGIT7' event code.
 * @type {'Digit7'}
 * @constant
 */
const DIGIT7 = 'Digit7';

/**
 * The AZERTY-based keyboard 'DIGIT8' event code.
 * @type {'Digit8'}
 * @constant
 */
const DIGIT8 = 'Digit8';

/**
 * The AZERTY-based keyboard 'DIGIT9' event code.
 * @type {'Digit9'}
 * @constant
 */
const DIGIT9 = 'Digit9';

/**
 * The AZERTY-based keyboard 'A' event code.
 * @type {'KeyQ'}
 * @constant
 */
const A = 'KeyQ';

/**
 * The AZERTY-based keyboard 'B' event code.
 * @type {'KeyB'}
 * @constant
 */
const B = 'KeyB';

/**
 * The AZERTY-based keyboard 'C' event code.
 * @type {'KeyB'}
 * @constant
 */
const C = 'KeyB';

/**
 * The AZERTY-based keyboard 'D' event code.
 * @type {'KeyD'}
 * @constant
 */
const D = 'KeyD';

/**
 * The AZERTY-based keyboard 'E' event code.
 * @type {'KeyE'}
 * @constant
 */
const E = 'KeyE';

/**
 * The AZERTY-based keyboard 'F' event code.
 * @type {'KeyF'}
 * @constant
 */
const F = 'KeyF';

/**
 * The AZERTY-based keyboard 'G' event code.
 * @type {'KeyG'}
 * @constant
 */
const G = 'KeyG';

/**
 * The AZERTY-based keyboard 'H' event code.
 * @type {'KeyH'}
 * @constant
 */
const H = 'KeyH';

/**
 * The AZERTY-based keyboard 'I' event code.
 * @type {'KeyI'}
 * @constant
 */
const I = 'KeyI';

/**
 * The AZERTY-based keyboard 'J' event code.
 * @type {'KeyJ'}
 * @constant
 */
const J = 'KeyJ';

/**
 * The AZERTY-based keyboard 'K' event code.
 * @type {'KeyK'}
 * @constant
 */
const K = 'KeyK';

/**
 * The AZERTY-based keyboard 'L' event code.
 * @type {'KeyL'}
 * @constant
 */
const L = 'KeyL';

/**
 * The AZERTY-based keyboard 'M' event code.
 * @type {'Semicolon'}
 * @constant
 */
const M = 'Semicolon';

/**
 * The AZERTY-based keyboard 'N' event code.
 * @type {'KeyN'}
 * @constant
 */
const N = 'KeyN';

/**
 * The AZERTY-based keyboard 'O' event code.
 * @type {'KeyO'}
 * @constant
 */
const O = 'KeyO';

/**
 * The AZERTY-based keyboard 'P' event code.
 * @type {'KeyP'}
 * @constant
 */
const P = 'KeyP';

/**
 * The AZERTY-based keyboard 'Q' event code.
 * @type {'KeyA'}
 * @constant
 */
const Q = 'KeyA';

/**
 * The AZERTY-based keyboard 'R' event code.
 * @type {'KeyR'}
 * @constant
 */
const R = 'KeyR';

/**
 * The AZERTY-based keyboard 'S' event code.
 * @type {'KeyS'}
 * @constant
 */
const S = 'KeyS';

/**
 * The AZERTY-based keyboard 'T' event code.
 * @type {'KeyT'}
 * @constant
 */
const T = 'KeyT';

/**
 * The AZERTY-based keyboard 'U' event code.
 * @type {'KeyU'}
 * @constant
 */
const U = 'KeyU';

/**
 * The AZERTY-based keyboard 'V' event code.
 * @type {'KeyV'}
 * @constant
 */
const V = 'KeyV';

/**
 * The AZERTY-based keyboard 'W' event code.
 * @type {'KeyZ'}
 * @constant
 */
const W = 'KeyZ';

/**
 * The AZERTY-based keyboard 'X' event code.
 * @type {'KeyX'}
 * @constant
 */
const X = 'KeyX';

/**
 * The AZERTY-based keyboard 'Y' event code.
 * @type {'KeyY'}
 * @constant
 */
const Y = 'KeyY';

/**
 * The AZERTY-based keyboard 'Z' event code.
 * @type {'KeyW'}
 * @constant
 */
const Z = 'KeyW';

/**
 * The AZERTY-based keyboard 'SPACE' event code.
 * @type {'Space'}
 * @constant
 */
const SPACE = 'Space';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertyeditors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertyeditors.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DELETE": () => (/* binding */ DELETE),
/* harmony export */   "ENTER": () => (/* binding */ ENTER)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'DELETE' event code.
 * @type {'Delete'}
 * @constant
 */
const DELETE = 'Delete';

/**
 * The AZERTY-based keyboard 'ENTER' event code.
 * @type {'Enter'}
 * @constant
 */
const ENTER = 'Enter';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertyfunctions.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertyfunctions.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F1": () => (/* binding */ F1),
/* harmony export */   "F2": () => (/* binding */ F2),
/* harmony export */   "F3": () => (/* binding */ F3),
/* harmony export */   "F4": () => (/* binding */ F4),
/* harmony export */   "F5": () => (/* binding */ F5),
/* harmony export */   "F6": () => (/* binding */ F6),
/* harmony export */   "F7": () => (/* binding */ F7),
/* harmony export */   "F8": () => (/* binding */ F8),
/* harmony export */   "F9": () => (/* binding */ F9),
/* harmony export */   "F10": () => (/* binding */ F10),
/* harmony export */   "F11": () => (/* binding */ F11),
/* harmony export */   "F12": () => (/* binding */ F12)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'F1' event code.
 * @type {'F1'}
 * @constant
 */
const F1 = 'F1';

/**
 * The AZERTY-based keyboard 'F2' event code.
 * @type {'F2'}
 * @constant
 */
const F2 = 'F2';

/**
 * The AZERTY-based keyboard 'F3' event code.
 * @type {'F3'}
 * @constant
 */
const F3 = 'F3';

/**
 * The AZERTY-based keyboard 'F4' event code.
 * @type {'F4'}
 * @constant
 */
const F4 = 'F4';

/**
 * The AZERTY-based keyboard 'F5' event code.
 * @type {'F5'}
 * @constant
 */
const F5 = 'F5';

/**
 * The AZERTY-based keyboard 'F6' event code.
 * @type {'F6'}
 * @constant
 */
const F6 = 'F6';

/**
 * The AZERTY-based keyboard 'F7' event code.
 * @type {'F7'}
 * @constant
 */
const F7 = 'F7';

/**
 * The AZERTY-based keyboard 'F8' event code.
 * @type {'F8'}
 * @constant
 */
const F8 = 'F8';

/**
 * The AZERTY-based keyboard 'F9' event code.
 * @type {'F9'}
 * @constant
 */
const F9 = 'F9';

/**
 * The AZERTY-based keyboard 'F10' event code.
 * @type {'F10'}
 * @constant
 */
const F10 = 'F10';

/**
 * The AZERTY-based keyboard 'F11' event code.
 * @type {'F11'}
 * @constant
 */
const F11 = 'F11';

/**
 * The AZERTY-based keyboard 'F12' event code.
 * @type {'F12'}
 * @constant
 */
const F12 = 'F12';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertylockers.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertylockers.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAPSLOCK": () => (/* binding */ CAPSLOCK)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'CAPSLOCK' event code.
 * @type {'CapsLock'}
 * @constant
 */
const CAPSLOCK = 'CapsLock';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertymodifiers.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertymodifiers.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTROLLEFT": () => (/* binding */ CONTROLLEFT),
/* harmony export */   "CONTROLRIGHT": () => (/* binding */ CONTROLRIGHT),
/* harmony export */   "ALTLEFT": () => (/* binding */ ALTLEFT),
/* harmony export */   "ALTRIGHT": () => (/* binding */ ALTRIGHT),
/* harmony export */   "SHIFTLEFT": () => (/* binding */ SHIFTLEFT),
/* harmony export */   "SHIFTRIGHT": () => (/* binding */ SHIFTRIGHT)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'ALTLEFT' event code.
 * @type {'AltLeft'}
 * @constant
 */
const ALTLEFT = 'AltLeft';

/**
 * The AZERTY-based keyboard 'ALTRIGHT' event code.
 * @type {'AltRight'}
 * @constant
 */
const ALTRIGHT = 'AltRight';

/**
 * The AZERTY-based keyboard 'CONTROLLEFT' event code.
 * @type {'ControlLeft'}
 * @constant
 */
const CONTROLLEFT = 'ControlLeft';

/**
 * The AZERTY-based keyboard 'CONTROLRIGHT' event code.
 * @type {'ControlRight'}
 * @constant
 */
const CONTROLRIGHT = 'ControlRight';

/**
 * The AZERTY-based keyboard 'SHIFTLEFT' event code.
 * @type {'ShiftLeft'}
 * @constant
 */
const SHIFTLEFT = 'ShiftLeft';

/**
 * The AZERTY-based keyboard 'SHIFTRIGHT' event code.
 * @type {'ShiftRight'}
 * @constant
 */
const SHIFTRIGHT = 'ShiftRight';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertynavigators.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertynavigators.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAB": () => (/* binding */ TAB),
/* harmony export */   "UP": () => (/* binding */ UP),
/* harmony export */   "LEFT": () => (/* binding */ LEFT),
/* harmony export */   "RIGHT": () => (/* binding */ RIGHT),
/* harmony export */   "DOWN": () => (/* binding */ DOWN)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'TAB' event code.
 * @type {'Tab'}
 * @constant
 */
const TAB = 'Tab';

/**
 * The AZERTY-based keyboard 'UP' event code.
 * @type {'ArrowUp'}
 * @constant
 */
const UP = 'ArrowUp';

/**
 * The AZERTY-based keyboard 'LEFT' event code.
 * @type {'ArrowLeft'}
 * @constant
 */
const LEFT = 'ArrowLeft';

/**
 * The AZERTY-based keyboard 'RIGHT' event code.
 * @type {'ArrowRight'}
 * @constant
 */
const RIGHT = 'ArrowRight';

/**
 * The AZERTY-based keyboard 'DOWN' event code.
 * @type {'ArrowDown'}
 * @constant
 */
const DOWN = 'ArrowDown';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertysystems.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.azertysystems.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTEXTMENU": () => (/* binding */ CONTEXTMENU),
/* harmony export */   "ESCAPE": () => (/* binding */ ESCAPE)
/* harmony export */ });
/**
 * The AZERTY-based keyboard 'ESCAPE' event code.
 * @type {'ContextMenu'}
 * @constant
 */
const CONTEXTMENU = 'ContextMenu';

/**
 * The AZERTY-based keyboard 'ESCAPE' event code.
 * @type {'Escape'}
 * @constant
 */
const ESCAPE = 'Escape';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwerty.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwerty.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGIT0": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT0),
/* harmony export */   "DIGIT1": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT1),
/* harmony export */   "DIGIT2": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT2),
/* harmony export */   "DIGIT3": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT3),
/* harmony export */   "DIGIT4": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT4),
/* harmony export */   "DIGIT5": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT5),
/* harmony export */   "DIGIT6": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT6),
/* harmony export */   "DIGIT7": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT7),
/* harmony export */   "DIGIT8": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT8),
/* harmony export */   "DIGIT9": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.DIGIT9),
/* harmony export */   "A": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "B": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   "C": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "D": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "E": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "F": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   "G": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "H": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   "I": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "J": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   "K": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   "L": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "M": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   "N": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   "O": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   "P": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "Q": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   "R": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "S": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "T": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   "U": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   "V": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "W": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   "X": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   "Y": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   "Z": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "SPACE": () => (/* reexport safe */ _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__.SPACE),
/* harmony export */   "ENTER": () => (/* reexport safe */ _keyboard_qwertyeditors_js__WEBPACK_IMPORTED_MODULE_1__.ENTER),
/* harmony export */   "DELETE": () => (/* reexport safe */ _keyboard_qwertyeditors_js__WEBPACK_IMPORTED_MODULE_1__.DELETE),
/* harmony export */   "F1": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F1),
/* harmony export */   "F2": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F2),
/* harmony export */   "F3": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F3),
/* harmony export */   "F4": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F4),
/* harmony export */   "F5": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F5),
/* harmony export */   "F6": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F6),
/* harmony export */   "F7": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F7),
/* harmony export */   "F8": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F8),
/* harmony export */   "F9": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F9),
/* harmony export */   "F10": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F10),
/* harmony export */   "F11": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F11),
/* harmony export */   "F12": () => (/* reexport safe */ _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__.F12),
/* harmony export */   "CAPSLOCK": () => (/* reexport safe */ _keyboard_qwertylockers_js__WEBPACK_IMPORTED_MODULE_3__.CAPSLOCK),
/* harmony export */   "ALTLEFT": () => (/* reexport safe */ _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.ALTLEFT),
/* harmony export */   "ALTRIGHT": () => (/* reexport safe */ _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.ALTRIGHT),
/* harmony export */   "CONTROLLEFT": () => (/* reexport safe */ _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.CONTROLLEFT),
/* harmony export */   "CONTROLRIGHT": () => (/* reexport safe */ _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.CONTROLRIGHT),
/* harmony export */   "SHIFTLEFT": () => (/* reexport safe */ _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.SHIFTLEFT),
/* harmony export */   "SHIFTRIGHT": () => (/* reexport safe */ _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__.SHIFTRIGHT),
/* harmony export */   "TAB": () => (/* reexport safe */ _keyboard_qwertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.TAB),
/* harmony export */   "UP": () => (/* reexport safe */ _keyboard_qwertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.UP),
/* harmony export */   "LEFT": () => (/* reexport safe */ _keyboard_qwertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.LEFT),
/* harmony export */   "RIGHT": () => (/* reexport safe */ _keyboard_qwertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.RIGHT),
/* harmony export */   "DOWN": () => (/* reexport safe */ _keyboard_qwertynavigators_js__WEBPACK_IMPORTED_MODULE_5__.DOWN),
/* harmony export */   "CONTEXTMENU": () => (/* reexport safe */ _keyboard_qwertysystems_js__WEBPACK_IMPORTED_MODULE_6__.CONTEXTMENU),
/* harmony export */   "ESCAPE": () => (/* reexport safe */ _keyboard_qwertysystems_js__WEBPACK_IMPORTED_MODULE_6__.ESCAPE)
/* harmony export */ });
/* harmony import */ var _keyboard_qwertycharacters_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard.qwertycharacters.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertycharacters.js");
/* harmony import */ var _keyboard_qwertyeditors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard.qwertyeditors.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertyeditors.js");
/* harmony import */ var _keyboard_qwertyfunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyboard.qwertyfunctions.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertyfunctions.js");
/* harmony import */ var _keyboard_qwertylockers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard.qwertylockers.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertylockers.js");
/* harmony import */ var _keyboard_qwertymodifiers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keyboard.qwertymodifiers.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertymodifiers.js");
/* harmony import */ var _keyboard_qwertynavigators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keyboard.qwertynavigators.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertynavigators.js");
/* harmony import */ var _keyboard_qwertysystems_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyboard.qwertysystems.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertysystems.js");











/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertycharacters.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertycharacters.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DIGIT0": () => (/* binding */ DIGIT0),
/* harmony export */   "DIGIT1": () => (/* binding */ DIGIT1),
/* harmony export */   "DIGIT2": () => (/* binding */ DIGIT2),
/* harmony export */   "DIGIT3": () => (/* binding */ DIGIT3),
/* harmony export */   "DIGIT4": () => (/* binding */ DIGIT4),
/* harmony export */   "DIGIT5": () => (/* binding */ DIGIT5),
/* harmony export */   "DIGIT6": () => (/* binding */ DIGIT6),
/* harmony export */   "DIGIT7": () => (/* binding */ DIGIT7),
/* harmony export */   "DIGIT8": () => (/* binding */ DIGIT8),
/* harmony export */   "DIGIT9": () => (/* binding */ DIGIT9),
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "J": () => (/* binding */ J),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "O": () => (/* binding */ O),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "T": () => (/* binding */ T),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "V": () => (/* binding */ V),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z),
/* harmony export */   "SPACE": () => (/* binding */ SPACE)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'DIGIT0' event code.
 * @type {'Digit0'}
 * @constant
 */
const DIGIT0 = 'Digit0';

/**
 * The QWERTY-based keyboard 'DIGIT1' event code.
 * @type {'Digit1'}
 * @constant
 */
const DIGIT1 = 'Digit1';

/**
 * The QWERTY-based keyboard 'DIGIT2' event code.
 * @type {'Digit2'}
 * @constant
 */
const DIGIT2 = 'Digit2';

/**
 * The QWERTY-based keyboard 'DIGIT3' event code.
 * @type {'Digit3'}
 * @constant
 */
const DIGIT3 = 'Digit3';

/**
 * The QWERTY-based keyboard 'DIGIT4' event code.
 * @type {'Digit4'}
 * @constant
 */
const DIGIT4 = 'Digit4';

/**
 * The QWERTY-based keyboard 'DIGIT5' event code.
 * @type {'Digit5'}
 * @constant
 */
const DIGIT5 = 'Digit5';

/**
 * The QWERTY-based keyboard 'DIGIT6' event code.
 * @type {'Digit6'}
 * @constant
 */
const DIGIT6 = 'Digit6';

/**
 * The QWERTY-based keyboard 'DIGIT7' event code.
 * @type {'Digit7'}
 * @constant
 */
const DIGIT7 = 'Digit7';

/**
 * The QWERTY-based keyboard 'DIGIT8' event code.
 * @type {'Digit8'}
 * @constant
 */
const DIGIT8 = 'Digit8';

/**
 * The QWERTY-based keyboard 'DIGIT9' event code.
 * @type {'Digit9'}
 * @constant
 */
const DIGIT9 = 'Digit9';

/**
 * The QWERTY-based keyboard 'A' event code.
 * @type {'KeyA'}
 * @constant
 */
const A = 'KeyA';

/**
 * The QWERTY-based keyboard 'B' event code.
 * @type {'KeyB'}
 * @constant
 */
const B = 'KeyB';

/**
 * The QWERTY-based keyboard 'C' event code.
 * @type {'KeyC'}
 * @constant
 */
const C = 'KeyC';

/**
 * The QWERTY-based keyboard 'D' event code.
 * @type {'KeyD'}
 * @constant
 */
const D = 'KeyD';

/**
 * The QWERTY-based keyboard 'E' event code.
 * @type {'KeyE'}
 * @constant
 */
const E = 'KeyE';

/**
 * The QWERTY-based keyboard 'F' event code.
 * @type {'KeyF'}
 * @constant
 */
const F = 'KeyF';

/**
 * The QWERTY-based keyboard 'G' event code.
 * @type {'KeyG'}
 * @constant
 */
const G = 'KeyG';

/**
 * The QWERTY-based keyboard 'H' event code.
 * @type {'KeyH'}
 * @constant
 */
const H = 'KeyH';

/**
 * The QWERTY-based keyboard 'I' event code.
 * @type {'KeyI'}
 * @constant
 */
const I = 'KeyI';

/**
 * The QWERTY-based keyboard 'J' event code.
 * @type {'KeyJ'}
 * @constant
 */
const J = 'KeyJ';

/**
 * The QWERTY-based keyboard 'K' event code.
 * @type {'KeyK'}
 * @constant
 */
const K = 'KeyK';

/**
 * The QWERTY-based keyboard 'L' event code.
 * @type {'KeyL'}
 * @constant
 */
const L = 'KeyL';

/**
 * The QWERTY-based keyboard 'M' event code.
 * @type {'KeyM'}
 * @constant
 */
const M = 'KeyM';

/**
 * The QWERTY-based keyboard 'N' event code.
 * @type {'KeyN'}
 * @constant
 */
const N = 'KeyN';

/**
 * The QWERTY-based keyboard 'O' event code.
 * @type {'KeyO'}
 * @constant
 */
const O = 'KeyO';

/**
 * The QWERTY-based keyboard 'P' event code.
 * @type {'KeyP'}
 * @constant
 */
const P = 'KeyP';

/**
 * The QWERTY-based keyboard 'Q' event code.
 * @type {'KeyQ'}
 * @constant
 */
const Q = 'KeyQ';

/**
 * The QWERTY-based keyboard 'R' event code.
 * @type {'KeyR'}
 * @constant
 */
const R = 'KeyR';

/**
 * The QWERTY-based keyboard 'S' event code.
 * @type {'KeyS'}
 * @constant
 */
const S = 'KeyS';

/**
 * The QWERTY-based keyboard 'T' event code.
 * @type {'KeyT'}
 * @constant
 */
const T = 'KeyT';

/**
 * The QWERTY-based keyboard 'U' event code.
 * @type {'KeyU'}
 * @constant
 */
const U = 'KeyU';

/**
 * The QWERTY-based keyboard 'V' event code.
 * @type {'KeyV'}
 * @constant
 */
const V = 'KeyV';

/**
 * The QWERTY-based keyboard 'W' event code.
 * @type {'KeyW'}
 * @constant
 */
const W = 'KeyW';

/**
 * The QWERTY-based keyboard 'X' event code.
 * @type {'KeyX'}
 * @constant
 */
const X = 'KeyX';

/**
 * The QWERTY-based keyboard 'Y' event code.
 * @type {'KeyY'}
 * @constant
 */
const Y = 'KeyY';

/**
 * The QWERTY-based keyboard 'Z' event code.
 * @type {'KeyZ'}
 * @constant
 */
const Z = 'KeyZ';

/**
 * The QWERTY-based keyboard 'SPACE' event code.
 * @type {'Space'}
 * @constant
 */
const SPACE = 'Space';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertyeditors.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertyeditors.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DELETE": () => (/* binding */ DELETE),
/* harmony export */   "ENTER": () => (/* binding */ ENTER)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'DELETE' event code.
 * @type {'Delete'}
 * @constant
 */
const DELETE = 'Delete';

/**
 * The QWERTY-based keyboard 'ENTER' event code.
 * @type {'Enter'}
 * @constant
 */
const ENTER = 'Enter';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertyfunctions.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertyfunctions.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F1": () => (/* binding */ F1),
/* harmony export */   "F2": () => (/* binding */ F2),
/* harmony export */   "F3": () => (/* binding */ F3),
/* harmony export */   "F4": () => (/* binding */ F4),
/* harmony export */   "F5": () => (/* binding */ F5),
/* harmony export */   "F6": () => (/* binding */ F6),
/* harmony export */   "F7": () => (/* binding */ F7),
/* harmony export */   "F8": () => (/* binding */ F8),
/* harmony export */   "F9": () => (/* binding */ F9),
/* harmony export */   "F10": () => (/* binding */ F10),
/* harmony export */   "F11": () => (/* binding */ F11),
/* harmony export */   "F12": () => (/* binding */ F12)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'F1' event code.
 * @type {'F1'}
 * @constant
 */
const F1 = 'F1';

/**
 * The QWERTY-based keyboard 'F2' event code.
 * @type {'F2'}
 * @constant
 */
const F2 = 'F2';

/**
 * The QWERTY-based keyboard 'F3' event code.
 * @type {'F3'}
 * @constant
 */
const F3 = 'F3';

/**
 * The QWERTY-based keyboard 'F4' event code.
 * @type {'F4'}
 * @constant
 */
const F4 = 'F4';

/**
 * The QWERTY-based keyboard 'F5' event code.
 * @type {'F5'}
 * @constant
 */
const F5 = 'F5';

/**
 * The QWERTY-based keyboard 'F6' event code.
 * @type {'F6'}
 * @constant
 */
const F6 = 'F6';

/**
 * The QWERTY-based keyboard 'F7' event code.
 * @type {'F7'}
 * @constant
 */
const F7 = 'F7';

/**
 * The QWERTY-based keyboard 'F8' event code.
 * @type {'F8'}
 * @constant
 */
const F8 = 'F8';

/**
 * The QWERTY-based keyboard 'F9' event code.
 * @type {'F9'}
 * @constant
 */
const F9 = 'F9';

/**
 * The QWERTY-based keyboard 'F10' event code.
 * @type {'F10'}
 * @constant
 */
const F10 = 'F10';

/**
 * The QWERTY-based keyboard 'F11' event code.
 * @type {'F11'}
 * @constant
 */
const F11 = 'F11';

/**
 * The QWERTY-based keyboard 'F12' event code.
 * @type {'F12'}
 * @constant
 */
const F12 = 'F12';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertylockers.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertylockers.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAPSLOCK": () => (/* binding */ CAPSLOCK)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'CAPSLOCK' event code.
 * @type {'CapsLock'}
 * @constant
 */
const CAPSLOCK = 'CapsLock';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertymodifiers.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertymodifiers.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTROLLEFT": () => (/* binding */ CONTROLLEFT),
/* harmony export */   "CONTROLRIGHT": () => (/* binding */ CONTROLRIGHT),
/* harmony export */   "ALTLEFT": () => (/* binding */ ALTLEFT),
/* harmony export */   "ALTRIGHT": () => (/* binding */ ALTRIGHT),
/* harmony export */   "SHIFTLEFT": () => (/* binding */ SHIFTLEFT),
/* harmony export */   "SHIFTRIGHT": () => (/* binding */ SHIFTRIGHT)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'ALTLEFT' event code.
 * @type {'AltLeft'}
 * @constant
 */
const ALTLEFT = 'AltLeft';

/**
 * The QWERTY-based keyboard 'ALTRIGHT' event code.
 * @type {'AltRight'}
 * @constant
 */
const ALTRIGHT = 'AltRight';

/**
 * The QWERTY-based keyboard 'CONTROLLEFT' event code.
 * @type {'ControlLeft'}
 * @constant
 */
const CONTROLLEFT = 'ControlLeft';

/**
 * The QWERTY-based keyboard 'CONTROLRIGHT' event code.
 * @type {'ControlRight'}
 * @constant
 */
const CONTROLRIGHT = 'ControlRight';

/**
 * The QWERTY-based keyboard 'SHIFTLEFT' event code.
 * @type {'ShiftLeft'}
 * @constant
 */
const SHIFTLEFT = 'ShiftLeft';

/**
 * The QWERTY-based keyboard 'SHIFTRIGHT' event code.
 * @type {'ShiftRight'}
 * @constant
 */
const SHIFTRIGHT = 'ShiftRight';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertynavigators.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertynavigators.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAB": () => (/* binding */ TAB),
/* harmony export */   "UP": () => (/* binding */ UP),
/* harmony export */   "LEFT": () => (/* binding */ LEFT),
/* harmony export */   "RIGHT": () => (/* binding */ RIGHT),
/* harmony export */   "DOWN": () => (/* binding */ DOWN)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'TAB' event code.
 * @type {'Tab'}
 * @constant
 */
const TAB = 'Tab';

/**
 * The QWERTY-based keyboard 'UP' event code.
 * @type {'ArrowUp'}
 * @constant
 */
const UP = 'ArrowUp';

/**
 * The QWERTY-based keyboard 'LEFT' event code.
 * @type {'ArrowLeft'}
 * @constant
 */
const LEFT = 'ArrowLeft';

/**
 * The QWERTY-based keyboard 'RIGHT' event code.
 * @type {'ArrowRight'}
 * @constant
 */
const RIGHT = 'ArrowRight';

/**
 * The QWERTY-based keyboard 'DOWN' event code.
 * @type {'ArrowDown'}
 * @constant
 */
const DOWN = 'ArrowDown';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertysystems.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes/keyboard.qwertysystems.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONTEXTMENU": () => (/* binding */ CONTEXTMENU),
/* harmony export */   "ESCAPE": () => (/* binding */ ESCAPE)
/* harmony export */ });
/**
 * The QWERTY-based keyboard 'ESCAPE' event code.
 * @type {'ContextMenu'}
 * @constant
 */
const CONTEXTMENU = 'ContextMenu';

/**
 * The QWERTY-based keyboard 'ESCAPE' event code.
 * @type {'Escape'}
 * @constant
 */
const ESCAPE = 'Escape';




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/constants/mathematics.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/constants/mathematics.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RADIANS": () => (/* binding */ RADIANS)
/* harmony export */ });
/**
 * The value to convert an angle from degrees to radians.
 * @type {number}
 * @constant
 */
const RADIANS = Math.PI / 180;




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/aabb.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/aabb.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AABB": () => (/* binding */ AABB),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates AABBs.
 *
 * @example
 *
 * const aabb = new AABB(new Vector2(-1, -1), new Vector2(1, 1));
 */
class AABB {

    /**
     * Stores the maximum values of the AABB.
     * @type {import('../index.js').Vector2}
     * @private
     */
    $maximum;

    /**
     * Stores the minimum values of the AABB.
     * @type {import('../index.js').Vector2}
     * @private
     */
    $minimum;

    /**
     * Gets the center of the AABB.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get center() {

        return this.minimum.clone().add(this.halfSize);
    }

    /**
     * Gets the half-size of the AABB.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get halfSize() {

        return this.size.clone().scale(0.5);
    }

    /**
     * Gets the maximum values of the AABB.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get maximum() {

        return this.$maximum;
    }

    /**
     * Gets the minimum values of the AABB.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get minimum() {

        return this.$minimum;
    }

    /**
     * Gets the size of the AABB.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get size() {

        return this.$maximum.clone().subtract(this.$minimum);
    }

    /**
     * Creates a new AABB.
     * @param {import('../index.js').Vector2} $minimum The minimum values of the AABB to create.
     * @param {import('../index.js').Vector2} $maximum The maximum values of the AABB to create.
     */
    constructor($minimum, $maximum) {

        this.$maximum = $maximum;
        this.$minimum = $minimum;
    }

    /**
     * Gets the manhattan distance between two AABBs.
     * @param {import('../index.js').AABB} $a The first AABB to compare.
     * @param {import('../index.js').AABB} $b The second AABB to compare.
     * @returns {number}
     * @public
     * @static
     */
    static distanceManhattan($a, $b) {

        const distanceX = AABB.distanceX($a, $b);
        const distanceY = AABB.distanceY($a, $b);

        if (distanceX > 0 || distanceY > 0) {

            return Math.max(distanceX, 0) + Math.max(distanceY, 0);
        }

        return distanceX + distanceY;
    }

    /**
     * Gets the distance between two AABBs on the x-axis.
     * @param {import('../index.js').AABB} $a The first AABB to compare.
     * @param {import('../index.js').AABB} $b The second AABB to compare.
     * @returns {number}
     * @public
     * @static
     */
    static distanceX($a, $b) {

        const distanceCenter = Math.abs($b.center.x - $a.center.x);
        const distanceMinimum = $a.halfSize.x + $b.halfSize.x;

        return distanceCenter - distanceMinimum;
    }

    /**
     * Gets the distance between two AABBs on the y-axis.
     * @param {import('../index.js').AABB} $a The first AABB to compare.
     * @param {import('../index.js').AABB} $b The second AABB to compare.
     * @returns {number}
     * @public
     * @static
     */
    static distanceY($a, $b) {

        const distanceCenter = Math.abs($b.center.y - $a.center.y);
        const distanceMinimum = $a.halfSize.y + $b.halfSize.y;

        return distanceCenter - distanceMinimum;
    }

    /**
     * Creates a new AABB from the given AABB.
     * @param {import('../index.js').AABB} $aabb The given AABB.
     * @returns {import('../index.js').AABB}
     * @public
     * @static
     */
    static from($aabb) {

        return $aabb.clone();
    }

    /**
     * Gets the delta penetration between two AABBs strictly overlaping with each other on the x-axis (the common area).
     * @param {import('../index.js').AABB} $a The first AABB to compare.
     * @param {import('../index.js').AABB} $b The second AABB to compare.
     * @returns {number}
     * @public
     * @static
     */
    static overlapX($a, $b) {

        const distanceCenter = Math.abs($b.center.x - $a.center.x);
        const distanceMinimum = $a.halfSize.x + $b.halfSize.x;

        return distanceMinimum - distanceCenter;
    }

    /**
     * Gets the delta penetration between two AABBs strictly overlaping with each other on the y-axis (the common area).
     * @param {import('../index.js').AABB} $a The first AABB to compare.
     * @param {import('../index.js').AABB} $b The second AABB to compare.
     * @returns {number}
     * @public
     * @static
     */
    static overlapY($a, $b) {

        const distanceCenter = Math.abs($b.center.y - $a.center.y);
        const distanceMinimum = $a.halfSize.y + $b.halfSize.y;

        return distanceMinimum - distanceCenter;
    }

    /**
     * Clones the AABB.
     * @returns {import('../index.js').AABB}
     * @public
     */
    clone() {

        return new AABB(this.$minimum, this.$maximum);
    }

    /**
     * Translates the AABB in the world space from a third person point of view.
     * @param {import('../index.js').Vector2} $vector The translation to apply.
     * @returns {this}
     * @public
     */
    translate($vector) {

        this.$maximum = this.$maximum.clone().add($vector);
        this.$minimum = this.$minimum.clone().add($vector);

        return this;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AABB);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/actor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/actor.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Actor": () => (/* binding */ Actor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Abstract actors.
 *
 * @example
 *
 * class ActorExample extends Actor {}
 */
class Actor {

    /**
     * Stores the preloadable assets.
     * @type {string[]}
     * @public
     * @static
     */
    static preloadables = [];

    /**
     * Stores the collider.
     * @type {import('../index.js').Collider}
     * @private
     */
    $collider;

    /**
     * Stores the components.
     * @type {Object.<string, any>}
     * @private
     */
    $components;

    /**
     * Stores the follower actors.
     * @type {Set<import('../index.js').Actor>}
     * @private
     */
    $followers;

    /**
     * Stores the sounds.
     * @type {import('../index.js').Sound[]}
     * @private
     */
    $sounds;

    /**
     * Stores the sprite.
     * @type {import('../index.js').Sprite}
     * @private
     */
    $sprite;

    /**
     * Stores the current stage.
     * @type {import('../index.js').Stage}
     * @private
     */
    $stage;

    /**
     * Stores the position.
     * @type {import('../index.js').Vector2}
     * @private
     */
    $translation;

    /**
     * Stores the uuid.
     * @type {string}
     * @private
     */
    $uuid;

    /**
     * Stores the vibrations.
     * @type {import('../index.js').Vibration[]}
     * @private
     */
    $vibrations;

    /**
     * Stores the z-index.
     * @type {number}
     * @private
     */
    $zIndex;

    /**
     * Gets the collider.
     * @type {import('../index.js').Collider}
     * @public
     */
    get collider() {

        return this.$collider;
    }

    /**
     * Gets the current engine.
     * @type {import('../index.js').Engine}
     * @public
     */
    get engine() {

        return this.stage.engine;
    }

    /**
     * Gets the follower actors.
     * @type {Actor[]}
     * @public
     */
    get followers() {

        return Array.from(this.$followers);
    }

    /**
     * Gets the sounds.
     * @type {import('../index.js').Sound[]}
     * @public
     */
    get sounds() {

        return this.$sounds;
    }

    /**
     * Gets the sprite.
     * @type {import('../index.js').Sprite}
     * @public
     */
    get sprite() {

        return this.$sprite;
    }

    /**
     * Gets the current stage.
     * @type {import('../index.js').Stage}
     * @public
     */
    get stage() {

        return this.$stage;
    }

    /**
     * Gets the position.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get translation() {

        return this.$translation;
    }

    /**
     * Gets the uuid.
     * @type {string}
     * @public
     */
    get uuid() {

        return this.$uuid;
    }

    /**
     * Gets the vibrations.
     * @type {import('../index.js').Vibration[]}
     * @public
     */
    get vibrations() {

        return this.$vibrations;
    }

    /**
     * Gets the z-index.
     * @type {number}
     * @public
     */
    get zIndex() {

        return this.$zIndex;
    }

    /**
     * Create a new actor.
     * @param {import('../index.js').Stage} $stage The stage on which to create the actor.
     */
    constructor($stage) {

        this.$stage = $stage;

        this.$components = {};
        this.$followers = new Set();
        this.$sounds = [];
        this.$translation = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0);
        this.$uuid = _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.uuid();
        this.$vibrations = [];
        this.$zIndex = 0;
    }

    /**
     * Adds a follower actor.
     * @param {import('../index.js').Actor} $actor The follower actor to add.
     * @returns {this}
     * @public
     */
    addFollower($actor) {

        this.$followers.add($actor);

        return this;
    }

    /**
     * Adds the given sound.
     * @param {import('../index.js').Sound} $sound The sound to add.
     * @returns {this}
     * @public
     */
    addSound($sound) {

        this.$sounds.push($sound);

        return this;
    }

    /**
     * Adds the given vibration.
     * @param {import('../index.js').Vibration} $vibration The vibration to add.
     * @returns {this}
     * @public
     */
    addVibration($vibration) {

        this.$vibrations.push($vibration);

        return this;
    }

    /**
     * Gets a component.
     * @param {string} $name The name of the component to get.
     * @returns {any}
     * @public
     */
    getComponent($name) {

        return this.$components[$name];
    }

    /**
     * Checks if the actor has a collider.
     * @returns {boolean}
     * @public
     */
    hasCollider() {

        return this.$collider instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.Collider;
    }

    /**
     * Checks if the actor has the given component.
     * @param {string} $name The name of the component to check.
     * @returns {boolean}
     * @public
     */
    hasComponent($name) {

        return this.$components.hasOwnProperty($name) === true;
    }

    /**
     * Checks if the actor has the given follower actor.
     * @param {import('../index.js').Actor} $actor The actor to check.
     * @returns {boolean}
     * @public
     */
    hasFollower($actor) {

        return this.$followers.has($actor) === true;
    }

    /**
     * Checks if the actor has a sprite.
     * @returns {boolean}
     * @public
     */
    hasSprite() {

        return this.$sprite instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.Sprite;
    }

    /**
     * Called just after removing the actor.
     * @public
     */
    onAfterRemove() {}

    /**
     * Called just before removing the actor.
     * @public
     */
    onBeforeRemove() {}

    /**
     * Called when a collision is being resolved.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').Actor} $parameters.$actor The colliding actor.
     * @param {boolean} $parameters.$east If the origin of collision is facing the east face.
     * @param {boolean} $parameters.$north If the origin of collision is facing the north face.
     * @param {boolean} $parameters.$south If the origin of collision is facing the south face.
     * @param {boolean} $parameters.$west If the origin of collision is facing the west face.
     * @public
     */
    onCollide({$actor, $east, $north, $south, $west}) {}

    /**
     * Called when a collision is being entered.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').Actor} $parameters.$actor The colliding actor.
     * @param {boolean} $parameters.$east If the origin of collision is facing the east face.
     * @param {boolean} $parameters.$north If the origin of collision is facing the north face.
     * @param {boolean} $parameters.$south If the origin of collision is facing the south face.
     * @param {boolean} $parameters.$west If the origin of collision is facing the west face.
     * @public
     */
    onCollideEnter({$actor, $east, $north, $south, $west}) {}

    /**
     * Called when a collision is being left.
     * @param {import('../index.js').Actor} $actor The colliding actor.
     * @public
     */
    onCollideLeave($actor) {}

    /**
     * Called when the actor is being created.
     * @public
     */
    onCreate() {}

    /**
     * Called when a sound is finishing playing.
     * @param {import('../index.js').Sound} $sound The sound.
     * @public
     */
    onSoundFinish($sound) {}

    /**
     * Called when the actor is being updated by one tick update.
     * @param {number} $timetick The tick duration (in ms).
     * @public
     */
    onTick($timetick) {}

    /**
     * Removes a follower actor.
     * @param {import('../index.js').Actor} $actor The follower actor to remove.
     * @returns {this}
     * @public
     */
    removeFollower($actor) {

        this.$followers.delete($actor);

        return this;
    }

    /**
     * Removes the given sound.
     * @param {import('../index.js').Sound} $sound The sound to remove.
     * @returns {this}
     * @public
     */
    removeSound($sound) {

        _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.extract($sound, this.$sounds);

        return this;
    }

    /**
     * Removes all sound.
     * @returns {this}
     * @public
     */
    removeSounds() {

        this.$sounds = [];

        return this;
    }

    /**
     * Removes the given vibration.
     * @param {import('../index.js').Vibration} $vibration The vibration to remove.
     * @returns {this}
     * @public
     */
    removeVibration($vibration) {

        _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.extract($vibration, this.$vibrations);

        return this;
    }

    /**
     * Removes all vibration.
     * @returns {this}
     * @public
     */
    removeVibrations() {

        this.$vibrations = [];

        return this;
    }

    /**
     * Sets the collider.
     * @param {import('../index.js').Collider} $collider The collider to set.
     * @returns {this}
     * @public
     */
    setCollider($collider) {

        this.$collider = $collider;

        return this;
    }

    /**
     * Sets a component.
     * @param {string} $name The name of the component to set.
     * @param {any} $component The value of the component to set.
     * @returns {this}
     * @public
     */
    setComponent($name, $component) {

        this.$components[$name] = $component;

        return this;
    }

    /**
     * Sets the sprite.
     * @param {import('../index.js').Sprite} $sprite The sprite to set.
     * @returns {this}
     * @public
     */
    setSprite($sprite) {

        this.$sprite = $sprite;

        return this;
    }

    /**
     * Sets the z-index.
     * @param {number} $zIndex The z-index to set.
     * @returns {this}
     * @public
     */
    setZIndex($zIndex) {

        this.$zIndex = $zIndex;

        return this;
    }

    /**
     * Translates the actor in the world space from a third person point of view.
     * @param {import('../index.js').Vector2} $vector The translation to apply.
     * @returns {this}
     * @public
     */
    translate($vector) {

        const translation = $vector.clone();

        Array.from(this.$followers).forEach(($follower) => {

            if (this.stage.hasActor($follower) === false) {

                this.$followers.delete($follower);

                return;
            }

            $follower.translate(translation);
        });

        this.$translation.add(translation);

        return this;
    }

    /**
     * Translates the actor in the world space to the given position.
     * @param {import('../index.js').Vector2} $vector The position to translate to.
     * @returns {this}
     * @public
     */
    translateTo($vector) {

        const translation = $vector.clone().subtract(this.$translation);

        Array.from(this.$followers).forEach(($follower) => {

            if (this.stage.hasActor($follower) === false) {

                this.$followers.delete($follower);

                return;
            }

            $follower.translate(translation);
        });

        this.$translation.add(translation);

        return this;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Actor);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/actorpreloadable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/actorpreloadable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActorPreloadable": () => (/* binding */ ActorPreloadable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Factores an actor with preloadable assets.
 * @param {(string | typeof import('../index.js').Actor)[]} $preloadables The preloadable assets (mix of preloadable assets and/or actors with preloadable assets).
 * @returns {typeof import('../index.js').Actor}
 */
function ActorPreloadable($preloadables = []) {

    /**
     * @type {Set<string>}
     */
    const preloadables = new Set();

    $preloadables.forEach(($preloadable) => {

        if (typeof $preloadable === 'string') {

            if (preloadables.has($preloadable) === true) {

                return;
            }

            preloadables.add($preloadable);

            return;
        }

        if (typeof $preloadable === typeof _index_js__WEBPACK_IMPORTED_MODULE_0__.Actor) {

            $preloadable.preloadables.forEach(($preloadable) => {

                if (preloadables.has($preloadable) === true) {

                    return;
                }

                preloadables.add($preloadable);
            });

            return;
        }
    });

    return class extends _index_js__WEBPACK_IMPORTED_MODULE_0__.Actor {

        /**
         * @type {typeof import('../index.js').Actor.preloadables}
         */
        static preloadables = Array.from(preloadables);
    };
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorPreloadable);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/collider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/collider.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collider": () => (/* binding */ Collider),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates colliders.
 *
 * @example
 *
 * const collider = new Collider({$boundaries, $traversable, $type});
 */
class Collider {

    /**
     * @typedef {(import('../index.js').COLLIDERTYPES.DYNAMIC | import('../index.js').COLLIDERTYPES.KINETIC | import('../index.js').COLLIDERTYPES.STATIC)} typecollider A collider type.
     */

    /**
     * Stores the boundaries.
     * @type {import('../index.js').AABB}
     * @private
     */
    $boundaries;

    /**
     * Stores the traversable status.
     * @type {boolean}
     * @private
     */
    $traversable;

    /**
     * Stores the collider type.
     * @type {typecollider}
     * @private
     */
    $type;

    /**
     * Gets the boundaries.
     * @type {import('../index.js').AABB}
     * @public
     */
    get boundaries() {

        return this.$boundaries;
    }

    /**
     * Gets the traversable status.
     * @type {boolean}
     * @public
     */
    get traversable() {

        return this.$traversable;
    }

    /**
     * Gets the collider type.
     * @type {typecollider}
     * @public
     */
    get type() {

        return this.$type;
    }

    /**
     * Creates a new collider.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').AABB} $parameters.$boundaries The boundaries of the collider to create.
     * @param {boolean} [$parameters.$traversable] The traversable status of the collider to create.
     * @param {typecollider} $parameters.$type The type of the collider to create.
     */
    constructor({$boundaries, $traversable = false, $type}) {

        this.$boundaries = $boundaries;
        this.$traversable = $traversable;
        this.$type = $type;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collider);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/engine.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/engine.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Engine": () => (/* binding */ Engine),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates game engines.
 *
 * @example
 *
 * const engine = new Engine({$color, $container, $resolution});
 * engine.initiate(60);
 *
 * await engine.preloadStage(SceneExample);
 *
 * engine.createStage(SceneExample);
 */
class Engine {

    /**
     * Stores the rendering background color.
     * @type {import('../index.js').Vector3}
     * @private
     */
    $color;

    /**
     * Stores the container.
     * @type {HTMLElement}
     * @private
     */
    $container;

    /**
     * Stores the loop.
     * @type {import('../index.js').Loop}
     * @private
     */
    $loop;

    /**
     * Stores the next stage.
     * @type {typeof import('../index.js').Stage}
     * @private
     */
    $next;

    /**
     * Stores the preloaded status of the assets.
     * @type {Set<string>}
     * @private
     */
    $preloaded;

    /**
     * Stores the rendering resolution.
     * @type {import('../index.js').Vector2}
     * @private
     */
    $resolution;

    /**
     * Stores the current stage.
     * @type {import('../index.js').Stage}
     * @private
     */
    $stage;

    /**
     * Stores the current actor system.
     * @type {import('../index.js').SystemActor}
     * @private
     */
    $systemActor;

    /**
     * Stores the current audio system.
     * @type {import('../index.js').SystemAudio}
     * @private
     */
    $systemAudio;

    /**
     * Stores the current collision system.
     * @type {import('../index.js').SystemCollision}
     * @private
     */
    $systemCollision;

    /**
     * Stores the current input system.
     * @type {import('../index.js').SystemInput}
     * @private
     */
    $systemInput;

    /**
     * Stores the current render system.
     * @type {import('../index.js').SystemRender}
     * @private
     */
    $systemRender;

    /**
     * Stores the current vibration system.
     * @type {import('../index.js').SystemVibration}
     * @private
     */
    $systemVibration;

    /**
     * Stores the uuid.
     * @type {string}
     * @private
     */
    $uuid;

    /**
     * Gets the container.
     * @type {HTMLElement}
     * @public
     */
    get container() {

        return this.$container;
    }

    /**
     * Gets the current stage.
     * @type {import('../index.js').Stage}
     * @public
     */
    get stage() {

        return this.$stage;
    }

    /**
     * Gets the uuid.
     * @type {string}
     * @public
     */
    get uuid() {

        return this.$uuid;
    }

    /**
     * Creates a new game engine.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').Vector3} [$parameters.$color] The rendering background color to use.
     * @param {HTMLElement} $parameters.$container The container for the game engine to create.
     * @param {import('../index.js').Vector2} [$parameters.$resolution] The rendering resolution to use.
     */
    constructor({$color = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), $container, $resolution = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector2(320, 240)}) {

        this.$color = $color;
        this.$container = $container;
        this.$resolution = $resolution;

        this.$uuid = _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.uuid();

        this.$loop = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Loop(this.tick.bind(this));
        this.$preloaded = new Set();

        this.$systemActor = new _index_js__WEBPACK_IMPORTED_MODULE_0__.SystemActor();
        this.$systemAudio = new _index_js__WEBPACK_IMPORTED_MODULE_0__.SystemAudio();
        this.$systemCollision = new _index_js__WEBPACK_IMPORTED_MODULE_0__.SystemCollision();
        this.$systemInput = new _index_js__WEBPACK_IMPORTED_MODULE_0__.SystemInput({$container: this.$container});
        this.$systemRender = new _index_js__WEBPACK_IMPORTED_MODULE_0__.SystemRender({$color: this.$color, $container: this.$container, $resolution: this.$resolution});
        this.$systemVibration = new _index_js__WEBPACK_IMPORTED_MODULE_0__.SystemVibration();
    }

    /**
     * Creates the given stage.
     * @param {typeof import('../index.js').Stage} $stage The stage to create.
     * @private
     */
    $createStage($stage) {

        this.$stage = new $stage(this);
        this.$stage.onCreate();
    }

    /**
     * Creates the given stage on the next tick update.
     * @param {typeof import('../index.js').Stage} $stage The stage to create on the next tick update.
     * @public
     */
    createStage($stage) {

        this.$next = $stage;
    }

    /**
     * @type {import('../index.js').SystemInput['getInput']}
     */
    getInput(...$parameters) {

        return this.$systemInput.getInput(...$parameters);
    }

    /**
     * @type {import('../index.js').SystemInput['getInputAnalog']}
     */
    getInputAnalog(...$parameters) {

        return this.$systemInput.getInputAnalog(...$parameters);
    }

    /**
     * Checks if the engine has loaded the given asset.
     * @param {string} $asset The asset source.
     * @returns {boolean}
     * @public
     */
    hasAssetLoaded($asset) {

        return this.$preloaded.has($asset) === true;
    }

    /**
     * Initiates the engine.
     * @param {number} [$tickrateMinimum] The minimum acceptable number of ticks per virtual second (in ticks/s).
     * @public
     */
    initiate($tickrateMinimum = 60) {

        this.$loop.initiate($tickrateMinimum);

        this.$systemInput.initiate();
        this.$systemRender.initiate();
    }

    /**
     * Preloads the assets of the given stage.
     * @param {typeof import('../index.js').Stage} $stage The stage to preload the assets from.
     * @returns {Promise<(undefined | AudioBuffer | WebGLTexture)[]>}
     * @public
     */
    preloadStage($stage) {

        /**
         * @type {Promise<undefined | AudioBuffer | WebGLTexture>[]}
         */
        const promises = [];

        _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.deduplicate($stage.preloadables).forEach(($asset) => {

            if (this.hasAssetLoaded($asset) === true) {

                return;
            }

            this.$preloaded.add($asset);

            if (this.$systemAudio.hasAssetLoaded($asset) === true) {

                return;
            }

            if (this.$systemRender.hasAssetLoaded($asset) === true) {

                return;
            }

            /**
             * @type {Promise<undefined | AudioBuffer | WebGLTexture>}
             */
            const promise = new Promise(($resolve) => {

                fetch($asset)
                .then(($content) => {

                    const contentType = $content.headers.get('Content-Type');

                    switch(contentType) {

                        case _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTENTTYPES.IMAGEJPEG:
                        case _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTENTTYPES.IMAGEPNG: {

                            this.$systemRender.loadTexture($content)
                            .then(($texture) => {

                                $resolve($texture);
                            });

                            break;
                        }

                        case _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTENTTYPES.AUDIOMPEG:
                        case _index_js__WEBPACK_IMPORTED_MODULE_0__.CONTENTTYPES.AUDIOWAVE: {

                            this.$systemAudio.loadAudio($content)
                            .then(($bufferAudio) => {

                                $resolve($bufferAudio);
                            });

                            break;
                        }

                        default: {

                            $resolve(undefined);
                        }
                    }
                });
            });

            promises.push(promise);
        });

        return Promise.all(promises);
    }

    /**
     * @type {import('../index.js').SystemRender['setColor']}
     */
    setColor(...$parameters) {

        return this.$systemRender.setColor(...$parameters);
    }

    /**
     * @type {import('../index.js').SystemRender['setResolution']}
     */
    setResolution(...$parameters) {

        return this.$systemRender.setResolution(...$parameters);
    }

    /**
     * Terminates the engine (immediately) (must be used outside the lifecycle of this engine).
     * @public
     */
    terminate() {

        this.$loop.terminate();

        this.$createStage(_index_js__WEBPACK_IMPORTED_MODULE_0__.Stage);
        this.tick(0);

        this.$systemInput.terminate();
        this.$systemRender.terminate();
        this.$systemAudio.terminate();
        this.$systemVibration.terminate();
    }

    /**
     * Updates each system once.
     * @param {number} $timetick The tick duration (in ms).
     * @public
     */
    tick($timetick) {

        if (typeof this.$next === typeof _index_js__WEBPACK_IMPORTED_MODULE_0__.Stage) {

            const stage = this.$next;

            this.$next = undefined;

            this.$createStage(stage);
        }

        if (typeof this.$stage === 'undefined') {

            return;
        }

        this.$systemInput.tick();
        this.$systemActor.tick({

            $stage: this.$stage,
            $timetick: $timetick
        });
        this.$systemCollision.tick(this.$stage);
        this.$systemRender.tick(this.$stage);
        this.$systemAudio.tick(this.$stage);
        this.$systemVibration.tick({

            $stage: this.$stage,
            $timetick: $timetick
        });
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Engine);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/finitestatemachine.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/finitestatemachine.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FiniteStateMachine": () => (/* binding */ FiniteStateMachine),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates finite state machines.
 * @template {string} Type The generic type of the names of a state.
 *
 * @example
 *
 * const toggle = new FiniteStateMachine([
 *
 *     {
 *         $state: 'ON',
 *         $transitions: [{
 *
 *             $state: 'OFF',
 *             $condition: ({$timer}) => ($timer >= 1000)
 *         }]
 *     },
 *     {
 *         $state: 'OFF',
 *         $transitions: [{
 *
 *             $state: 'ON',
 *             $condition: ({$timer}) => ($timer >= 1000)
 *         }]
 *     }
 * ]);
 */
class FiniteStateMachine {

    /**
     * @callback typestatehandlerenter A state entering handler.
     * @param {Object} $parameters The given parameters.
     * @param {Type} $parameters.$previous The previous state.
     * @returns {void}
     */

    /**
     * @callback typestatehandlerleave A state leaving handler.
     * @param {Object} $parameters The given parameters.
     * @param {number} $parameters.$timer The timer of the current state.
     * @param {Type} $parameters.$next The next state.
     * @returns {void}
     */

    /**
     * @callback typestatetransitioncondition A state transition condition.
     * @param {Object} $parameters The given parameters.
     * @param {Type} $parameters.$previous The previous state.
     * @param {number} $parameters.$timer The timer of the current state.
     * @returns {boolean}
     */

    /**
     * @typedef {Object} typestatetransition A transition to a state.
     * @property {typestatetransitioncondition} typestatetransition.$condition The condition to transition to given state.
     * @property {Type} typestatetransition.$state The given state to transition to.
     */

    /**
     * @typedef {Object} typestate A state.
     * @property {Type} typestate.$state The name of the state.
     * @property {typestatehandlerenter} [typestate.$onEnter] The handler to execute when entering the state.
     * @property {typestatehandlerleave} [typestate.$onLeave] The handler to execute when leaving the state.
     * @property {typestatetransition[]} typestate.$transitions The transitions to given states.
     */

    /**
     * Stores the initiated status.
     * @type {boolean}
     * @private
     */
    $initiated;

    /**
     * Stores the previous state.
     * @type {typestate}
     * @private
     */
    $previous;

    /**
     * Stores the current state.
     * @type {typestate}
     * @private
     */
    $state;

    /**
     * Stores the states.
     * @type {Map.<Type, typestate>}
     * @private
     */
    $states;

    /**
     * Stores the timer of the current state.
     * @type {number}
     * @private
     */
    $timer;

    /**
     * Creates a new finite state machine.
     * @param {typestate[]} $data The representation of the finite state machine.
     */
    constructor($data) {

        this.$initiated = false;
        this.$states = new Map();
        this.$timer = 0;

        $data.forEach(($state) => {

            this.$states.set($state.$state, $state);
        });
    }

    /**
     * Initiates the finite state machine.
     * @param {Type} $state The name of the state to initiate.
     * @public
     */
    initiate($state) {

        if (this.$initiated === true) {

            return;
        }

        this.$previous = this.$state
        this.$state = this.$states.get($state);

        if (typeof this.$state.$onEnter === 'function') {

            this.$state.$onEnter({$previous: undefined});
        }

        this.$initiated = true;
    }

    /**
     * Updates the finite state machine.
     * @param {number} $timetick The tick duration (in ms).
     * @public
     */
    update($timetick) {

        if (this.$initiated === false) {

            return;
        }

        this.$timer += $timetick;

        for (let $transition of this.$state.$transitions) {

            let previous;

            if (typeof this.$previous !== 'undefined') {

                previous = this.$previous.$state;
            }

            const current = this.$state.$state;
            const next = $transition.$state;

            if ($transition.$condition({$previous: previous, $timer: this.$timer}) === true) {

                if (typeof this.$state.$onLeave === 'function') {

                    this.$state.$onLeave({$timer: this.$timer, $next: next});
                }

                this.$timer = 0;

                this.$previous = this.$state;
                this.$state = this.$states.get(next);

                if (typeof this.$state.$onEnter === 'function') {

                    this.$state.$onEnter({$previous: current});
                }

                break;
            }
        }
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiniteStateMachine);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/loop.js":
/*!****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/loop.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loop": () => (/* binding */ Loop),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates update loops.
 *
 * @example
 *
 * const loop = new Loop(handler);
 * loop.initiate();
 */
class Loop {

    /**
     * Stores the handler to execute with the update loop.
     * @type {Function}
     * @private
     */
    $handler;

    /**
     * Stores the identifier of the last requestAnimationFrame call.
     * @type {number}
     * @private
     */
    $identifier;

    /**
     * Stores the time value of the previous tick call.
     * @type {number}
     * @private
     */
    $timePrevious;

    /**
     * Stores the global scope used.
     * @type {typeof globalThis}
     * @private
     */
    $scope;

    /**
     * Creates a new update loop.
     * @param {Function} $handler The handler to execute with the update loop.
     * @param {typeof globalThis} $scope The global scope to use.
     */
    constructor($handler, $scope = window) {

        this.$handler = $handler;
        this.$scope = $scope;
    }

    /**
     * Loops the update loop.
     * @param {number} $timetick The tick duration (in ms).
     * @public
     */
    $loop($timetick) {

        const timeCurrent = performance.now();

        if (typeof this.$timePrevious !== 'undefined') {

            const timetickCurrent = timeCurrent - this.$timePrevious;
            const timetickMinimum = $timetick;
            const timetickSafe = Math.min(timetickMinimum, timetickCurrent);

            this.$handler(timetickSafe);
        }

        this.$identifier = this.$scope.requestAnimationFrame(this.$loop.bind(this, $timetick));

        this.$timePrevious = timeCurrent;
    }

    /**
     * Initiates the update loop.
     * @param {number} [$tickrateMinimum] The minimum acceptable number of ticks per virtual second (in ticks/s).
     * @public
     */
    initiate($tickrateMinimum = 60) {

        this.$loop(1000 / $tickrateMinimum);
    }

    /**
     * Terminates the update loop.
     * @public
     */
    terminate() {

        if (typeof this.$identifier !== 'undefined') {

            this.$scope.cancelAnimationFrame(this.$identifier);

            this.$timePrevious = undefined;
        }
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loop);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/quaternion.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/quaternion.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Quaternion": () => (/* binding */ Quaternion),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates quaternions.
 *
 * @example
 *
 * const quaternion = new Quaternion(0, 0, 0, 1);
 */
class Quaternion {

    /**
     * Stores the w component.
     * @type {number}
     * @private
     */
    $w;

    /**
     * Stores the x component.
     * @type {number}
     * @private
     */
    $x;

    /**
     * Stores the y component.
     * @type {number}
     * @private
     */
    $y;

    /**
     * Stores the z component.
     * @type {number}
     * @private
     */
    $z;

    /**
     * Gets the w component.
     * @type {number}
     * @public
     */
    get w() {

        return this.$w;
    }

    /**
     * Gets the x component.
     * @type {number}
     * @public
     */
    get x() {

        return this.$x;
    }

    /**
     * Gets the y component.
     * @type {number}
     * @public
     */
    get y() {

        return this.$y;
    }

    /**
     * Gets the z component.
     * @type {number}
     * @public
     */
    get z() {

        return this.$z;
    }

    /**
     * Creates a new quaternion.
     * @param {number} $x The x component of the quaternion to create.
     * @param {number} $y The y component of the quaternion to create.
     * @param {number} $z The z component of the quaternion to create.
     * @param {number} $w The w component of the quaternion to create.
     */
    constructor($x, $y, $z, $w) {

        this.$w = $w;
        this.$x = $x;
        this.$y = $y;
        this.$z = $z;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quaternion);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/shader.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/shader.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shader": () => (/* binding */ Shader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Static default shader sources.
 *
 * @example
 *
 * const sourceFragment = Shader.sourceFragment;
 * const sourceVertex = Shader.sourceVertex;
 */
class Shader {

    /**
     * @typedef {('vec2' | 'vec3')} typetypeattribute A type of attribute.
     */

    /**
     * @typedef {('bool' | 'bool[]' | 'float' | 'float[]' | 'int' | 'int[]' | 'mat4' | 'mat4[]' | 'sampler2D' | 'vec2' | 'vec2[]' | 'vec3' | 'vec3[]')} typetypeuniform A type of uniform.
     */

    /**
     * Stores the attributes needed by the shader program.
     * @type {Object.<string, typetypeattribute>}
     * @public
     * @readonly
     * @static
     */
    static attributes = {

        'attributePosition': 'vec2',
        'attributeUvmapping': 'vec2'
    };

    /**
     * Stores the fragment shader source.
     * @type {string}
     * @public
     * @readonly
     * @static
     */
    static sourceFragment = (

        'precision highp float;' +

        'uniform sampler2D uniformTextureColor;' +
        'uniform sampler2D uniformTextureOpacity;' +
        'uniform vec2 uniformTranslationPointOfView;' +

        'varying vec2 varyingUvmapping;' +

        'void main(void) {' +

            'vec4 colorTextureColor = texture2D(uniformTextureColor, varyingUvmapping);' +
            'vec4 colorTextureOpacity = texture2D(uniformTextureOpacity, varyingUvmapping);' +

            'float alpha = colorTextureColor.a * colorTextureOpacity.r;' +

            'gl_FragColor = vec4(colorTextureColor.rgb, alpha);' +
        '}'
    );

    /**
     * Stores the vertex shader source.
     * @type {string}
     * @public
     * @readonly
     * @static
     */
    static sourceVertex = (

        'attribute vec2 attributePosition;' +
        'attribute vec2 attributeUvmapping;' +

        'uniform vec2 uniformAspect;' +
        'uniform vec2 uniformSize;' +
        'uniform vec2 uniformTranslation;' +
        'uniform vec2 uniformTranslationPointOfView;' +

        'varying vec2 varyingUvmapping;' +

        'void main(void) {' +

            'varyingUvmapping = attributeUvmapping;' +

            'vec2 position = (attributePosition * uniformSize + uniformTranslation);' +
            'vec2 projection = 2.0 * (position - uniformTranslationPointOfView) / uniformAspect;' +

            'gl_Position = vec4(projection, 0.0, 1.0);' +
        '}'
    );

    /**
     * Stores the uniforms needed by the shader program.
     * @type {Object.<string, typetypeuniform>}
     * @public
     * @readonly
     * @static
     */
    static uniforms = {

        'uniformAspect': 'vec2',
        'uniformSize': 'vec2',
        'uniformTextureColor': 'sampler2D',
        'uniformTextureOpacity': 'sampler2D',
        'uniformTranslation': 'vec2',
        'uniformTranslationPointOfView': 'vec2'
    };
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shader);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/sound.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/sound.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sound": () => (/* binding */ Sound),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates sounds.
 *
 * @example
 *
 * // minimal
 * const sound = new Sound({
 *
 *     $audio: audio
 * });
 *
 * @example
 *
 * // full
 * const sound = new Sound({
 *
 *     $audio: audio,
 *     $durationFadeOut: 125,
 *     $loop: false,
 *     $volume: 1
 * });
 */
class Sound {

    /**
     * Stores the audio source.
     * @type {string}
     * @private
     */
    $audio;

    /**
     * Stores fade out duration.
     * @type {number}
     * @private
     */
    $durationFadeOut;

    /**
     * Stores the loop status.
     * @type {boolean}
     * @private
     */
    $loop;

    /**
     * Stores the volume.
     * @type {number}
     * @private
     */
    $volume;

    /**
     * Gets the audio source.
     * @type {string}
     * @public
     */
    get audio() {

        return this.$audio;
    }

    /**
     * Gets fade out duration (in ms) (must be positive).
     * @type {number}
     * @public
     */
    get durationFadeOut() {

        return this.$durationFadeOut;
    }

    /**
     * Gets the loop status.
     * @type {boolean}
     * @public
     */
    get loop() {

        return this.$loop;
    }

    /**
     * Gets the volume.
     * @type {number}
     * @public
     */
    get volume() {

        return this.$volume;
    }

    /**
     * Creates a new sound.
     * @param {Object} $parameters The given parameters.
     * @param {string} $parameters.$audio The audio source.
     * @param {number} [$parameters.$durationFadeOut] The fade out duration (in ms) (must be positive).
     * @param {boolean} [$parameters.$loop] The loop status.
     * @param {number} [$parameters.$volume] The volume.
     */
    constructor({$audio, $durationFadeOut = 1000 / 60, $loop = false, $volume = 1}) {

        this.$audio = $audio;
        this.$durationFadeOut = $durationFadeOut;
        this.$loop = $loop;
        this.$volume = $volume;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sound);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/sprite.js":
/*!******************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/sprite.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sprite": () => (/* binding */ Sprite),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates sprites.
 *
 * @example
 *
 * // minimal
 * const sprite = new Sprite({
 *
 *     $sizeTarget: new Vector2(32, 32),
 *     $textureColor: textureColor
 * });
 *
 * @example
 *
 * // full
 * const sprite = new Sprite({
 *
 *     $frameSource: new AABB(new Vector2(0, 0), new Vector2(1, 1)),
 *     $sizeTarget: new Vector2(32, 32),
 *     $textureColor: textureColor,
 *     $textureOpacity: textureOpacity
 * });
 */
class Sprite {

    /**
     * Stores the frame to use from the texture sources (with values in [0, 1] ranges).
     * @type {import('../index.js').AABB}
     * @private
     */
    $frameSource;

    /**
     * Stores the serialized value of frame to use from the texture sources (with values in [0, 1] ranges).
     * @type {string}
     * @private
     */
    $frameSourceSerialized;

    /**
     * Stores the target size.
     * @type {import('../index.js').Vector2}
     * @private
     */
    $sizeTarget;

    /**
     * Stores the color texture source.
     * @type {string}
     * @private
     */
    $textureColor;

    /**
     * Stores the opacity texture source.
     * @type {string}
     * @private
     */
    $textureOpacity;

    /**
     * Gets the frame to use from the texture sources.
     * @type {import('../index.js').AABB}
     * @public
     */
    get frameSource() {

        return this.$frameSource;
    }

    /**
     * Gets the serialized value of the frame to use from the texture sources.
     * @type {string}
     * @public
     */
    get frameSourceSerialized() {

        return this.$frameSourceSerialized;
    }

    /**
     * Gets the target size.
     * @type {import('../index.js').Vector2}
     * @public
     */
    get sizeTarget() {

        return this.$sizeTarget;
    }

    /**
     * Gets the color texture source.
     * @type {string}
     * @public
     */
    get textureColor() {

        return this.$textureColor;
    }

    /**
     * Gets the opacity texture source.
     * @type {string}
     * @public
     */
    get textureOpacity() {

        return this.$textureOpacity;
    }

    /**
     * Creates a new sprite.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').AABB} [$parameters.$frameSource] The frame to use from the texture sources (with values in [0, 1] ranges) (if not specified then the full texture is used).
     * @param {import('../index.js').Vector2} $parameters.$sizeTarget The target size.
     * @param {string} $parameters.$textureColor The color texture source.
     * @param {string} [$parameters.$textureOpacity] The opacity texture source.
     */
    constructor({$frameSource = new _index_js__WEBPACK_IMPORTED_MODULE_0__.AABB(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector2(0, 0), new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector2(1, 1)), $sizeTarget, $textureColor, $textureOpacity}) {

        this.$frameSource = $frameSource;
        this.$sizeTarget = $sizeTarget;
        this.$textureColor = $textureColor;
        this.$textureOpacity = $textureOpacity;

        this.$frameSourceSerialized = JSON.stringify([

            [$frameSource.minimum.x, $frameSource.minimum.y],
            [$frameSource.maximum.x, $frameSource.maximum.y]
        ]);
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/stage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/stage.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stage": () => (/* binding */ Stage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Abstract stages.
 *
 * @example
 *
 * class StageExample extends Stage {}
 */
class Stage {

    /**
     * Stores the preloadable assets.
     * @type {string[]}
     * @public
     * @static
     */
    static preloadables = [];

    /**
     * Stores the current actors.
     * @type {import('../index.js').Actor[]}
     * @private
     */
    $actors;

    /**
     * Stores the current engine.
     * @type {import('../index.js').Engine}
     * @private
     */
    $engine;

    /**
     * Stores the point of view.
     * @type {import('../index.js').Actor}
     * @private
     */
    $pointOfView;

    /**
     * Stores the uuid.
     * @type {string}
     * @private
     */
    $uuid;

    /**
     * Gets the current actors.
     * @type {import('../index.js').Actor[]}
     * @public
     */
    get actors() {

        return this.$actors;
    }

    /**
     * Gets the current engine.
     * @type {import('../index.js').Engine}
     * @public
     */
    get engine() {

        return this.$engine;
    }

    /**
     * Gets the point of view.
     * @type {import('../index.js').Actor}
     * @public
     */
    get pointOfView() {

        return this.$pointOfView;
    }

    /**
     * Gets the uuid.
     * @type {string}
     * @public
     */
    get uuid() {

        return this.$uuid;
    }

    /**
     * Creates a new stage.
     * @param {import('../index.js').Engine} $engine The engine on which to create the stage.
     */
    constructor($engine) {

        this.$engine = $engine;

        this.$actors = [];
        this.$pointOfView = this.createActor(_index_js__WEBPACK_IMPORTED_MODULE_0__.Actor);
        this.$uuid = _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.uuid();
    }

    /**
     * Creates the given actor.
     * @param {typeof import('../index.js').Actor} [$actor] The actor to create.
     * @public
     */
    createActor($actor = _index_js__WEBPACK_IMPORTED_MODULE_0__.Actor) {

        const actor = new $actor(this);

        this.$actors.push(actor);

        actor.onCreate();

        return actor;
    }

    /**
     * Checks if the stage has the given actor.
     * @param {import('../index.js').Actor} $actor The actor to check.
     * @returns {boolean}
     * @public
     */
    hasActor($actor) {

        return this.$actors.indexOf($actor) !== -1;
    }

    /**
     * Called when the stage is being created.
     * @public
     */
    onCreate() {}

    /**
     * Removes the given actor.
     * @param {import('../index.js').Actor} $actor The actor to remove.
     * @public
     */
    removeActor($actor) {

        const index = this.$actors.indexOf($actor);

        if (index === -1) {

            return;
        }

        $actor.onBeforeRemove();

        this.$actors.splice(index, 1);

        $actor.onAfterRemove();
    }

    /**
     * Removes all actors.
     * @public
     */
    removeActors() {

        while (this.$actors.length > 0) {

            this.removeActor(this.$actors[0]);
        }
    }

    /**
     * Sets the given actor as the point of view.
     * @param {import('../index.js').Actor} $actor The actor to set as the point of view.
     * @public
     */
    setPointOfView($actor) {

        this.$pointOfView = $actor;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stage);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/stagepreloadable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/stagepreloadable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StagePreloadable": () => (/* binding */ StagePreloadable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Factores a stage with preloadable assets.
 * @param {(string | typeof import('../index.js').Actor)[]} $preloadables The preloadable assets (mix of preloadable assets and/or actors with preloadable assets).
 * @returns {typeof import('../index.js').Stage}
 */
function StagePreloadable($preloadables = []) {

    /**
     * @type {Set<string>}
     */
    const preloadables = new Set();

    $preloadables.forEach(($preloadable) => {

        if (typeof $preloadable === 'string') {

            if (preloadables.has($preloadable) === true) {

                return;
            }

            preloadables.add($preloadable);

            return;
        }

        if (typeof $preloadable === typeof _index_js__WEBPACK_IMPORTED_MODULE_0__.Actor) {

            $preloadable.preloadables.forEach(($preloadable) => {

                if (preloadables.has($preloadable) === true) {

                    return;
                }

                preloadables.add($preloadable);
            });

            return;
        }
    });

    return class extends _index_js__WEBPACK_IMPORTED_MODULE_0__.Stage {

        /**
         * @type {typeof import('../index.js').Stage.preloadables}
         */
        static preloadables = Array.from(preloadables);
    };
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StagePreloadable);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/state.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/state.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates state managers.
 * @template {any} Type The generic type of the data state.
 *
 * @example
 *
 * const state = new State(data);
 */
class State {

    /**
     * @callback typewatcherstate A state changing handler.
     * @param {Type} $state The new data state.
     * @returns {void}
     */

    /**
     * Stores the data state.
     * @type {Type}
     * @private
     */
    $data;

    /**
     * Stores the state changing handlers.
     * @type {typewatcherstate[]}
     * @private
     */
    $watchers;

    /**
     * Creates a new state manager.
     * @param {Type} $data The data state to store.
     */
    constructor($data) {

        this.$data = $data;
        this.$watchers = [];
    }

    /**
     * Gets the data state.
     * @returns {Type}
     * @public
     */
    getState() {

        return this.$data;
    }

    /**
     * Sets the data state.
     * @param {Type} $data The data state to set.
     * @public
     */
    setState($data) {

        this.$data = $data;

        this.$watchers.forEach(($handler) => {

            $handler(this.$data);
        });
    }

    /**
     * Removes all watchers of the data state changes.
     * @public
     */
    unwatchAll() {

        this.$watchers = [];
    }

    /**
     * Removes a watcher of the data state changes.
     * @param {typewatcherstate} $handler The state changing handler to detach.
     * @public
     */
    unwatchState($handler) {

        while (this.$watchers.indexOf($handler) !== -1) {

            this.$watchers.splice(this.$watchers.indexOf($handler), 1);
        }
    }

    /**
     * Adds a watcher for the data state changes.
     * @param {typewatcherstate} $handler The state changing handler to attach.
     * @public
     */
    watchState($handler) {

        this.$watchers.push($handler);
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (State);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/storage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/storage.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "set": () => (/* binding */ set)
/* harmony export */ });
/**
 * Gets the stored data with the given name.
 * @param {string} $name The name of the stored data to get.
 * @returns {any}
 */
function get($name) {

    const value = window.localStorage.getItem($name);

    if (value === null) {

        return undefined;
    }

    return JSON.parse(value);
}

/**
 * Checks if the storage has data stored with the given name.
 * @param {string} $name The name of the stored data to check.
 * @returns {boolean}
 */
function has($name) {

    const value = window.localStorage.getItem($name);

    if (value === null) {

        return false;
    }

    return true;
}

/**
 * Removes the stored data with the given name.
 * @param {string} $name The name of the stored data to remove.
 */
function remove($name) {

    window.localStorage.removeItem($name);
}

/**
 * Sets the data to store with the given name.
 * @param {string} $name The name of the data to store.
 * @param {any} $value The value of the data to store.
 */
function set($name, $value) {

    const value = JSON.stringify($value);

    if (typeof value === 'undefined') {

        return;
    }

    window.localStorage.setItem($name, value);
}




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/timeline.js":
/*!********************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/timeline.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Timeline": () => (/* binding */ Timeline),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates timelines.
 *
 * @example
 *
 * const timeline = new Timeline(keyframes);
 * timeline.seekTimecode(0);
 * timeline.tick(timetick);
 */
class Timeline {

    /**
     * Stores the keyframes.
     * @type {import('../index.js').TimelineKeyframe[]}
     * @private
     */
    $keyframes;

    /**
     * Stores the timecode.
     * @type {number}
     * @private
     */
    $timecode;

    /**
     * Gets the timecode.
     * @type {number}
     * @public
     */
    get timecode() {

        return this.$timecode;
    }

    /**
     * Creates a new timeline.
     * @param {import('../index.js').TimelineKeyframe[]} [$keyframes] The keyframes.
     */
    constructor($keyframes = []) {

        this.$keyframes = [...$keyframes].sort(($a, $b) => ($a.timecode - $b.timecode));

        this.$timecode = 0;
    }

    /**
     * Seeks to the given name.
     * @param {string} $name The name of the keyframe to seek to.
     * @returns {this}
     * @public
     */
    seekName($name) {

        const result = this.$keyframes.find(($keyframe) => ($keyframe.name === $name));

        if (typeof result !== 'undefined') {

            this.seekTimecode(result.timecode);
        }

        return this;
    }

    /**
     * Seeks to the given timecode.
     * @param {number} $timecode The timecode to seek to (in ms).
     * @returns {this}
     * @public
     */
    seekTimecode($timecode) {

        this.$timecode = $timecode;

        this.$keyframes.forEach(($keyframe) => {

            if ($keyframe.timecode !== this.$timecode) {

                return;
            }

            $keyframe.onEnter(this);
        });

        return this;
    }

    /**
     * Updates the timeline by one tick update.
     * @param {number} $timetick The tick duration (in ms).
     * @returns {this}
     * @public
     */
    tick($timetick) {

        if ($timetick === 0) {

            return this;
        }

        const previous = this.$timecode;

        this.$timecode += $timetick;

        const current = this.$timecode;

        this.$keyframes.forEach(($keyframe) => {

            if ($keyframe.timecode <= previous) {

                return;
            }

            if ($keyframe.timecode > current) {

                return;
            }

            $keyframe.onEnter(this);
        });

        return this;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/timelinekeyframe.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/timelinekeyframe.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimelineKeyframe": () => (/* binding */ TimelineKeyframe),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates timeline keyframes.
 *
 * @example
 *
 * // minimal
 * const keyframe = new TimelineKeyframe({$onEnter, $timecode});
 *
 * @example
 *
 * // full
 * const keyframe = new TimelineKeyframe({$name, $onEnter, $timecode});
 */
class TimelineKeyframe {

    /**
     * @callback typehandlerenter A handler to execute when entering a keyframe.
     * @param {import('../index.js').Timeline} $timeline The reference timeline.
     * @returns {void}
     */

    /**
     * Stores the name.
     * @type {string}
     * @private
     */
    $name;

    /**
     * Stores the keyframe entering handler.
     * @type {typehandlerenter}
     * @private
     */
    $onEnter;

    /**
     * Stores the timecode.
     * @type {number}
     * @private
     */
    $timecode;

    /**
     * Gets the name.
     * @type {string}
     * @public
     */
    get name() {

        return this.$name;
    }

    /**
     * Gets the keyframe entering handler.
     * @type {typehandlerenter}
     * @public
     */
    get onEnter() {

        return this.$onEnter;
    }

    /**
     * Gets the timecode.
     * @type {number}
     * @public
     */
    get timecode() {

        return this.$timecode;
    }

    /**
     * Creates a new timeline keyframe.
     * @param {Object} $parameters The given parameters.
     * @param {string} [$parameters.$name] The name.
     * @param {typehandlerenter} $parameters.$onEnter The keyframe entering handler.
     * @param {number} $parameters.$timecode The timecode.
     */
    constructor({$name, $onEnter, $timecode}) {

        this.$name = $name;
        this.$onEnter = $onEnter;
        this.$timecode = $timecode;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelineKeyframe);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deduplicate": () => (/* binding */ deduplicate),
/* harmony export */   "extract": () => (/* binding */ extract),
/* harmony export */   "frame": () => (/* binding */ frame),
/* harmony export */   "ready": () => (/* binding */ ready),
/* harmony export */   "sleep": () => (/* binding */ sleep),
/* harmony export */   "uuid": () => (/* binding */ uuid)
/* harmony export */ });
/**
 * Deduplicates the items of the given array (a new array is created).
 * @template T
 * @param {T[]} $array The array.
 * @returns {T[]}
 */
function deduplicate($array) {

    return Array.from(new Set($array));
}

/**
 * Extracts the given item from the given array.
 * @template T
 * @param {T} $item The item to remove.
 * @param {T[]} $array The array.
 * @returns {T[]}
 */
function extract($item, $array) {

    const index = $array.indexOf($item);

    if (index === -1) {

        return [];
    }

    return $array.splice(index, 1);
}

/**
 * Resolves when the browser is ready to perform an animation frame request.
 * @returns Promise<void>
 */
function frame() {

    /**
     * @type {Promise<number>}
     */
    const promise = new Promise(($resolve) => {

        window.requestAnimationFrame($resolve);
    });

    return promise;
}

/**
 * Resolves when the user has interacted at least once since page load.
 * @returns {Promise<void>}
 */
function ready() {

    /**
     * @type {Promise<void>}
     */
    const promise = new Promise(($resolve) => {

        /**
         * @type {number}
         */
        let id;

        const check = () => {

            if (navigator.userActivation.hasBeenActive === false) {

                id = window.requestAnimationFrame(check);

                return;
            }

            window.cancelAnimationFrame(id);

            $resolve();
        };

        id = window.requestAnimationFrame(check);
    });

    return promise;
}

/**
 * Resolves when the given delay has passed.
 * @param {number} $delay The delay (in ms).
 * @returns Promise<void>
 */
function sleep($delay) {

    /**
     * @type {Promise<void>}
     */
    const promise = new Promise(($resolve) => {

        window.setTimeout($resolve, $delay);
    });

    return promise;
}

/**
 * Gets a new UUID.
 * @returns {string}
 */
function uuid() {

    return window.crypto.randomUUID();
}




/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/vector2.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/vector2.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector2": () => (/* binding */ Vector2),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates two-dimensional vectors.
 *
 * @example
 *
 * // without chaining
 * const vector = new Vector2(3, 2);
 * vector.add(new Vector2(1, 0));
 *
 * @example
 *
 * // with chaining
 * const vector = new Vector2(3, 2).add(new Vector2(1, 0));
 */
class Vector2 {

    /**
     * Stores the x component.
     * @type {number}
     * @private
     */
    $x;

    /**
     * Stores the y component.
     * @type {number}
     * @private
     */
    $y;

    /**
     * Gets the x component.
     * @type {number}
     * @public
     */
    get x() {

        return this.$x;
    }

    /**
     * Gets the y component.
     * @type {number}
     * @public
     */
    get y() {

        return this.$y;
    }

    /**
     * Creates a new two-dimensional vector.
     * @param {number} $x The x component of the vector to create.
     * @param {number} $y The y component of the vector to create.
     */
    constructor($x, $y) {

        this.$x = $x;
        this.$y = $y;
    }

    /**
     * Creates a new vector from the given vector.
     * @param {import('../index.js').Vector2} $vector The given vector.
     * @returns {import('../index.js').Vector2}
     * @public
     * @static
     */
    static from($vector) {

        return $vector.clone();
    }

    /**
     * Adds the given vector.
     * @param {import('../index.js').Vector2} $vector The vector to add.
     * @returns {this}
     * @public
     */
    add($vector) {

        const x = this.$x;
        const y = this.$y;

        this.$x = x + $vector.x;
        this.$y = y + $vector.y;

        return this;
    }

    /**
     * Clones the vector.
     * @returns {import('../index.js').Vector2}
     * @public
     */
    clone() {

        const x = this.$x;
        const y = this.$y;

        return new Vector2(x, y);
    }

    /**
     * Checks the equality with the given vector.
     * @param {import('../index.js').Vector2} $vector The vector to check with.
     * @returns {boolean}
     * @public
     */
    equal($vector) {

        return this.$x === $vector.x
        && this.$y === $vector.y;
    }

    /**
     * Gets the length of the vector.
     * @returns {number}
     * @public
     */
    length() {

        const x = this.$x;
        const y = this.$y;

        return Math.sqrt(x * x + y * y);
    }

    /**
     * Multiplies with the given vector.
     * @param {import('../index.js').Vector2} $vector The vector to multiply with.
     * @returns {this}
     * @public
     */
    multiply($vector) {

        const x = this.$x;
        const y = this.$y;

        this.$x = x * $vector.x;
        this.$y = y * $vector.y;

        return this;
    }

    /**
     * Negates the vector.
     * @returns {this}
     * @public
     */
    negate() {

        const x = this.$x;
        const y = this.$y;

        this.$x = - x;
        this.$y = - y;

        return this;
    }

    /**
     * Normalizes the vector.
     * @returns {this}
     * @public
     */
    normalize() {

        const x = this.$x;
        const y = this.$y;

        let length = x * x + y * y;

        if (length > 0) {

            length = 1 / Math.sqrt(length);
        }

        this.$x = x * length;
        this.$y = y * length;

        return this;
    }

    /**
     * Rotates the vector by the given angle.
     * @param {number} $angle The angle of rotation to apply (in degrees) (clockwise).
     * @returns {this}
     * @public
     */
    rotate($angle) {

        const x = this.$x;
        const y = this.$y;

        const radians = $angle * _index_js__WEBPACK_IMPORTED_MODULE_0__.MATHEMATICS.RADIANS;

        const cosine = Math.cos(radians);
        const sine = Math.sin(radians);

        this.$x = x * cosine - y * sine;
        this.$y = x * sine + y * cosine;

        return this;
    }

    /**
     * Scales the vector by the given scalar factor.
     * @param {number} $factor The scalar factor to multiply with.
     * @returns {this}
     * @public
     */
    scale($factor) {

        const x = this.$x;
        const y = this.$y;

        this.$x = x * $factor;
        this.$y = y * $factor;

        return this;
    }

    /**
     * Subtracts the given vector.
     * @param {import('../index.js').Vector2} $vector The vector to subtract.
     * @returns {this}
     * @public
     */
    subtract($vector) {

        const x = this.$x;
        const y = this.$y;

        this.$x = x - $vector.x;
        this.$y = y - $vector.y;

        return this;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector2);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/vector3.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/vector3.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vector3": () => (/* binding */ Vector3),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates three-dimensional vectors.
 *
 * @example
 *
 * // without chaining
 * const vector = new Vector3(3, 2, 1);
 * vector.add(new Vector3(1, 0, -1));
 *
 * @example
 *
 * // with chaining
 * const vector = new Vector3(3, 2, 1).add(new Vector3(1, 0, -1));
 */
class Vector3 {

    /**
     * Stores the x component.
     * @type {number}
     * @private
     */
    $x;

    /**
     * Stores the y component.
     * @type {number}
     * @private
     */
    $y;

    /**
     * Stores the z component.
     * @type {number}
     * @private
     */
    $z;

    /**
     * Gets the x component.
     * @type {number}
     * @public
     */
    get x() {

        return this.$x;
    }

    /**
     * Gets the y component.
     * @type {number}
     * @public
     */
    get y() {

        return this.$y;
    }

    /**
     * Gets the z component.
     * @type {number}
     * @public
     */
    get z() {

        return this.$z;
    }

    /**
     * Creates a new three-dimensional vector.
     * @param {number} $x The x component of the vector to create.
     * @param {number} $y The y component of the vector to create.
     * @param {number} $z The z component of the vector to create.
     */
    constructor($x, $y, $z) {

        this.$x = $x;
        this.$y = $y;
        this.$z = $z;
    }

    /**
     * Creates a new vector from the given vector.
     * @param {import('../index.js').Vector3} $vector The given vector.
     * @returns {import('../index.js').Vector3}
     * @public
     * @static
     */
    static from($vector) {

        return $vector.clone();
    }

    /**
     * Adds the given vector.
     * @param {import('../index.js').Vector3} $vector The vector to add.
     * @returns {this}
     * @public
     */
    add($vector) {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        this.$x = x + $vector.x;
        this.$y = y + $vector.y;
        this.$z = z + $vector.z;

        return this;
    }

    /**
     * Clones the vector.
     * @returns {import('../index.js').Vector3}
     * @public
     */
    clone() {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        return new Vector3(x, y, z);
    }

    /**
     * Checks the equality with the given vector.
     * @param {import('../index.js').Vector3} $vector The vector to check with.
     * @returns {boolean}
     * @public
     */
    equal($vector) {

        return this.$x === $vector.x
        && this.$y === $vector.y
        && this.$z === $vector.z;
    }

    /**
     * Gets the length of the vector.
     * @returns {number}
     * @public
     */
    length() {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Multiplies with the given vector.
     * @param {import('../index.js').Vector3} $vector The vector to multiply with.
     * @returns {this}
     * @public
     */
    multiply($vector) {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        this.$x = x * $vector.x;
        this.$y = y * $vector.y;
        this.$z = z * $vector.z;

        return this;
    }

    /**
     * Negates the vector.
     * @returns {this}
     * @public
     */
    negate() {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        this.$x = - x;
        this.$y = - y;
        this.$z = - z;

        return this;
    }

    /**
     * Normalizes the vector.
     * @returns {this}
     * @public
     */
    normalize() {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        let length = x * x + y * y + z * z;

        if (length > 0) {

            length = 1 / Math.sqrt(length);
        }

        this.$x = x * length;
        this.$y = y * length;
        this.$z = z * length;

        return this;
    }

    /**
     * Rotates the vector.
     * @param {import('../index.js').Quaternion} $quaternion The rotation to apply.
     * @returns {this}
     * @public
     */
    rotate($quaternion) {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        const xq = $quaternion.x;
        const yq = $quaternion.y;
        const zq = $quaternion.z;
        const wq = $quaternion.w;

        let xu = yq * z - zq * y;
        let yu = zq * x - xq * z;
        let zu = xq * y - yq * x;

        let xv = yq * zu - zq * yu;
        let yv = zq * xu - xq * zu;
        let zv = xq * yu - yq * xu;

        const w = wq * 2;

        xu *= w;
        yu *= w;
        zu *= w;

        xv *= 2;
        yv *= 2;
        zv *= 2;

        this.$x = x + xu + xv;
        this.$y = y + yu + yv;
        this.$z = z + zu + zv;

        return this;
    }

    /**
     * Scales the vector by the given scalar factor.
     * @param {number} $factor The scalar factor to multiply with.
     * @returns {this}
     * @public
     */
    scale($factor) {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        this.$x = x * $factor;
        this.$y = y * $factor;
        this.$z = z * $factor;

        return this;
    }

    /**
     * Subtracts the given vector.
     * @param {import('../index.js').Vector3} $vector The vector to subtract.
     * @returns {this}
     * @public
     */
    subtract($vector) {

        const x = this.$x;
        const y = this.$y;
        const z = this.$z;

        this.$x = x - $vector.x;
        this.$y = y - $vector.y;
        this.$z = z - $vector.z;

        return this;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vector3);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/core/vibration.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/core/vibration.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vibration": () => (/* binding */ Vibration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates vibrations.
 *
 * @example
 *
 * const vibration = new Vibration({
 *
 *     $duration: 200,
 *     $intensityFrequencyHigh: 0.8,
 *     $intensityFrequencyLow: 0.2
 * });
 */
class Vibration {

    /**
     * Stores the duration.
     * @type {number}
     * @private
     */
    $duration;

    /**
     * Stores the intensity of the high-frequency (weak) rumble motors.
     * @type {number}
     * @private
     */
    $intensityFrequencyHigh;

    /**
     * Stores the intensity of the low-frequency (strong) rumble motors.
     * @type {number}
     * @private
     */
    $intensityFrequencyLow;

    /**
     * Gets the duration (in ms).
     * @type {number}
     * @public
     */
    get duration() {

        return this.$duration;
    }

    /**
     * Gets the intensity of the high-frequency (weak) rumble motors (with value in [0, 1] range).
     * @type {number}
     * @public
     */
    get intensityFrequencyHigh() {

        return this.$intensityFrequencyHigh;
    }

    /**
     * Gets the intensity of the low-frequency (strong) rumble motors (with value in [0, 1] range).
     * @type {number}
     * @public
     */
    get intensityFrequencyLow() {

        return this.$intensityFrequencyLow;
    }

    /**
     * Creates a new vibration.
     * @param {Object} $parameters The given parameters.
     * @param {number} $parameters.$duration The duration (in ms).
     * @param {number} $parameters.$intensityFrequencyHigh The intensity of the high-frequency (weak) rumble motors (with value in [0, 1] range).
     * @param {number} $parameters.$intensityFrequencyLow The intensity of the low-frequency (strong) rumble motors (with value in [0, 1] range).
     */
    constructor({$duration, $intensityFrequencyHigh, $intensityFrequencyLow}) {

        this.$duration = $duration;
        this.$intensityFrequencyHigh = $intensityFrequencyHigh;
        this.$intensityFrequencyLow = $intensityFrequencyLow;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vibration);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/events/gamepad.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/events/gamepad.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventGamepad": () => (/* binding */ EventGamepad),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates gamepad events.
 *
 * @example
 *
 * const event = new EventGamepad(type, code, data);
 */
class EventGamepad extends Event {

    /**
     * @typedef {Object} typedatavibration The event data.
     * @property {number} typedatavibration.$duration The duration of the vibration (in ms).
     * @property {number} typedatavibration.$intensityFrequencyHigh The intensity of the high-frequency (weak) rumble motors (with value in [0, 1] range).
     * @property {number} typedatavibration.$intensityFrequencyLow The intensity of the low-frequency (strong) rumble motors (with value in [0, 1] range).
     */

    /**
     * Stores the event code.
     * @type {string}
     * @private
     */
    $code;

    /**
     * Stores the data.
     * @type {typedatavibration}
     * @private
     */
    $data;

    /**
     * Gets the event code.
     * @type {string}
     * @public
     */
    get code() {

        return this.$code;
    }

    /**
     * Gets the data.
     * @type {typedatavibration}
     * @public
     */
    get data() {

        return this.$data;
    }

    /**
     * Creates a new gamepad event.
     * @param {('gamepadvibrate')} $type The event type.
     * @param {string} $code The event code.
     * @param {typedatavibration} $data The data.
     */
    constructor($type, $code, $data) {

        super($type);

        this.$code = $code;
        this.$data = $data;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventGamepad);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/events/gamepadanalog.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/events/gamepadanalog.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventGamepadAnalog": () => (/* binding */ EventGamepadAnalog),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates gamepad analog events.
 *
 * @example
 *
 * const event = new EventGamepadAnalog(type, code, value);
 */
class EventGamepadAnalog extends Event {

    /**
     * Stores the event code.
     * @type {string}
     * @private
     */
    $code;

    /**
     * Stores the analog value.
     * @type {number}
     * @private
     */
    $value;

    /**
     * Gets the event code.
     * @type {string}
     * @public
     */
    get code() {

        return this.$code;
    }

    /**
     * Gets the analog value.
     * @type {number}
     * @public
     */
    get value() {

        return this.$value;
    }

    /**
     * Creates a new gamepad analog event.
     * @param {('gamepadanalog')} $type The event type.
     * @param {string} $code The event code.
     * @param {number} $value The analog value.
     */
    constructor($type, $code, $value) {

        super($type);

        this.$code = $code;
        this.$value = $value;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventGamepadAnalog);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/events/gamepaddigital.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/events/gamepaddigital.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventGamepadDigital": () => (/* binding */ EventGamepadDigital),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates gamepad digital events.
 *
 * @example
 *
 * const event = new EventGamepadDigital(type, code);
 */
class EventGamepadDigital extends Event {

    /**
     * Stores the event code.
     * @type {string}
     * @private
     */
    $code;

    /**
     * Gets the event code.
     * @type {string}
     * @public
     */
    get code() {

        return this.$code;
    }

    /**
     * Creates a new gamepad digital event.
     * @param {('gamepadconnect' | 'gamepaddown' | 'gamepadup' | 'gamepadvibrate')} $type The event type.
     * @param {string} $code The event code.
     */
    constructor($type, $code) {

        super($type);

        this.$code = $code;
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventGamepadDigital);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/extensions/gamepad.extension.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/extensions/gamepad.extension.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionGamepad": () => (/* binding */ ExtensionGamepad),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * The ordered list of the axes event codes of the gamepad.
 * @type {string[][]}
 * @constant
 */
const GAMEPADAXES = [

    ['StickLeftLeft', 'StickLeftRight'],
    ['StickLeftUp', 'StickLeftDown'],
    ['StickRightLeft', 'StickRightRight'],
    ['StickRightUp', 'StickRightDown']
];

/**
 * The ordered list of the buttons event codes of the gamepad.
 * @type {string[]}
 * @constant
 */
const GAMEPADBUTTONS = [

    'ClusterRightButtonBottom',
    'ClusterRightButtonRight',
    'ClusterRightButtonLeft',
    'ClusterRightButtonTop',
    'ClusterFrontButtonTopLeft',
    'ClusterFrontButtonTopRight',
    'ClusterFrontButtonBottomLeft',
    'ClusterFrontButtonBottomRight',
    'ClusterCenterButtonLeft',
    'ClusterCenterButtonRight',
    'StickLeftButton',
    'StickRightButton',
    'ClusterLeftButtonTop',
    'ClusterLeftButtonBottom',
    'ClusterLeftButtonLeft',
    'ClusterLeftButtonRight',
    'ClusterCenterButtonCenter'
];

/**
 * The threshold of the gampead axes.
 * @type {number}
 * @constant
 */
const THRESHOLDGAMEPADAXES = 0.5;

/**
 * Creates gamepad extension.
 *
 * @example
 *
 * const extensionGamepad = new ExtensionGamepad();
 */
class ExtensionGamepad {

    /**
     * Stores the index of the last connected gamepad.
     * @type {number}
     * @private
     */
    $indexLastConnected;

    /**
     * Stores the gamepad state.
     * @type {Object.<string, boolean>}
     * @private
     */
    $stateGamepad;

    /**
     * Stores the unloaded status.
     * @type {boolean}
     * @private
     */
    $unloaded;

    /**
     * Creates a new gamepad extension.
     */
    constructor() {

        this.$stateGamepad = {};
        this.$unloaded = false;

        [...GAMEPADBUTTONS, ...GAMEPADAXES.flat()].forEach(($code) => {

            this.$stateGamepad[$code] = false;
        });

        window.addEventListener('beforeunload', this.$onBeforeUnload.bind(this));

        window.addEventListener('gamepadconnected', this.$onConnect.bind(this));
        window.addEventListener('gamepaddisconnected', this.$onDisconnect.bind(this));

        window.addEventListener('gamepadvibrate', this.$onVibrate.bind(this));

        window.requestAnimationFrame(this.$update.bind(this));
    }

    /**
     * Called when the scope is about to be unloaded.
     * @private
     */
    $onBeforeUnload() {

        this.$unloaded = true;

        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[this.$indexLastConnected];

        if (typeof gamepad === 'undefined') {

            return;
        }

        if (typeof gamepad.vibrationActuator === 'undefined') {

            return;
        }

        gamepad.vibrationActuator.reset();
    }

    /**
     * Called when the gamepad is connected.
     * @param {GamepadEvent} $event The native gamepad connected event.
     * @private
     */
    $onConnect($event) {

        if ($event.gamepad.mapping !== 'standard') {

            return;
        }

        Object.entries(this.$stateGamepad).forEach(([$code, $activated]) => {

            if ($activated === true) {

                this.$stateGamepad[$code] = false;

                window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', $code));
            }
        });

        this.$indexLastConnected = $event.gamepad.index;

        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadconnect', 'Connected'));
    }

    /**
     * Called when the gamepad is disconnected.
     * @param {GamepadEvent} $event The native gamepad disconnected event.
     * @private
     */
    $onDisconnect($event) {

        if ($event.gamepad.index !== this.$indexLastConnected) {

            return;
        }

        Object.entries(this.$stateGamepad).forEach(([$code, $activated]) => {

            if ($activated === true) {

                this.$stateGamepad[$code] = false;

                window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', $code));
            }
        });

        this.$indexLastConnected = undefined;

        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadconnect', 'Disconnected'));
    }

    /**
     * Called when a gamepad vibration is needed.
     * @param {Event} $event The gamepad vibrate event.
     * @private
     */
    $onVibrate($event) {

        if (this.$unloaded === true) {

            return;
        }

        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[this.$indexLastConnected];

        if (typeof gamepad === 'undefined') {

            return;
        }

        if (typeof gamepad.vibrationActuator === 'undefined') {

            return;
        }

        if ($event instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital
        && $event.code === 'VibrateEnd') {

            gamepad.vibrationActuator.reset();

            return;
        }

        if ($event instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepad
        && $event.code === 'VibrateStart') {

            gamepad.vibrationActuator.playEffect('dual-rumble', {

                startDelay: 0,
                duration: $event.data.$duration,
                strongMagnitude: $event.data.$intensityFrequencyLow,
                weakMagnitude: $event.data.$intensityFrequencyHigh
            });

            return;
        }
    }

    /**
     * Updates the state of the gamepad.
     * @private
     */
    $update() {

        const gamepads = navigator.getGamepads();
        const gamepad = gamepads[this.$indexLastConnected];

        if (gamepad instanceof Gamepad) {

            GAMEPADBUTTONS.forEach(($button, $index) => {

                const button = gamepad.buttons[$index];

                if (button.pressed === true) {

                    if (this.$stateGamepad[$button] === false) {

                        this.$stateGamepad[$button] = true;
                    }

                    window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepaddown', $button));
                    window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadAnalog('gamepadanalog', $button, button.value));
                }

                else {

                    if (this.$stateGamepad[$button] === true) {

                        this.$stateGamepad[$button] = false;
                        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', $button));
                    }
                }
            });

            gamepad.axes.forEach(($direction, $index) => {

                const [axeMinimum, axeMaximum] = GAMEPADAXES[$index];

                if ($direction <= - THRESHOLDGAMEPADAXES) {

                    if (this.$stateGamepad[axeMaximum] === true) {

                        this.$stateGamepad[axeMaximum] = false;
                        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', axeMaximum));
                    }

                    this.$stateGamepad[axeMinimum] = true;
                    window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepaddown', axeMinimum));
                    window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadAnalog('gamepadanalog', axeMinimum, ($direction - (Math.sign($direction) * THRESHOLDGAMEPADAXES)) / (1 - THRESHOLDGAMEPADAXES)));
                }

                else if ($direction >= THRESHOLDGAMEPADAXES) {

                    if (this.$stateGamepad[axeMinimum] === true) {

                        this.$stateGamepad[axeMinimum] = false;
                        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', axeMinimum));
                    }

                    this.$stateGamepad[axeMaximum] = true;
                    window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepaddown', axeMaximum));
                    window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadAnalog('gamepadanalog', axeMaximum, ($direction - (Math.sign($direction) * THRESHOLDGAMEPADAXES)) / (1 - THRESHOLDGAMEPADAXES)));
                }

                else {

                    if (this.$stateGamepad[axeMinimum] === true) {

                        this.$stateGamepad[axeMinimum] = false;
                        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', axeMinimum));
                    }

                    if (this.$stateGamepad[axeMaximum] === true) {

                        this.$stateGamepad[axeMaximum] = false;
                        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadup', axeMaximum));
                    }
                }
            });
        }

        window.requestAnimationFrame(this.$update.bind(this));
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtensionGamepad);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLLIDERTYPES": () => (/* reexport module object */ _constants_collidertypes_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "CONTENTTYPES": () => (/* reexport module object */ _constants_contenttypes_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   "EVENTCODES": () => (/* reexport module object */ _constants_eventcodes_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "MATHEMATICS": () => (/* reexport module object */ _constants_mathematics_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "AABB": () => (/* reexport safe */ _core_aabb_js__WEBPACK_IMPORTED_MODULE_5__.AABB),
/* harmony export */   "Actor": () => (/* reexport safe */ _core_actor_js__WEBPACK_IMPORTED_MODULE_6__.Actor),
/* harmony export */   "ActorPreloadable": () => (/* reexport safe */ _core_actorpreloadable_js__WEBPACK_IMPORTED_MODULE_7__.ActorPreloadable),
/* harmony export */   "Collider": () => (/* reexport safe */ _core_collider_js__WEBPACK_IMPORTED_MODULE_8__.Collider),
/* harmony export */   "Engine": () => (/* reexport safe */ _core_engine_js__WEBPACK_IMPORTED_MODULE_9__.Engine),
/* harmony export */   "FiniteStateMachine": () => (/* reexport safe */ _core_finitestatemachine_js__WEBPACK_IMPORTED_MODULE_10__.FiniteStateMachine),
/* harmony export */   "Loop": () => (/* reexport safe */ _core_loop_js__WEBPACK_IMPORTED_MODULE_11__.Loop),
/* harmony export */   "Quaternion": () => (/* reexport safe */ _core_quaternion_js__WEBPACK_IMPORTED_MODULE_12__.Quaternion),
/* harmony export */   "Shader": () => (/* reexport safe */ _core_shader_js__WEBPACK_IMPORTED_MODULE_13__.Shader),
/* harmony export */   "Sound": () => (/* reexport safe */ _core_sound_js__WEBPACK_IMPORTED_MODULE_14__.Sound),
/* harmony export */   "Sprite": () => (/* reexport safe */ _core_sprite_js__WEBPACK_IMPORTED_MODULE_15__.Sprite),
/* harmony export */   "Stage": () => (/* reexport safe */ _core_stage_js__WEBPACK_IMPORTED_MODULE_16__.Stage),
/* harmony export */   "StagePreloadable": () => (/* reexport safe */ _core_stagepreloadable_js__WEBPACK_IMPORTED_MODULE_17__.StagePreloadable),
/* harmony export */   "State": () => (/* reexport safe */ _core_state_js__WEBPACK_IMPORTED_MODULE_18__.State),
/* harmony export */   "STORAGE": () => (/* reexport module object */ _core_storage_js__WEBPACK_IMPORTED_MODULE_19__),
/* harmony export */   "Timeline": () => (/* reexport safe */ _core_timeline_js__WEBPACK_IMPORTED_MODULE_20__.Timeline),
/* harmony export */   "TimelineKeyframe": () => (/* reexport safe */ _core_timelinekeyframe_js__WEBPACK_IMPORTED_MODULE_21__.TimelineKeyframe),
/* harmony export */   "UTILS": () => (/* reexport module object */ _core_utils_js__WEBPACK_IMPORTED_MODULE_22__),
/* harmony export */   "Vector2": () => (/* reexport safe */ _core_vector2_js__WEBPACK_IMPORTED_MODULE_23__.Vector2),
/* harmony export */   "Vector3": () => (/* reexport safe */ _core_vector3_js__WEBPACK_IMPORTED_MODULE_24__.Vector3),
/* harmony export */   "Vibration": () => (/* reexport safe */ _core_vibration_js__WEBPACK_IMPORTED_MODULE_25__.Vibration),
/* harmony export */   "EventGamepad": () => (/* reexport safe */ _events_gamepad_js__WEBPACK_IMPORTED_MODULE_26__.EventGamepad),
/* harmony export */   "EventGamepadAnalog": () => (/* reexport safe */ _events_gamepadanalog_js__WEBPACK_IMPORTED_MODULE_27__.EventGamepadAnalog),
/* harmony export */   "EventGamepadDigital": () => (/* reexport safe */ _events_gamepaddigital_js__WEBPACK_IMPORTED_MODULE_28__.EventGamepadDigital),
/* harmony export */   "SystemActor": () => (/* reexport safe */ _systems_actor_system_js__WEBPACK_IMPORTED_MODULE_29__.SystemActor),
/* harmony export */   "SystemAudio": () => (/* reexport safe */ _systems_audio_system_js__WEBPACK_IMPORTED_MODULE_30__.SystemAudio),
/* harmony export */   "SystemCollision": () => (/* reexport safe */ _systems_collision_system_js__WEBPACK_IMPORTED_MODULE_31__.SystemCollision),
/* harmony export */   "SystemInput": () => (/* reexport safe */ _systems_input_system_js__WEBPACK_IMPORTED_MODULE_32__.SystemInput),
/* harmony export */   "SystemRender": () => (/* reexport safe */ _systems_render_system_js__WEBPACK_IMPORTED_MODULE_33__.SystemRender),
/* harmony export */   "SystemVibration": () => (/* reexport safe */ _systems_vibration_system_js__WEBPACK_IMPORTED_MODULE_34__.SystemVibration)
/* harmony export */ });
/* harmony import */ var _extensions_gamepad_extension_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extensions/gamepad.extension.js */ "./node_modules/@theatrejs/theatrejs/sources/extensions/gamepad.extension.js");
/* harmony import */ var _constants_collidertypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/collidertypes.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/collidertypes.js");
/* harmony import */ var _constants_contenttypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/contenttypes.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/contenttypes.js");
/* harmony import */ var _constants_eventcodes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/eventcodes.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/eventcodes.js");
/* harmony import */ var _constants_mathematics_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/mathematics.js */ "./node_modules/@theatrejs/theatrejs/sources/constants/mathematics.js");
/* harmony import */ var _core_aabb_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/aabb.js */ "./node_modules/@theatrejs/theatrejs/sources/core/aabb.js");
/* harmony import */ var _core_actor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/actor.js */ "./node_modules/@theatrejs/theatrejs/sources/core/actor.js");
/* harmony import */ var _core_actorpreloadable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/actorpreloadable.js */ "./node_modules/@theatrejs/theatrejs/sources/core/actorpreloadable.js");
/* harmony import */ var _core_collider_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/collider.js */ "./node_modules/@theatrejs/theatrejs/sources/core/collider.js");
/* harmony import */ var _core_engine_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/engine.js */ "./node_modules/@theatrejs/theatrejs/sources/core/engine.js");
/* harmony import */ var _core_finitestatemachine_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/finitestatemachine.js */ "./node_modules/@theatrejs/theatrejs/sources/core/finitestatemachine.js");
/* harmony import */ var _core_loop_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/loop.js */ "./node_modules/@theatrejs/theatrejs/sources/core/loop.js");
/* harmony import */ var _core_quaternion_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/quaternion.js */ "./node_modules/@theatrejs/theatrejs/sources/core/quaternion.js");
/* harmony import */ var _core_shader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/shader.js */ "./node_modules/@theatrejs/theatrejs/sources/core/shader.js");
/* harmony import */ var _core_sound_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/sound.js */ "./node_modules/@theatrejs/theatrejs/sources/core/sound.js");
/* harmony import */ var _core_sprite_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/sprite.js */ "./node_modules/@theatrejs/theatrejs/sources/core/sprite.js");
/* harmony import */ var _core_stage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/stage.js */ "./node_modules/@theatrejs/theatrejs/sources/core/stage.js");
/* harmony import */ var _core_stagepreloadable_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/stagepreloadable.js */ "./node_modules/@theatrejs/theatrejs/sources/core/stagepreloadable.js");
/* harmony import */ var _core_state_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/state.js */ "./node_modules/@theatrejs/theatrejs/sources/core/state.js");
/* harmony import */ var _core_storage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/storage.js */ "./node_modules/@theatrejs/theatrejs/sources/core/storage.js");
/* harmony import */ var _core_timeline_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/timeline.js */ "./node_modules/@theatrejs/theatrejs/sources/core/timeline.js");
/* harmony import */ var _core_timelinekeyframe_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/timelinekeyframe.js */ "./node_modules/@theatrejs/theatrejs/sources/core/timelinekeyframe.js");
/* harmony import */ var _core_utils_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/utils.js */ "./node_modules/@theatrejs/theatrejs/sources/core/utils.js");
/* harmony import */ var _core_vector2_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./core/vector2.js */ "./node_modules/@theatrejs/theatrejs/sources/core/vector2.js");
/* harmony import */ var _core_vector3_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./core/vector3.js */ "./node_modules/@theatrejs/theatrejs/sources/core/vector3.js");
/* harmony import */ var _core_vibration_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./core/vibration.js */ "./node_modules/@theatrejs/theatrejs/sources/core/vibration.js");
/* harmony import */ var _events_gamepad_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./events/gamepad.js */ "./node_modules/@theatrejs/theatrejs/sources/events/gamepad.js");
/* harmony import */ var _events_gamepadanalog_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./events/gamepadanalog.js */ "./node_modules/@theatrejs/theatrejs/sources/events/gamepadanalog.js");
/* harmony import */ var _events_gamepaddigital_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./events/gamepaddigital.js */ "./node_modules/@theatrejs/theatrejs/sources/events/gamepaddigital.js");
/* harmony import */ var _systems_actor_system_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./systems/actor.system.js */ "./node_modules/@theatrejs/theatrejs/sources/systems/actor.system.js");
/* harmony import */ var _systems_audio_system_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./systems/audio.system.js */ "./node_modules/@theatrejs/theatrejs/sources/systems/audio.system.js");
/* harmony import */ var _systems_collision_system_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./systems/collision.system.js */ "./node_modules/@theatrejs/theatrejs/sources/systems/collision.system.js");
/* harmony import */ var _systems_input_system_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./systems/input.system.js */ "./node_modules/@theatrejs/theatrejs/sources/systems/input.system.js");
/* harmony import */ var _systems_render_system_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./systems/render.system.js */ "./node_modules/@theatrejs/theatrejs/sources/systems/render.system.js");
/* harmony import */ var _systems_vibration_system_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./systems/vibration.system.js */ "./node_modules/@theatrejs/theatrejs/sources/systems/vibration.system.js");


new _extensions_gamepad_extension_js__WEBPACK_IMPORTED_MODULE_0__.ExtensionGamepad();








































/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/systems/actor.system.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/systems/actor.system.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemActor": () => (/* binding */ SystemActor),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Creates actor systems.
 *
 * @example
 *
 * const system = new SystemActor();
 * system.tick({$stage, $timetick});
 */
class SystemActor {

    /**
     * Updates the system by one tick update.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').Stage} $parameters.$stage The stage on which to execute the system.
     * @param {number} $parameters.$timetick The tick duration (in ms).
     * @public
     */
    tick({$stage, $timetick}) {

        $stage.actors.forEach(($actor) => {

            $actor.onTick($timetick);
        });
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemActor);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/systems/audio.system.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/systems/audio.system.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemAudio": () => (/* binding */ SystemAudio),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates audio systems.
 *
 * @example
 *
 * const system = new SystemAudio();
 */
class SystemAudio {

    /**
     * @typedef {Object} typedataaudio The audio data.
     * @property {AudioBufferSourceNode} typeaudio.$audio The audio buffer source node.
     * @property {GainNode} typeaudio.$gain The gain.
     * @property {number} typeaudio.$startTime The start time of the audio in the audio context timeline.
     */

    /**
     * Stores the safe delay before removing the audio context when the system terminates.
     * @type {number}
     * @public
     * @readonly
     * @static
     */
    static DELAYCONTEXTCLEARSAFE = 1000;

    /**
     * Stores the cache of the audio assets.
     * @type {Map<string, AudioBuffer>}
     * @private
     */
    $cache;

    /**
     * Stores the audio context.
     * @type {AudioContext}
     * @private
     */
    $context;

    /**
     * Stores the mapping between the playing sounds and their audio data.
     * @type {Map<import('../index.js').Sound, typedataaudio>}
     * @private
     */
    $mappingSoundsPlaying;

    /**
     * Creates a new audio system.
     */
    constructor() {

        this.$cache = new Map();
        this.$context = new AudioContext();
        this.$mappingSoundsPlaying = new Map();
    }

    /**
     * Creates the values for the fade out curve.
     * @param {number} $volume The volume of the sound.
     * @returns {number[]}
     * @private
     */
    $createValuesCurveFadeOut($volume) {

        return [

            - 1 + $volume * 1,
            - 1 + $volume * 0
        ];
    }

    /**
     * Loads the audio from the given audio file content.
     * @param {Response} $content The audio file content.
     * @returns {Promise<AudioBuffer>}
     * @private
     */
    $loadAudio($content) {

        const promise = new Promise(($resolve) => {

            $content.arrayBuffer()
            .then(($bufferArray) => (this.$context.decodeAudioData($bufferArray))
            .then(($bufferAudio) => {

                this.$cache.set($content.url, $bufferAudio);

                $resolve($bufferAudio);
            }));
        });

        return promise;
    }

    /**
     * Prepares the audio from the given audio source.
     * @param {string} $audio The audio source.
     * @private
     */
    $prepareAudio($audio) {

        if (this.$cache.has($audio) === true) {

            return;
        }

        this.$cache.set($audio, undefined);

        fetch($audio)
        .then(($content) => (this.$loadAudio($content)));
    }

    /**
     * Terminates the given sound.
     * @param {import('../index.js').Sound} $sound The sound to terminate.
     * @private
     */
    $terminateSound($sound) {

        const {$audio, $gain, $startTime} = this.$mappingSoundsPlaying.get($sound);

        if ($sound.loop === false
        && this.$context.currentTime > $startTime + Math.max(0, $audio.buffer.duration - ($sound.durationFadeOut / 1000))) {

            return
        }

        $gain.gain.cancelScheduledValues(this.$context.currentTime);
        $gain.gain.setValueCurveAtTime(

            this.$createValuesCurveFadeOut($sound.volume),
            this.$context.currentTime,
            Math.min($audio.buffer.duration, $sound.durationFadeOut / 1000)
        );

        this.$mappingSoundsPlaying.delete($sound);

        $audio.onended = () => {

            $audio.disconnect();
            $gain.disconnect();
        };
    }

    /**
     * Checks if the system has loaded the given asset.
     * @param {string} $asset The asset source.
     * @returns {boolean}
     * @public
     */
    hasAssetLoaded($asset) {

        return this.$cache.has($asset) === true;
    }

    /**
     * Loads the audio from the given audio file content.
     * @param {Response} $content The audio file content.
     * @returns {Promise<AudioBuffer>}
     * @public
     */
    loadAudio($content) {

        if (this.$cache.has($content.url) === true) {

            const promise = new Promise(($resolve) => {

                const audio = this.$cache.get($content.url);

                $resolve(audio);
            });

            return promise;
        }

        this.$cache.set($content.url, undefined);

        return this.$loadAudio($content);
    }

    /**
     * Terminates the system.
     * @public
     */
    terminate() {

        let delayFadeOut = 0;

        Array.from(this.$mappingSoundsPlaying.keys()).forEach(($sound) => {

            if ($sound.durationFadeOut > delayFadeOut) {

                delayFadeOut = $sound.durationFadeOut;
            }

            this.$terminateSound($sound);
        });

        window.setTimeout(() => {

            this.$context.close();
            this.$context = undefined;

        }, delayFadeOut + SystemAudio.DELAYCONTEXTCLEARSAFE);
    }

    /**
     * Updates the system by one tick update.
     * @param {import('../index.js').Stage} $stage The stage on which to execute the system.
     * @public
     */
    tick($stage) {

        /**
         * @type {import('../index.js').Sound[]}
         */
        const previous = Array.from(this.$mappingSoundsPlaying.keys());

        $stage.actors.forEach(($actor) => {

            $actor.sounds.forEach(($sound) => {

                if (this.$mappingSoundsPlaying.has($sound) === true) {

                    _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.extract($sound, previous);

                    return;
                }

                this.$prepareAudio($sound.audio);

                if (typeof this.$cache.get($sound.audio) === 'undefined') {

                    return;
                }

                const bufferAudio = this.$cache.get($sound.audio);

                const audio = this.$context.createBufferSource();
                audio.buffer = bufferAudio;
                audio.connect(this.$context.destination);
                audio.start(0);

                const gain = this.$context.createGain();
                gain.gain.value = $sound.volume - 1;
                gain.connect(this.$context.destination);

                audio.connect(gain);

                this.$mappingSoundsPlaying.set($sound, {

                    $audio: audio,
                    $gain: gain,
                    $startTime: this.$context.currentTime
                });

                if ($sound.loop === true) {

                    audio.loop = true;

                    return;
                }

                gain.gain.setValueCurveAtTime(

                    this.$createValuesCurveFadeOut($sound.volume),
                    this.$context.currentTime + Math.max(0, audio.buffer.duration - ($sound.durationFadeOut / 1000)),
                    Math.min(audio.buffer.duration, $sound.durationFadeOut / 1000)
                );

                audio.onended = () => {

                    audio.disconnect();
                    gain.disconnect();

                    this.$mappingSoundsPlaying.delete($sound);

                    $actor.removeSound($sound);
                    $actor.onSoundFinish($sound);
                };
            });
        });

        previous.forEach(($sound) => {

            this.$terminateSound($sound);
        });
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemAudio);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/systems/collision.system.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/systems/collision.system.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemCollision": () => (/* binding */ SystemCollision),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates collision systems.
 *
 * @example
 *
 * const system = new SystemCollision();
 */
class SystemCollision {

    /**
     * @typedef {[import('../index.js').Actor, import('../index.js').Actor]} typepairactor A pair of actors.
     */

    /**
     * Stores the current collision pairs.
     * @type {typepairactor[]}
     * @private
     */
    $current;

    /**
     * Stores the previous collision pairs.
     * @type {typepairactor[]}
     * @private
     */
    $previous;

    /**
     * Creates a new collision system.
     */
    constructor() {

        this.$current = [];
        this.$previous = [];
    }

    /**
     * Checks if a collision previously existed between two given actors.
     * @param {import('../index.js').Actor} $dynamic The first actor to check on.
     * @param {import('../index.js').Actor} $inert The second actor to check with.
     * @returns {boolean}
     * @private
     */
    $hasCollisionPrevious($dynamic, $inert) {

        const result = this.$previous.find(([$dynamicPrevious, $inertPrevious]) => {

            return $dynamic === $dynamicPrevious
            && $inert === $inertPrevious;

        });

        return typeof result !== 'undefined';
    }

    /**
     * Updates the system by one tick update.
     * @param {import('../index.js').Stage} $stage The stage on which to execute the system.
     * @public
     */
    tick($stage) {

        /**
         * @typedef {Object} typepaircollision A pair of candidates for collision.
         * @property {number} typepaircollision.$distance The manhattan distance between the two actors.
         * @property {import('../index.js').Actor} typepaircollision.$dynamic The first actor.
         * @property {import('../index.js').Actor} typepaircollision.$inert The second actor.
         */

        /**
         * @type {typepaircollision[]}
         */
        const pairs = [];

        /**
         * @type {import('../index.js').Actor[]}
         */
        const dynamics = [];

        /**
         * @type {import('../index.js').Actor[]}
         */
        const kinetics = [];

        /**
         * @type {import('../index.js').Actor[]}
         */
        const statics = [];

        $stage.actors.forEach(($actor) => {

            if ($actor.hasCollider() === false) {

                return;
            }

            switch ($actor.collider.type) {

                case _index_js__WEBPACK_IMPORTED_MODULE_0__.COLLIDERTYPES.DYNAMIC: {

                    dynamics.push($actor);

                    break;
                }

                case _index_js__WEBPACK_IMPORTED_MODULE_0__.COLLIDERTYPES.KINETIC: {

                    kinetics.push($actor);

                    break;
                }

                case _index_js__WEBPACK_IMPORTED_MODULE_0__.COLLIDERTYPES.STATIC: {

                    statics.push($actor);

                    break;
                }
            }
        });

        const inerts = [...statics, ...kinetics];

        if (inerts.length === 0) {

            return;
        }

        dynamics.forEach(($dynamic) => {

            const boundariesDynamic = $dynamic.collider.boundaries.clone().translate($dynamic.translation);
            const centerBoundariesDynamic = new _index_js__WEBPACK_IMPORTED_MODULE_0__.AABB(boundariesDynamic.center, boundariesDynamic.center);

            inerts.forEach(($inert) => {

                const boundariesInert = $inert.collider.boundaries.clone().translate($inert.translation);

                const distance = _index_js__WEBPACK_IMPORTED_MODULE_0__.AABB.distanceManhattan(centerBoundariesDynamic, boundariesInert);

                pairs.push({

                    $distance: distance,
                    $dynamic: $dynamic,
                    $inert: $inert
                });
            });
        });

        pairs.sort(($a, $b) => {

            return $a.$distance - $b.$distance;
        });

        pairs.forEach(($pair) => {

            const {$dynamic, $inert} = $pair;

            if ($stage.hasActor($dynamic) === false) {

                return;
            }

            if ($stage.hasActor($inert) === false) {

                return;
            }

            const boundariesDynamic = $dynamic.collider.boundaries.clone().translate($dynamic.translation);
            const boundariesInert = $inert.collider.boundaries.clone().translate($inert.translation);

            const overlapX = _index_js__WEBPACK_IMPORTED_MODULE_0__.AABB.overlapX(boundariesDynamic, boundariesInert);

            if (overlapX <= 0) {

                return;
            }

            const overlapY = _index_js__WEBPACK_IMPORTED_MODULE_0__.AABB.overlapY(boundariesDynamic, boundariesInert);

            if (overlapY <= 0) {

                return;
            }

            this.$current.push([$dynamic, $inert]);

            const directionX = Math.sign($inert.translation.x - $dynamic.translation.x);
            const directionY = Math.sign($inert.translation.y - $dynamic.translation.y);

            const checkMinimumX = (overlapX <= overlapY);
            const checkMinimumY = (overlapY <= overlapX);

            if ($dynamic.collider.traversable === false
            && $inert.collider.traversable === false) {

                const resolverDynamic = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector2(

                    checkMinimumX ? - directionX * overlapX : 0,
                    checkMinimumY ? - directionY * overlapY : 0
                );

                $dynamic.translate(resolverDynamic);
            }

            const originDynamicEast = checkMinimumX === true && directionX === 1;
            const originDynamicNorth = checkMinimumY === true && directionY === 1;
            const originDynamicSouth = checkMinimumY === true && directionY === -1;
            const originDynamicWest = checkMinimumX === true && directionX === -1;

            if (this.$hasCollisionPrevious($dynamic, $inert) === false) {

                $dynamic.onCollideEnter({

                    $actor: $inert,
                    $east: originDynamicEast,
                    $north: originDynamicNorth,
                    $south: originDynamicSouth,
                    $west: originDynamicWest
                });

                $inert.onCollideEnter({

                    $actor: $dynamic,
                    $east: originDynamicWest,
                    $north: originDynamicSouth,
                    $south: originDynamicNorth,
                    $west: originDynamicEast
                });
            }

            $dynamic.onCollide({

                $actor: $inert,
                $east: originDynamicEast,
                $north: originDynamicNorth,
                $south: originDynamicSouth,
                $west: originDynamicWest
            });

            $inert.onCollide({

                $actor: $dynamic,
                $east: originDynamicWest,
                $north: originDynamicSouth,
                $south: originDynamicNorth,
                $west: originDynamicEast
            });
        });

        this.$previous.filter(([$dynamicPrevious, $inertPrevious]) => {

            const result = this.$current.find(([$dynamic, $inert]) => {

                return $dynamic === $dynamicPrevious
                && $inert === $inertPrevious;
            });

            return typeof result === 'undefined';

        }).forEach(([$dynamicPrevious, $inertPrevious]) => {

            $dynamicPrevious.onCollideLeave($inertPrevious);
            $inertPrevious.onCollideLeave($dynamicPrevious);
        });

        this.$previous = [...this.$current];
        this.$current = [];
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemCollision);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/systems/input.system.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/systems/input.system.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemInput": () => (/* binding */ SystemInput),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates input systems.
 *
 * @example
 *
 * const system = new SystemInput({$container});
 * system.initiate();
 * system.tick();
 */
class SystemInput {

    /**
     * Stores the container.
     * @type {HTMLElement}
     * @private
     */
    $container;

    /**
     * Stores the input events.
     * @type {Event[]}
     * @private
     */
    $events;

    /**
     * Stores the initiated status.
     * @type {boolean}
     * @private
     */
    $initiated;

    /**
     * Stores the state of the accepted inputs.
     * @type {Object.<string, boolean>}
     * @private
     */
    $inputs;

    /**
     * Stores the state of the accepted analog inputs.
     * @type {Object.<string, number>}
     * @private
     */
    $inputsAnalog;

    /**
     * Creates a new input system.
     * @param {Object} $parameters The given parameters.
     * @param {HTMLElement} $parameters.$container The container on which to attach input events.
     */
    constructor({$container}) {

        this.$container = $container;

        this.$events = [];
        this.$initiated = false;
        this.$inputs = {};
        this.$inputsAnalog = {};
    }

    /**
     * Stacks the input events for the next tick.
     * @param {Event} $event The input event to stack.
     * @private
     */
    $stack($event) {

        $event.preventDefault();

        this.$events.push($event);
    }

    /**
     * Gets the current input state value of the given digital input.
     * @param {string} $input The event code of the given digital input.
     * @returns {boolean}
     * @public
     */
    getInput($input) {

        const input = this.$inputs[$input];

        if (typeof input === 'undefined') {

            return false;
        }

        return input;
    }

    /**
     * Gets the current input state value of the given analog input.
     * @param {string} $input The event code of the given analog input.
     * @returns {number}
     * @public
     */
    getInputAnalog($input) {

        const input = this.$inputsAnalog[$input];

        if (typeof input === 'undefined') {

            return 0;
        }

        return input;
    }

    /**
     * Initiates the system.
     * @public
     */
    initiate() {

        if (this.$initiated === true) {

            return;
        }

        window.addEventListener('blur', this.$stack.bind(this));

        window.addEventListener('contextmenu', this.$stack.bind(this));

        window.addEventListener('gamepadanalog', this.$stack.bind(this));
        window.addEventListener('gamepadconnect', this.$stack.bind(this));
        window.addEventListener('gamepaddown', this.$stack.bind(this));
        window.addEventListener('gamepadup', this.$stack.bind(this));

        this.$container.addEventListener('keydown', this.$stack.bind(this));
        this.$container.addEventListener('keyup', this.$stack.bind(this));

        this.$initiated = true;
    }

    /**
     * Terminates the system.
     * @public
     */
    terminate() {

        if (this.$initiated === false) {

            return;
        }

        window.removeEventListener('blur', this.$stack.bind(this));

        window.removeEventListener('contextmenu', this.$stack.bind(this));

        window.removeEventListener('gamepadanalog', this.$stack.bind(this));
        window.removeEventListener('gamepadconnect', this.$stack.bind(this));
        window.removeEventListener('gamepaddown', this.$stack.bind(this));
        window.removeEventListener('gamepadup', this.$stack.bind(this));

        this.$container.removeEventListener('keydown', this.$stack.bind(this));
        this.$container.removeEventListener('keyup', this.$stack.bind(this));

        this.$initiated = false;
    }

    /**
     * Updates the system by one tick update.
     * @public
     */
    tick() {

        if (this.$initiated === false) {

            this.initiate();
        }

        while (this.$events.length > 0) {

            const $event = this.$events.shift();

            if ($event.type === 'blur') {

                this.$inputs = {};
                this.$inputsAnalog = {};
            }

            else if ($event instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadAnalog
            && $event.type === 'gamepadanalog') {

                this.$inputsAnalog[$event.code] = $event.value;
            }

            else if ($event instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital
            && $event.type === 'gamepaddown') {

                if (typeof this.$inputs[$event.code] === 'undefined') {

                    this.$inputs[$event.code] = true;
                }
            }

            else if ($event instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital
            && $event.type === 'gamepadup') {

                if (typeof this.$inputs[$event.code] !== 'undefined') {

                    delete this.$inputs[$event.code];
                }
            }

            else if ($event instanceof KeyboardEvent
            && $event.type === 'keydown') {

                if (typeof this.$inputs[$event.code] === 'undefined') {

                    this.$inputs[$event.code] = true;
                }
            }

            else if ($event instanceof KeyboardEvent
            && $event.type === 'keyup') {

                if (typeof this.$inputs[$event.code] !== 'undefined') {

                    delete this.$inputs[$event.code];
                }
            }
        }
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemInput);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/systems/render.system.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/systems/render.system.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemRender": () => (/* binding */ SystemRender),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates render systems.
 *
 * @example
 *
 * const system = new SystemRender({$color, $container, $resolution});
 * system.initiate();
 * system.tick($stage);
 */
class SystemRender {

    /**
     * Stores the texture unit for the textures to preload.
     * @type {0}
     * @public
     * @readonly
     * @static
     */
    static UNITTEXTURE0 = 0;

    /**
     * Stores the texture unit for the color textures.
     * @type {1}
     * @public
     * @readonly
     * @static
     */
    static UNITTEXTURE1 = 1;

    /**
     * Stores the texture unit for the opacity textures.
     * @type {2}
     * @public
     * @readonly
     * @static
     */
    static UNITTEXTURE2 = 2;

    /**
     * Stores the common vertices positions of the sprites.
     * @type {WebGLBuffer}
     * @private
     */
    $bufferPosition;

    /**
     * Stores the cache of the texture assets.
     * @type {Map<string, WebGLTexture>}
     * @private
     */
    $cache;

    /**
     * Stores the canvas element.
     * @type {HTMLCanvasElement}
     * @private
     */
    $canvas;

    /**
     * Stores the background color.
     * @type {import('../index.js').Vector3}
     * @private
     */
    $color;

    /**
     * Stores the container.
     * @type {HTMLElement}
     * @private
     */
    $container;

    /**
     * Stores the canvas context.
     * @type {WebGL2RenderingContext}
     * @private
     */
    $context;

    /**
     * Stores the number of indices of the vertices positions of the sprites.
     * @type {number}
     * @private
     */
    $indices;

    /**
     * Stores the initiated status.
     * @type {boolean}
     * @private
     */
    $initiated;

    /**
     * Stores the shader program attribute locations.
     * @type {Object.<string, number>}
     * @private
     */
    $locationsAttribute;

    /**
     * Stores the shader program uniform locations.
     * @type {Object.<string, WebGLUniformLocation>}
     * @private
     */
    $locationsUniform;

    /**
     * Stores the mapping between the texture sources and their uvmappings.
     * @type {Object.<string, WebGLBuffer>}
     * @private
     */
    $mappingBuffersUv;

    /**
     * Stores the shader program.
     * @type {WebGLProgram}
     * @private
     */
    $program;

    /**
     * Stores the ResizeObserver.
     * @type {ResizeObserver}
     * @private
     */
    $resizeOberver;

    /**
     * Stores the resolution.
     * @type {import('../index.js').Vector2}
     * @private
     */
    $resolution;

    /**
     * Stores the texture of the default color texture source.
     * @type {WebGLTexture}
     * @private
     */
    $textureColorDefault;

    /**
     * Stores the texture of the default opacity texture source.
     * @type {WebGLTexture}
     * @private
     */
    $textureOpacityDefault;

    /**
     * Creates a new render system.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').Vector3} [$parameters.$color] The rendering background color to use.
     * @param {HTMLElement} $parameters.$container The container on which to attach the canvas.
     * @param {import('../index.js').Vector2} $parameters.$resolution The rendering resolution to use.
     */
    constructor({$color = new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0), $container, $resolution}) {

        this.$color = $color;
        this.$container = $container;
        this.$resolution = $resolution;

        this.$cache = new Map();
        this.$canvas = document.createElement('canvas');
        this.$canvas.style.width = '100%';
        this.$canvas.style.height = '100%';
        this.$canvas.style.display = 'block';
        this.$canvas.style.outline = '0';
        this.$canvas.style.imageRendering = 'pixelated';
        this.$context = this.$canvas.getContext('webgl2', {

            'antialias': false
        });

        $container.appendChild(this.$canvas);

        this.$resize();

        this.$initiated = false;
    }

    /**
     * Creates the common vertices positions of the sprites.
     * @private
     */
    $createBufferPositions() {

        const positions = [

            -0.5, -0.5,
            -0.5, 0.5,
            0.5, 0.5,
            0.5, -0.5
        ];

        const bufferPosition = this.$context.createBuffer();
        this.$context.bindBuffer(this.$context.ARRAY_BUFFER, bufferPosition);
        this.$context.bufferData(this.$context.ARRAY_BUFFER, new Float32Array(positions), this.$context.STATIC_DRAW);

        this.$bufferPosition = bufferPosition;
    }

    /**
     * Creates the uvmapping from the given sprite.
     * @param {import('../index.js').Sprite} $sprite The sprite.
     * @private
     */
    $createBufferUvsOnce($sprite) {

        if (typeof this.$mappingBuffersUv[$sprite.frameSourceSerialized] !== 'undefined') {

            return;
        }

        const frame = $sprite.frameSource;

        const uvs = [

            frame.minimum.x, frame.maximum.y,
            frame.minimum.x, frame.minimum.y,
            frame.maximum.x, frame.minimum.y,
            frame.maximum.x, frame.maximum.y
        ];

        const bufferUv = this.$context.createBuffer();
        this.$context.bindBuffer(this.$context.ARRAY_BUFFER, bufferUv);
        this.$context.bufferData(this.$context.ARRAY_BUFFER, new Float32Array(uvs), this.$context.STATIC_DRAW);

        this.$mappingBuffersUv[$sprite.frameSourceSerialized] = bufferUv;
    }

    /**
     * Creates the indices of the vertices positions of the sprites.
     * @private
     */
    $createIndices() {

        const indices = [

            0,
            1,
            2,
            3
        ];

        const bufferIndex = this.$context.createBuffer();
        this.$context.bindBuffer(this.$context.ELEMENT_ARRAY_BUFFER, bufferIndex);
        this.$context.bufferData(this.$context.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), this.$context.STATIC_DRAW);

        this.$indices = indices.length;
    }

    /**
     * Creates the attributes locations to use by the shader program.
     * @param {WebGLProgram} $program The shader program.
     * @param {typeof import('../index.js').Shader} $shader The representation of the shader.
     * @private
     */
    $createLocationsAttribute($program, $shader) {

        Object.keys($shader.attributes).forEach(($name) => {

            this.$locationsAttribute[$name] = this.$context.getAttribLocation($program, $name);
        });
    }

    /**
     * Creates the uniform locations to use by the shader program.
     * @param {WebGLProgram} $program The shader program.
     * @param {typeof import('../index.js').Shader} $shader The representation of the shader.
     * @private
     */
    $createLocationsUniform($program, $shader) {

        Object.keys($shader.uniforms).forEach(($name) => {

            this.$locationsUniform[$name] = this.$context.getUniformLocation($program, $name);
        });
    }

    /**
     * Creates the shader program.
     * @param {typeof import('../index.js').Shader} $shader The representation of the shader.
     * @private
     */
    $createProgram($shader) {

        const shaderVertex = this.$context.createShader(this.$context.VERTEX_SHADER);
        this.$context.shaderSource(shaderVertex, $shader.sourceVertex);
        this.$context.compileShader(shaderVertex);

        const shaderFragment = this.$context.createShader(this.$context.FRAGMENT_SHADER);
        this.$context.shaderSource(shaderFragment, $shader.sourceFragment);
        this.$context.compileShader(shaderFragment);

        this.$program = this.$context.createProgram();
        this.$context.attachShader(this.$program, shaderVertex);
        this.$context.attachShader(this.$program, shaderFragment);
        this.$context.linkProgram(this.$program);
    }

    /**
     * Creates a texture from the given bitmap texture data.
     * @param {ImageBitmap} $textureBitmap The bitmap texture data.
     * @param {number} $unitTexture The target texture unit.
     * @returns {WebGLTexture}
     * @private
     */
    $createTexture($textureBitmap, $unitTexture) {

        const texture = this.$context.createTexture();

        this.$context.activeTexture($unitTexture);
        this.$context.bindTexture(this.$context.TEXTURE_2D, texture);

        this.$context.texParameteri(this.$context.TEXTURE_2D, this.$context.TEXTURE_MIN_FILTER, this.$context.NEAREST);
        this.$context.texParameteri(this.$context.TEXTURE_2D, this.$context.TEXTURE_MAG_FILTER, this.$context.NEAREST);
        this.$context.texParameteri(this.$context.TEXTURE_2D, this.$context.TEXTURE_WRAP_S, this.$context.CLAMP_TO_EDGE);
        this.$context.texParameteri(this.$context.TEXTURE_2D, this.$context.TEXTURE_WRAP_T, this.$context.CLAMP_TO_EDGE);

        this.$context.texImage2D(this.$context.TEXTURE_2D, 0, this.$context.RGBA, this.$context.RGBA, this.$context.UNSIGNED_BYTE, $textureBitmap);

        return texture;
    }

    /**
     * Creates a default texture (1 pixel texture).
     * @param {import('../index.js').Vector3} $color The target texture unit.
     * @param {number} $unitTexture The target texture unit.
     * @returns {WebGLTexture}
     * @private
     */
    $createTextureDefault($color, $unitTexture) {

        const texture = this.$context.createTexture();

        this.$context.activeTexture(this.$context.TEXTURE0 + $unitTexture);
        this.$context.bindTexture(this.$context.TEXTURE_2D, texture);
        this.$context.texImage2D(this.$context.TEXTURE_2D, 0, this.$context.RGBA, 1, 1, 0, this.$context.RGBA, this.$context.UNSIGNED_BYTE, new Uint8Array([$color.x, $color.y, $color.z, 255]));

        return texture;
    }

    /**
     * Loads the texture from the given texture file content.
     * @param {Response} $content The texture file content.
     * @param {number} $unitTexture The target texture unit.
     * @returns {Promise<WebGLTexture>}
     * @private
     */
    $loadTexture($content, $unitTexture) {

        const promise = new Promise(($resolve) => {

            $content.blob()
            .then(($blob) => (createImageBitmap($blob)))
            .then(($textureBitmap) => {

                const texture = this.$createTexture($textureBitmap, $unitTexture);

                this.$cache.set($content.url, texture);

                $resolve(texture);
            });
        });

        return promise;
    }

    /**
     * Prepares the texture from the given texture source.
     * @param {string} $texture The texture source.
     * @param {number} $unitTexture The target texture unit.
     * @private
     */
    $prepareTexture($texture, $unitTexture) {

        if (this.$cache.has($texture) === true) {

            return;
        }

        this.$cache.set($texture, undefined);

        fetch($texture)
        .then(($content) => (this.$loadTexture($content, $unitTexture)));
    }

    /**
     * Called when the scope is about to be unloaded.
     * @private
     */
    $onBeforeUnload() {

        this.$context.getExtension('WEBGL_lose_context').loseContext();
    }

    /**
     * Resets the canvas.
     * @param {number} $width The context viewport width.
     * @param {number} $height The context viewport height.
     * @private
     */
    $resetCanvas($width, $height) {

        this.$context.clearColor(this.$color.x, this.$color.y, this.$color.z, 1);
        this.$context.clearDepth(1);

        this.$context.viewport(0, 0, $width, $height);
        this.$context.clear(this.$context.COLOR_BUFFER_BIT | this.$context.DEPTH_BUFFER_BIT);
    }

    /**
     * Resizes the rendering context.
     * @public
     */
    $resize() {

        const width = this.$resolution.x;
        const height = this.$resolution.y;

        const widthContext = Math.max(width, Math.floor(height * this.$canvas.clientWidth / this.$canvas.clientHeight));
        const heightContext = Math.max(height, Math.floor(width * this.$canvas.clientHeight / this.$canvas.clientWidth));

        this.$canvas.setAttribute('width', '' + Math.floor(widthContext / 2) * 2);
        this.$canvas.setAttribute('height', '' + Math.floor(heightContext / 2) * 2);
    }

    /**
     * Sends an attribute to the shader program.
     * @param {typeof import('../index.js').Shader} $shader The representation of the shader.
     * @param {string} $name The name of the attribute.
     * @param {any} $value The value of the attribute.
     * @private
     */
    $sendAttribute($shader, $name, $value) {

        if (typeof $shader.attributes[$name] === 'undefined') {

            return;
        }

        const type = $shader.attributes[$name];

        switch (type) {

            case 'vec2': {

                this.$context.bindBuffer(this.$context.ARRAY_BUFFER, $value);
                const location = this.$locationsAttribute[$name];
                this.$context.vertexAttribPointer(location, 2, this.$context.FLOAT, false, 0, 0);
                this.$context.enableVertexAttribArray(location);

                break;
            }

            case 'vec3': {

                this.$context.bindBuffer(this.$context.ARRAY_BUFFER, $value);
                const location = this.$locationsAttribute[$name];
                this.$context.vertexAttribPointer(location, 3, this.$context.FLOAT, false, 0, 0);
                this.$context.enableVertexAttribArray(location);

                break;
            }
        }
    }

    /**
     * Sends a uniform to the shader program.
     * @param {typeof import('../index.js').Shader} $shader The representation of the shader.
     * @param {string} $name The name of the uniform.
     * @param {any} $value The value of the uniform.
     * @private
     */
    $sendUniform($shader, $name, $value) {

        if (typeof $shader.uniforms[$name] === 'undefined') {

            return;
        }

        const type = $shader.uniforms[$name];

        switch (type) {

            case 'bool':
            case 'int':
            case 'sampler2D': {

                this.$context.uniform1i(this.$locationsUniform[$name], $value);

                break;
            }

            case 'bool[]':
            case 'int[]': {

                this.$context.uniform1iv(this.$locationsUniform[$name], $value);

                break;
            }

            case 'float': {

                this.$context.uniform1f(this.$locationsUniform[$name], $value);

                break;
            }

            case 'float[]': {

                this.$context.uniform1fv(this.$locationsUniform[$name], $value);

                break;
            }

            case 'mat4':
            case 'mat4[]': {

                this.$context.uniformMatrix4fv(this.$locationsUniform[$name], false, $value);

                break;
            }

            case 'vec2':
            case 'vec2[]': {

                this.$context.uniform2fv(this.$locationsUniform[$name], $value);

                break;
            }

            case 'vec3':
            case 'vec3[]': {

                this.$context.uniform3fv(this.$locationsUniform[$name], $value);

                break;
            }
        }
    }

    /**
     * Checks if the system has loaded the given asset.
     * @param {string} $asset The asset source.
     * @returns {boolean}
     * @public
     */
    hasAssetLoaded($asset) {

        return this.$cache.has($asset) === true;
    }

    /**
     * Initiates the system.
     * @public
     */
    initiate() {

        if (this.$initiated === true) {

            return;
        }

        this.$indices = 0;
        this.$locationsAttribute = {};
        this.$locationsUniform = {};
        this.$mappingBuffersUv = {};

        this.$context.frontFace(this.$context.CW);
        this.$context.enable(this.$context.CULL_FACE);
        this.$context.cullFace(this.$context.BACK);

        this.$context.enable(this.$context.BLEND);
        this.$context.blendFunc(this.$context.SRC_ALPHA, this.$context.ONE_MINUS_SRC_ALPHA);

        this.$createProgram(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader);

        this.$context.useProgram(this.$program);

        this.$createLocationsUniform(this.$program, _index_js__WEBPACK_IMPORTED_MODULE_0__.Shader);
        this.$createLocationsAttribute(this.$program, _index_js__WEBPACK_IMPORTED_MODULE_0__.Shader);

        this.$createBufferPositions();
        this.$createIndices();

        this.$textureColorDefault = this.$createTextureDefault(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(127, 127, 127), SystemRender.UNITTEXTURE1);
        this.$textureOpacityDefault = this.$createTextureDefault(new _index_js__WEBPACK_IMPORTED_MODULE_0__.Vector3(255, 255, 255), SystemRender.UNITTEXTURE2);

        this.$resizeOberver = new ResizeObserver(this.$resize.bind(this));
        this.$resizeOberver.observe(this.$container);

        window.addEventListener('beforeunload', this.$onBeforeUnload.bind(this));

        this.$initiated = true;
    }

    /**
     * Loads the texture from the given texture file content.
     * @param {Response} $content The texture file content.
     * @returns {Promise<WebGLTexture>}
     * @public
     */
    loadTexture($content) {

        if (this.$initiated === false) {

            this.initiate();
        }

        if (this.$cache.has($content.url) === true) {

            const promise = new Promise(($resolve) => {

                const texture = this.$cache.get($content.url);

                $resolve(texture);
            });

            return promise;
        }

        this.$cache.set($content.url, undefined);

        return this.$loadTexture($content, this.$context.TEXTURE0 + SystemRender.UNITTEXTURE0);
    }

    /**
     * Sets the rendering background color.
     * @param {import('../index.js').Vector3} $color The rendering background color to set.
     * @public
     */
    setColor($color) {

        this.$color = $color;
    }

    /**
     * Sets the rendering resolution.
     * @param {import('../index.js').Vector2} $resolution The rendering resolution to set.
     * @public
     */
    setResolution($resolution) {

        this.$resolution = $resolution.clone();

        this.$resize();
    }

    /**
     * Terminates the system.
     * @public
     */
    terminate() {

        if (this.$initiated === false) {

            return;
        }

        this.$resizeOberver.disconnect();

        window.removeEventListener('beforeunload', this.$onBeforeUnload.bind(this));

        this.$initiated = false;
    }

    /**
     * Updates the system by one tick update.
     * @param {import('../index.js').Stage} $stage The stage on which to execute the system.
     * @public
     */
    tick($stage) {

        if (this.$initiated === false) {

            this.initiate();
        }

        this.$resetCanvas(this.$canvas.width, this.$canvas.height);

        this.$sendUniform(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'uniformAspect', [this.$canvas.width, this.$canvas.height]);
        this.$sendUniform(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'uniformTranslationPointOfView', [Math.floor($stage.pointOfView.translation.x), Math.floor($stage.pointOfView.translation.y)]);

        this.$sendAttribute(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'attributePosition', this.$bufferPosition);

        const actors = [...$stage.actors];

        actors.sort(($a, $b) => {

            return $a.zIndex - $b.zIndex;
        });

        actors.forEach(($actor) => {

            if ($actor.hasSprite() === false) {

                return;
            }

            let textureColor = this.$textureColorDefault;

            this.$prepareTexture($actor.sprite.textureColor, this.$context.TEXTURE0 + SystemRender.UNITTEXTURE1);

            if (typeof this.$cache.get($actor.sprite.textureColor) !== 'undefined') {

                textureColor = this.$cache.get($actor.sprite.textureColor);
            }

            this.$context.activeTexture(this.$context.TEXTURE0 + SystemRender.UNITTEXTURE1);
            this.$context.bindTexture(this.$context.TEXTURE_2D, textureColor);
            this.$sendUniform(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'uniformTextureColor', SystemRender.UNITTEXTURE1);

            let textureOpacity = this.$textureOpacityDefault;

            if (typeof $actor.sprite.textureOpacity !== 'undefined') {

                this.$prepareTexture($actor.sprite.textureOpacity, this.$context.TEXTURE0 + SystemRender.UNITTEXTURE2);

                if (typeof this.$cache.get($actor.sprite.textureOpacity) !== 'undefined') {

                    textureOpacity = this.$cache.get($actor.sprite.textureOpacity);
                }
            }

            this.$context.activeTexture(this.$context.TEXTURE0 + SystemRender.UNITTEXTURE2);
            this.$context.bindTexture(this.$context.TEXTURE_2D, textureOpacity);
            this.$sendUniform(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'uniformTextureOpacity', SystemRender.UNITTEXTURE2);

            this.$sendUniform(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'uniformSize', [$actor.sprite.sizeTarget.x, $actor.sprite.sizeTarget.y]);
            this.$sendUniform(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'uniformTranslation', [Math.floor($actor.translation.x), Math.floor($actor.translation.y)]);

            this.$createBufferUvsOnce($actor.sprite);
            this.$sendAttribute(_index_js__WEBPACK_IMPORTED_MODULE_0__.Shader, 'attributeUvmapping', this.$mappingBuffersUv[$actor.sprite.frameSourceSerialized]);

            this.$context.drawElements(this.$context.TRIANGLE_FAN, this.$indices, this.$context.UNSIGNED_INT, 0);
        });
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemRender);


/***/ }),

/***/ "./node_modules/@theatrejs/theatrejs/sources/systems/vibration.system.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@theatrejs/theatrejs/sources/systems/vibration.system.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemVibration": () => (/* binding */ SystemVibration),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./node_modules/@theatrejs/theatrejs/sources/index.js");


/**
 * Creates vibration systems.
 *
 * @example
 *
 * const system = new SystemVibration();
 */
class SystemVibration {

    /**
     * Stores the delay before a vibration ends.
     * @type {number}
     * @public
     * @readonly
     * @static
     */
    static DELAYVIBRATIONEND = 1000;

    /**
     * Stores the mapping between the playing vibrations and their elapsed time.
     * @type {Map<import('../index.js').Vibration, number>}
     * @private
     */
    $mappingVibrationsPlaying;

    /**
     * Creates a new vibration system.
     */
    constructor() {

        this.$mappingVibrationsPlaying = new Map();
    }

    /**
     * Terminates the system.
     * @public
     */
    terminate() {

        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepadDigital('gamepadvibrate', _index_js__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.VIBRATEEND));
    }

    /**
     * Updates the system by one tick update.
     * @param {Object} $parameters The given parameters.
     * @param {import('../index.js').Stage} $parameters.$stage The stage on which to execute the system.
     * @param {number} $parameters.$timetick The tick duration (in ms).
     * @public
     */
    tick({$stage, $timetick}) {

        /**
         * @type {import('../index.js').Vibration[]}
         */
        const previous = Array.from(this.$mappingVibrationsPlaying.keys());

        $stage.actors.forEach(($actor) => {

            /**
             * @type {import('../index.js').Vibration[]}
             */
            const finished = [];

            $actor.vibrations.forEach(($vibration) => {

                if (this.$mappingVibrationsPlaying.has($vibration) === false) {

                    this.$mappingVibrationsPlaying.set($vibration, 0);

                    return;
                }

                const elapsedTime = this.$mappingVibrationsPlaying.get($vibration) + $timetick;

                if (elapsedTime >= $vibration.duration) {

                    finished.push($vibration);

                    return;
                }

                this.$mappingVibrationsPlaying.set($vibration, elapsedTime);

                _index_js__WEBPACK_IMPORTED_MODULE_0__.UTILS.extract($vibration, previous);
            });

            finished.forEach(($vibration) => {

                $actor.removeVibration($vibration);
            });
        });

        previous.forEach(($vibration) => {

            this.$mappingVibrationsPlaying.delete($vibration);
        });

        /**
         * @type {import('../index.js').Vibration[]}
         */
        const current = Array.from(this.$mappingVibrationsPlaying.keys());

        let intensityFrequencyHigh = 0;
        let intensityFrequencyLow = 0;

        current.forEach(($vibration) => {

            intensityFrequencyHigh = Math.max(intensityFrequencyHigh, $vibration.intensityFrequencyHigh);
            intensityFrequencyLow = Math.max(intensityFrequencyLow, $vibration.intensityFrequencyLow);
        });

        window.dispatchEvent(new _index_js__WEBPACK_IMPORTED_MODULE_0__.EventGamepad('gamepadvibrate', _index_js__WEBPACK_IMPORTED_MODULE_0__.EVENTCODES.GAMEPADXBOX.VIBRATESTART, {

            $duration: SystemVibration.DELAYVIBRATIONEND,
            $intensityFrequencyHigh: intensityFrequencyHigh,
            $intensityFrequencyLow: intensityFrequencyLow
        }));
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SystemVibration);


/***/ }),

/***/ "./sources/actors/button-continue/button-continue-64x16.json":
/*!*******************************************************************!*\
  !*** ./sources/actors/button-continue/button-continue-64x16.json ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"sprite":{"width":192,"height":80},"frames":{"disabled":[{"x":64,"y":16,"width":64,"height":16}],"idle":[{"x":64,"y":32,"width":64,"height":16}],"focus":[{"x":64,"y":48,"width":64,"height":16}],"active":[{"x":64,"y":64,"width":64,"height":16},{"x":128,"y":64,"width":64,"height":16}]}}');

/***/ }),

/***/ "./sources/actors/button-dlc/button-dlc-64x16.json":
/*!*********************************************************!*\
  !*** ./sources/actors/button-dlc/button-dlc-64x16.json ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"sprite":{"width":192,"height":80},"frames":{"disabled":[{"x":64,"y":16,"width":64,"height":16}],"idle":[{"x":64,"y":32,"width":64,"height":16}],"focus":[{"x":64,"y":48,"width":64,"height":16}],"active":[{"x":64,"y":64,"width":64,"height":16},{"x":128,"y":64,"width":64,"height":16}]}}');

/***/ }),

/***/ "./sources/actors/button-new-game/button-new-game-64x16.json":
/*!*******************************************************************!*\
  !*** ./sources/actors/button-new-game/button-new-game-64x16.json ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"sprite":{"width":192,"height":80},"frames":{"disabled":[{"x":64,"y":16,"width":64,"height":16}],"idle":[{"x":64,"y":32,"width":64,"height":16}],"focus":[{"x":64,"y":48,"width":64,"height":16}],"active":[{"x":64,"y":64,"width":64,"height":16},{"x":128,"y":64,"width":64,"height":16}]}}');

/***/ }),

/***/ "./sources/actors/button-quit/button-quit-64x16.json":
/*!***********************************************************!*\
  !*** ./sources/actors/button-quit/button-quit-64x16.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"sprite":{"width":192,"height":80},"frames":{"disabled":[{"x":64,"y":16,"width":64,"height":16}],"idle":[{"x":64,"y":32,"width":64,"height":16}],"focus":[{"x":64,"y":48,"width":64,"height":16}],"active":[{"x":64,"y":64,"width":64,"height":16},{"x":128,"y":64,"width":64,"height":16}]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map