import {addTask} from '../../firebase/firebase';

var initialState = {
tasks:null
}

var todoReducer= (state = initialState, { type, payload }) => {
    switch (type) {
        case `SET_TODO`:
            return { 
                ...state,
                tasks:payload
            }
    case `ADD_TODO`:
        addTask(payload.id,payload.task,payload.uid); ///Save to firebase
        if(state.tasks!=null){
            //If there is  state then copy previous then append new todo
        return { 
            ...state,
            tasks:[...state.tasks,{id:payload.id,task:payload.task,isCompleted:false}]
        }}
        //If there is no tasks then simply add the todo object
        else{
            return{
                ...state,
                tasks:[{id:payload.id,task:payload.task,isCompleted:false}]
            }
        }
    case `DELETE_TODO`:
        return {  
            ...state,       
            tasks:state.tasks.filter(task=>task.id!==payload)     
        }
        case `CHANGE_STATE_TODO`:
            const newArray = [...state.tasks];
             newArray.forEach(task=>{if(task.id==payload){
                 task.isCompleted =!task.isCompleted
                }
                })
            return {  
                ...state,
                tasks:newArray  
            }      

    default:
        return state
    }
}

export default todoReducer;