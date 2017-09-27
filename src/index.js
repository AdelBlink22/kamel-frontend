import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// React-redux Provider, provides store to all components
import { Provider } from 'react-redux'
import store from './store';

// cookie provider, it provide cookies to all components
import { CookiesProvider} from 'react-cookie';

// components routes
import Routes from './routes'

ReactDOM.render(
    <Provider store={store}>
        <CookiesProvider>
            <Routes/>
        </CookiesProvider>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
