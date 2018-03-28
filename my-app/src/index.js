import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/reset.css';
import './css/style.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
