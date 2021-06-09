import React from 'react'
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {displayActive} from '../../redux/filter/filter.actions';
import displayCompleted from '../../redux/filter/filter.actions';
export default function FilterComponent() {
    const dispatch = useDispatch();
    return (
        <div>
    <DropdownButton variant={"info"} title="Filter">
        <Dropdown.Item onClick={()=>{dispatch(displayActive())}}>Active</Dropdown.Item>
        <Dropdown.Item onClick={()=>{dispatch(displayCompleted())}}>Completed</Dropdown.Item>
    </DropdownButton>
    </div>
    )
}

