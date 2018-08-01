import todos from './store';
import {render} from './view';
import {registerEventHandlers} from './events';

import './main.css';

todos.subscribe(() => render(document.body, todos.getState()));

render(document.body, todos.getState());

registerEventHandlers();
