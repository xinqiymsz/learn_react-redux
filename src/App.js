import React from 'react';
import './App.css';
import store from './store'
import Provider from './react-redux/components/Provider'
import Counter from './Counter'

  export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
              <Counter />
            </Provider>
        )
    }
}