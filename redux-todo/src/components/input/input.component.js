import React from 'react'
import './input.css';
import { useDispatch } from 'react-redux';
import addTodo from '../../redux/todo/todo.actions';
import { useSnackbar } from 'react-simple-snackbar';
import options from '../snackbar/snackbar';
import { PlusSquare } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';

export default function InputComponent() {
    const [openSnackbar] = useSnackbar(options);
    const dispatch = useDispatch();
    const userObj = useSelector((state) => state.userState.userObj);
    var task = "";
    var setTask = (e) => {
        task = e.target.value;
    }
    return (

        <div className="input">
            {console.log("input", userObj)}
            <div class="form-group">
                { userObj ?
                    <input type="text" class="form-control" onChange={(e) => setTask(e)}></input>
                  :<input type="text" class="form-control" disabled='disabled'></input>
                }
                <PlusSquare variant="primary" size={40} style={{ marginLeft: "10px", color: "#8779c5" }}
                    onClick={async () => {
                        if (task !== "") {
                            var id = Date.now();
                            await dispatch(addTodo({ id: id, task: task }));
                            openSnackbar('Action added successfully.')
                        }
                    }} >Add</PlusSquare>
            </div>
        </div>
    )
}
