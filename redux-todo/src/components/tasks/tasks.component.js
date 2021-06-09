import Task from '../task/task.component'
import './tasks.css';
import {connect} from 'react-redux';
import React, { Component } from 'react'

 class TasksComponent extends Component {
    render() {
        return (
            <div className="container">

            {/* ////Display login if there is no user */}
           {!this.props.user?
               <h1>Please Login to Continue</h1> 
               :null
           }

                {/* ////Display active actions */}
            {
            (this.props.filter==='active' && this.props.tasks!=null && this.props.user) ?
            this.props.tasks.map((task) => {
                 if(!task.isCompleted){ 
                     return <Task id={task.id}todo={task.task} isCompleted={task.isCompleted}></Task>
                    }
                    else{
                        return null;
                    }
                }
             
                )
           : null   
            }

                 {/* ////Display completed actions */}
           {
            (this.props.filter==='complete' && this.props.tasks!=null && this.props.user) ?
            this.props.tasks.map((task) => {
                 if(task.isCompleted){
                 
                     return <Task id={task.id}todo={task.task} isCompleted={task.isCompleted} ></Task>
                    }
                    else{
                        return null;
                    }})
           : null
            }

        
           
            </div>
        )
    }
}
var mapStateToProps = (state)=>{
    return{
        tasks:state.todo.tasks,
        filter:state.filter.filter,
        user:state.userState.userObj
    }
}
export default connect(mapStateToProps,null)(TasksComponent);
