import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router';

import Home from './Home';
import Login from './auth/container/Login';
import { authReducer } from './auth/reducer';
import { tokenReducer } from "./token/reducer"
import LoginSuccess from "./LoginSuccess";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        authReducer: authReducer,
        tokenReducer: tokenReducer,
    }), composeEnhancers(applyMiddleware(thunk))
);

const requireAuth = (nextState, replace) => {
    const state = store.getState();
    if (!state.authReducer.loginFlg) {
        replace({ pathname: '/login' })
    }
}

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/loginSuccess" component={LoginSuccess} onEnter={requireAuth}/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
