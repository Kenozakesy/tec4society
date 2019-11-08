import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'

// import App from './components/app/App';
import Counter from "./components/counter/counter";

ReactDOM.render(<Counter />, document.getElementById('root'));
serviceWorker.unregister();
