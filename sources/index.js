import {Engine, UTILS} from '@theatrejs/theatrejs';

import StageMenu from 'stages/stage-menu.js';

const engine = new Engine({$container: document.body});
engine.initiate(60);

await engine.preloadStage(StageMenu);
await UTILS.frame();
engine.createStage(StageMenu);
