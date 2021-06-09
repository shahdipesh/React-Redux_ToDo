

var addTodo =(task)=>{

     return {
        type: 'ADD_TODO',
        payload:task
    }
}

export const deleteTodo =(id)=>{
    return {
       type: 'DELETE_TODO',
       payload:id
   }
}
export const changeState =(id)=>{
    return {
       type: 'CHANGE_STATE_TODO',
       payload:id
   }
}
export const setTodo =(todoList)=>{
    return {
       type: 'SET_TODO',
       payload:todoList
   }
}

export default addTodo;
