/** 
 * @author: alexandercddev
 * @description: 
 * @date: 06/Octubre/2021
**/
import React from 'react'

export const ToDoListItem = ( { index, id, desc, done, handleTogggle, handleDelete } ) => {
    return (
        <li className="list-group-item" >
            <p 
                className={done && 'complete'}
                onClick={() => handleTogggle(id) }
            >
                {index + 1}.- {desc}
            </p>
            <button
                onClick={() => handleDelete(id) }
                className="btn btn-danger btn-noBlock"
            >
                Borrar
            </button> 
        </li>
    )
}

export default ToDoListItem;