import {FACTORIES, Stage, Vector2, Vector3} from '@theatrejs/theatrejs';

import ActorMenu from 'actors/actor-menu/actor-menu.js';

class StageMenu extends FACTORIES.StageWithPreloadables([ActorMenu]) {

    /**
     * @type {Stage['onCreate']}
     */
    onCreate() {

        this.engine.setColor(new Vector3(27 / 255, 36 / 255, 71 / 255));
        this.engine.setResolution(new Vector2(480, 360));

        this.createActor(ActorMenu);
    }
}

export default StageMenu;
