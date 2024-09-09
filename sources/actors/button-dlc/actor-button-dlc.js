import {AABB, ActorPreloadable, Sprite, Timeline, TimelineKeyframe, Vector2} from '@theatrejs/theatrejs';

import dataButtonDlc from './button-dlc-64x16.json';
import textureButtonDlc from './button-dlc-64x16.png';

class ActorButtonDlc extends ActorPreloadable([textureButtonDlc]) {

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

        return new Timeline([

            ...($frames.map(($frame, $index) => {

                const {x, y, width, height} = $frame;

                const sprite = new Sprite({

                    $frameSource: new AABB(

                        new Vector2(x / $size.width, y / $size.height),
                        new Vector2((x + width) / $size.width, (y + height) / $size.height)
                    ),
                    $sizeTarget: new Vector2(width, height),
                    $textureColor: textureButtonDlc
                });

                return new TimelineKeyframe({

                    $onEnter: () => {

                        this.setSprite(sprite);
                    },
                    $timecode: $index * (1000 / 10)
                });
            })),
            new TimelineKeyframe({

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

        this.$data = dataButtonDlc;

        this.actionRest();
    }

    /**
     * @type {import('@theatrejs/theatrejs').Actor['onTick']}
     */
    onTick($timetick) {

        this.$timeline.tick($timetick);
    }
}

export default ActorButtonDlc;
