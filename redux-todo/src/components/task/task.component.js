import React from 'react';
import './task.css';
import { Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, changeState } from '../../redux/todo/todo.actions';
import {  Check2Square, BoxArrowDown } from 'react-bootstrap-icons';
import { useSnackbar } from 'react-simple-snackbar';
import itemAdded from '../snackbar/snackbar';
import { itemDeleted } from '../snackbar/snackbar';
import {deleteTask,markAsCompleted,setAsActive} from '../../firebase/firebase'
export default function TaskComponent(props) {
    const dispatch = useDispatch();
    const [openSnackbar] = useSnackbar(itemAdded);
    const [openSnackbar1] = useSnackbar(itemDeleted);
    const filterState = useSelector((state) => state.filter.filter);
    const tasks = useSelector((state) => state.todo.tasks);
    const uid = useSelector((state) => state.userState.userObj.uid);
    return (
        <Toast className="toast"
        style={{ boxShadow: "0 0.25rem 0.785rem #cce5ff"}}
            onClose={() => {
                dispatch(deleteTodo(props.id));
                 deleteTask(props.id,uid);
                openSnackbar1('Action Deleted Successfully.', 2000)
            }}>
                
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Action</strong>
                <small>Delete</small>
            </Toast.Header>

            <Toast.Body className="wrapper">{props.todo}
                {filterState === "active" ?
                    <div class="tick">
                        <Check2Square
                            color="green"
                            size={20}
                            onClick={() => {
                                var [task] = tasks.filter(task=> (task.id===props.id));
                                markAsCompleted(props.id,task,uid)
                                dispatch(changeState(props.id));
                                openSnackbar('Action Marked as Completed!!', 2000)
                            }

                            }
                        />
                    </div>
                    : <BoxArrowDown
                        data-toggle="tooltip"
                        class="tick"
                        title="Recover"
                        color="green"
                        size={20}
                        onClick={() => {
                            var [task] = tasks.filter(task=> (task.id===props.id));
                            setAsActive(props.id,task,uid);
                            dispatch(changeState(props.id));
                            openSnackbar('Action changed to active.', 2000);
                        }}

                    />

                }
            </Toast.Body>
        </Toast>

    )
}
