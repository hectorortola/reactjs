import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <DarkModeProvider>
                <App />
            </DarkModeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

