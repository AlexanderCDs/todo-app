/** 
 * @author: alexandercddev
 * @description: 
 * @date: 06/Octubre/2021
**/
import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from '../containers/toDoReducer';
 
import ToDoList from './ToDoList';
import ToDoAdd from './ToDoAdd';
 
const init = () => {
    return JSON.parse(localStorage.getItem('toDo')) || [
        {
            id: new Date().getTime(),
            desc: 'Learn React',
            done: false
        }
    ];
}

export const ToDoApp = () => {
    const [ toDo, dispath ] = useReducer(toDoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('toDo', JSON.stringify(toDo));
    }, [toDo]); 

    const handleAdd = ( newToDo) => {
        dispath({
            type: 'add',
            payload: newToDo
        });
    } 

    const handleDelete = (id) => { 
        dispath({
            type: 'delete',
            payload: id
        });
    } 
    
    const handleTogggle = (id) => { 
        dispath( {
            type: 'toggle',
            payload: id
        });
    } 

    return (
        <div 
            className="todo-app animate__animated animate__backInDown"
        >
            <h1>ToDo App ({ toDo.length })</h1>
            <hr></hr>
            <div className="row">
                <div className="col-7" >
                    <ToDoList 
                        toDo={toDo}
                        handleDelete={handleDelete}
                        handleTogggle={handleTogggle}
                    />
                </div>
                <div className="col-5">
                    <h4>Add ToDo</h4>
                    <hr></hr>
                    <ToDoAdd 
                        handleAdd={handleAdd}
                    />
                </div>
            </div>
        </div>
    )
}

export default ToDoApp;
