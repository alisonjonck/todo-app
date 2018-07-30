import '../css/main.css';

import {todos} from './state';
import {render} from './view';
import {registerEventHandlers} from './events';

todos.subscribe(newState => render(document.body, newState));

render(document.body, todos.getState());

registerEventHandlers();