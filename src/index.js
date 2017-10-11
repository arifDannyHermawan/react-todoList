import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Judul from './Judul';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Judul />, document.getElementById('judul'));


registerServiceWorker();
