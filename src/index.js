import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import NoteApp from './components/NoteApp';
import App from './App';

App.defaultProps = {
    count: 0
}

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
