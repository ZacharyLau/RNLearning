import  React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDjKzz77VbioKwowtUW4TExZvEHE6edO7U",
            authDomain: "manager-48a11.firebaseapp.com",
            databaseURL: "https://manager-48a11.firebaseio.com",
            projectId: "manager-48a11",
            storageBucket: "manager-48a11.appspot.com",
            messagingSenderId: "560914066863"
          };
        firebase.initializeApp(config);
    }

    render(){

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />  
            </Provider>
        );
    }
}

export default App;