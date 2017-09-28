import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// React-redux Provider, provides store to all components
import { Provider } from 'react-redux'
import store from './store';

// import style css
import './utils/css/styles.css'
// import './utils/css/font-awesome.min.css'


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
