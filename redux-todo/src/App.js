import './App.css';
import React from 'react';
import InputComponent from './components/input/input.component';
import Tasks from './components/tasks/tasks.component';
import FilterComponent from './components/filter/filter.component';
import SnackbarProvider from 'react-simple-snackbar'
import Login from './components/Login/login.component';
import firebase from 'firebase/app';
import login from './redux/user/user.actions';
import {setTodo} from './redux/todo/todo.actions'
import { connect } from 'react-redux';
import {fetchTodo} from './firebase/firebase'

class App extends React.Component{
  componentDidMount() {
    firebase.auth().onAuthStateChanged(async userObj=>{
      if(userObj){
        await this.props.login(userObj);
        var todo = await fetchTodo(userObj.uid);
         this.props.setTodo(todo);
      }
    })
  }
  render(){  
  return (
    <SnackbarProvider>
      <div className="App">
        <div className="header">
          <div className="text"><h1>TODO</h1></div>
          <div className="login">
          <Login></Login>
          </div>
        </div>
        <div className="controls">
          <div className="FilterComponent">
            <FilterComponent></FilterComponent>
          </div>
          <div className="InputComponent">
            <InputComponent></InputComponent>
          </div>
        </div>
        <div className="TasksComponent">
          <Tasks></Tasks>
        </div>
      </div>
    </SnackbarProvider>
  );
}
}

var mapDispatchToProps=(dispatch)=>{
  return{
    login:userObj=>dispatch(login(userObj)),
    setTodo:todo=>dispatch(setTodo(todo)),
  }
}

export default connect(null,mapDispatchToProps)(App);
