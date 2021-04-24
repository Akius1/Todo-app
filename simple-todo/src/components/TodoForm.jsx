import React from 'react';
import useFormState from './Hooks/useInputsState';

import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useFormState();
    return (
        <Paper style={{margin: "1rem", padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
            <TextField margin='normal' value={value} onChange={handleChange} label='Add New Todo' fullWidth/>
            </form>
            
        </Paper>
    )
}

export default TodoForm
