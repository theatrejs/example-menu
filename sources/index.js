import {Engine, ExtensionGamepad} from '@theatrejs/theatrejs';

import StageMenu from 'stages/stage-menu.js';

ExtensionGamepad.activate();

const engine = new Engine({$container: document.body});
engine.initiate(60);

await engine.preloadStage(StageMenu);
engine.createStage(StageMenu);
