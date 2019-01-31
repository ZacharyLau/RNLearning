
import firebase from 'firebase';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyALX5RcfBUtYqzvn12FW64R4M5vVx8VUik",
      authDomain: "auth-f0be3.firebaseapp.com",
      databaseURL: "https://auth-f0be3.firebaseio.com",
      projectId: "auth-f0be3",
      storageBucket: "auth-f0be3.appspot.com",
      messagingSenderId: "445079503085"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      }else{
        this.setState({loggedIn: false});
      }
    });

  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
      return <Button onPress= {()=>firebase.auth().signOut()}>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size = 'large' />;
    }
  }  


  render(){
    return (
      <View style={{  flexDirection: "column", height: 100 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
