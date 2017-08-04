/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  AppState
} from 'react-native';
import Input from '../components/input';
import Button from '../components/button';

export default class PushNotification extends Component {

  constructor(props){
    super(props);
    this.state = {
      seconds:5,
      password:''
    }
  }

  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange=(appState)=>{

    if(appState === "background"){
      console.log('app is in background', this.state.seconds);
    }
  }

  render() {
    return (
      <View>
        <Text>
        Hello
        </Text>
        <Picker
          selectedValue = {this.state.seconds}
          onValueChange={(seconds)=>this.setState({seconds})}
        >
          <Picker.Item label = "5" value = {5}/>
          <Picker.Item label = "10" value = {10}/>
          <Picker.Item label = "15" value = {15}/>
        </Picker>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    display:'none',
  },
});
