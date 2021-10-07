/** 
 * @author: alexandercddev
 * @description: 
 * @date: 06/Octubre/2021
**/
import React from 'react'
import ToDoListItem from './ToDoListItem'

export const ToDoList = ( { toDo, handleDelete, handleTogggle}) => {
    return (
        <ul className="list-group list-group-flush">
            {toDo.map( (item, index) => (
                <ToDoListItem 
                    key={item.id}
                    index={index}
                    {...item}
                    handleDelete={handleDelete}
                    handleTogggle={handleTogggle}
                />
            ))}
        </ul>
        
    )
}

export default ToDoList;