import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react'
import { Provider } from 'react-redux'
import configure from './redux/configureStore/configStore'
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const store = configure()

const MyRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent('navigation', () => MyRedux);
