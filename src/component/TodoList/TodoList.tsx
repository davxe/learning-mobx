import React, { useState } from 'react'
import { TodoStoreImpl } from '../TodoStore'
import {observer} from 'mobx-react'
interface IProps{
    todoStore:TodoStoreImpl
}
export const TodoList:React.FC<IProps>=observer(({todoStore})=>{
    const [value,setValue]=useState<string>('')
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    const handleClick=()=>{
        if(value){
            todoStore.addTodo(value);
            setValue('');
        }
    }
    const status=todoStore.status;
    return(
        <div>
            <div>TodoList Page</div>
            <div>
                <input type='text' value={value} onChange={handleChange}/>
            </div>
            <div>
                <button onClick={handleClick}>Submit</button>
            </div>
            <div>
                <h1>Completed :- {status.completed}</h1>
                <h1>Remaining :- {status.remaining}</h1>
            </div>
            <div>
                <ul>
                    {
                        todoStore.todos.map((todo,index)=>{
                            return(
                                <li key={index} onClick={()=>{
                                    todoStore.toggleTodo(todo.id)
                                }}>[{todo.completed?<span style={{color:'green'}}>✓</span>:' '}] {todo.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
})