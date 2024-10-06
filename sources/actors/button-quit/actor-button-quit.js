import {Actor, FACTORIES, Timeline} from '@theatrejs/theatrejs';

import * as PLUGINASEPRITE from '@theatrejs/plugin-aseprite';

import asepriteButtonQuit from './button-quit-64x16.aseprite';

class ActorButtonQuit extends FACTORIES.ActorWithPreloadables([PLUGINASEPRITE.FACTORIES.PreloadableAseprite(asepriteButtonQuit)]) {

    /**
     * Stores the spritesheet.
     * @type {PLUGINASEPRITE.Aseprite<('activated' | 'disabled' | 'focus' | 'idle')>}
     * @private
     */
    $spritesheet;

    /**
     * Stores the timeline.
     * @type {Timeline}
     * @private
     */
    $timeline;

    /**
     * Triggers the 'activate' action.
     * @public
     */
    actionActivate() {

        this.$timeline = this.$spritesheet.createTimeline({$actor: this, $framerate: 10, $loop: true, $tag: 'activated'});
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'disable' action.
     * @public
     */
    actionDisable() {

        this.$timeline = this.$spritesheet.createTimeline({$actor: this, $framerate: 10, $loop: true, $tag: 'disabled'});
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'focus' action.
     * @public
     */
    actionFocus() {

        this.$timeline = this.$spritesheet.createTimeline({$actor: this, $framerate: 10, $loop: true, $tag: 'focus'});
        this.$timeline.seekTimecode(0);
    }

    /**
     * Triggers the 'rest' action.
     * @public
     */
    actionRest() {

        this.$timeline = this.$spritesheet.createTimeline({$actor: this, $framerate: 10, $loop: true, $tag: 'idle'});
        this.$timeline.seekTimecode(0);
    }

    /**
     * @type {Actor['onCreate']}
     */
    onCreate() {

        this.$spritesheet = asepriteButtonQuit;

        this.actionRest();
    }

    /**
     * @type {Actor['onTick']}
     */
    onTick($timetick) {

        this.$timeline.tick($timetick);
    }
}

export default ActorButtonQuit;
