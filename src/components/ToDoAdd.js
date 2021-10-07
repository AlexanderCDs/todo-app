/** 
 * @author: alexandercddev
 * @description: 
 * @date: 06/Octubre/2021
**/
import React from 'react';
import { useForm } from '../hooks/useForm';

export const ToDoAdd = ({ handleAdd }) => {
    const [ { description }, handleInputChange, reset ] = useForm ({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if( description.trim().length <= 1 ) {
            return;
        }  
        handleAdd({
            id: new Date().getTime(),
            desc: description,
            done: false
        });
        reset();
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input 
                type="text"
                name="description"
                className="form-control"
                placeholder="Lerning..."
                autoComplete="off"
                value={description}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-success mt-2 btn-block"
            >
                Agregar
            </button>
        </form>
    )
}

export default ToDoAdd;
