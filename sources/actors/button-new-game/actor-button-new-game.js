import {Actor, FACTORIES} from '@theatrejs/theatrejs';
import * as PLUGINASEPRITE from '@theatrejs/plugin-aseprite';

import asepriteButtonNewGame from './button-new-game-64x16.aseprite';

class ActorButtonNewGame extends FACTORIES.ActorWithPreloadables([PLUGINASEPRITE.FACTORIES.PreloadableAseprite(asepriteButtonNewGame)]) {

    /**
     * Stores the spritesheet actor.
     * @type {Actor}
     * @private
     */
    $spritesheet;

    /**
     * Animates a spritesheet from the given animation tag.
     * @param {('activated' | 'disabled' | 'focus' | 'idle')} $animation The given animation tag.
     * @private
     */
    $animateSpritesheet($animation) {

        this.stage.removeActor(this.$spritesheet);

        this.$spritesheet = this.stage.createActor(

            PLUGINASEPRITE.FACTORIES.ActorWithSpritesheet({

                $aseprite: /** @type {PLUGINASEPRITE.Aseprite<('activated' | 'disabled' | 'focus' | 'idle')>} **/(asepriteButtonNewGame),
                $loop: true,
                $tag: $animation
            })
        )
        .setVisible(this.visible)
        .setZIndex(this.zIndex)
        .translate(this.translation);
    }

    /**
     * Triggers the 'activate' action.
     * @public
     */
    actionActivate() {

        this.$animateSpritesheet('activated');
    }

    /**
     * Triggers the 'disable' action.
     * @public
     */
    actionDisable() {

        this.$animateSpritesheet('disabled');
    }

    /**
     * Triggers the 'focus' action.
     * @public
     */
    actionFocus() {

        this.$animateSpritesheet('focus');
    }

    /**
     * Triggers the 'rest' action.
     * @public
     */
    actionRest() {

        this.$animateSpritesheet('idle');
    }

    /**
     * @type {Actor['onBeforeRemove']}
     */
    onBeforeRemove() {

        this.stage.removeActor(this.$spritesheet);
    }

    /**
     * @type {Actor['onCreate']}
     */
    onCreate() {

        this.actionRest();
    }

    /**
     * @type {Actor['onSetVisible']}
     */
    onSetVisible($visible) {

        this.$spritesheet.setVisible($visible);
    }

    /**
     * @type {Actor['onSetZIndex']}
     */
    onSetZIndex($zIndex) {

        this.$spritesheet.setZIndex($zIndex);
    }

    /**
     * @type {Actor['onTranslate']}
     */
    onTranslate($translation) {

        this.$spritesheet.translate($translation);
    }
}

export default ActorButtonNewGame;
