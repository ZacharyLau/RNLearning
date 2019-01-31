/** @format */

//import {AppRegistry} from 'react-native';
//import App from './App';
//import {name as appName} from './app.json';
//
//AppRegistry.registerComponent(appName, () => App);


import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


//create a component
const App = () => (
    //<header></header>;
    <View style={{flex: 1}}>
        <Header headerText={'Albums'}/>
        <AlbumList />
    </View>
    
);



//render it to the device
AppRegistry.registerComponent('albums', ()=>App);


