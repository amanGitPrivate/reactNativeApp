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
  FlatList,
  AsyncStorage
} from 'react-native';
import {addTODO} from '../actions/todoAction';
import {connect } from 'react-redux';
import Input from '../components/input';
import Button from '../components/button';

export class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      todoItem:''
    }
  }

  setTodoList=(value)=>{
    this.setState({
      todoItem:value
    })
  }

  componentDidMount(){
    AsyncStorage.getItem('todoListItems').then((value) => this.props.addTODO(JSON.parse(value)));
  }

  onButtonPress=()=>{
    let todoList = this.props.todoElements ? this.props.todoElements : [],
        newTodoObject = {key:this.state.todoItem},
        newTodoList = [];

    alert('todoList',)
    todoList.push(newTodoObject);
    newTodoList = JSON.parse(JSON.stringify(todoList));
    AsyncStorage.setItem('todoListItems', JSON.stringify(newTodoList));
    this.props.addTODO(newTodoList);
  }

  render() {
    return (
      <View>
        <Input placeholder = {"Enter Your Todo"} value = {this.state.username} onChange = {this.setTodoList}/>
          <FlatList
            data={this.props.todoElements}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        <Button title = {"Add TODO"} onButtonPress = {this.onButtonPress}/>
      </View>

    );
  }
}

const mapStateToProps = (state) =>{
  const {todoElements} = state.TodoReducer
  return {todoElements};
};

export default connect(mapStateToProps, {
  addTODO
})(Login);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    display:'none',
  },
});
