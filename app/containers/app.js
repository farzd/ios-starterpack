import React, { Component } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux/native';

import reducer from '../reducers';
import StarterPack from './starterpack';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, 
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {() => <StarterPack/>}
            </Provider>
        );
    }
}
