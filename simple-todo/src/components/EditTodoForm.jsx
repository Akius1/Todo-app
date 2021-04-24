import React from 'react';
import useFormState from './Hooks/useInputsState';
import TextField from "@material-ui/core/TextField";

function EditTodoForm({id, editTodo, task, toggleEditForm}) {
    const [value, handleChange, reset] = useFormState(`${task}`);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}>
        <TextField
            margin="normal"
            value={value}
            onChange={handleChange}
            fullWidth
            />
            </form>
            
    )
}

export default EditTodoForm;
