import React from 'react'

export const TodoItem = ({id,text,complited, complitedTodo,removeTodo}) => {
    return (
        <li key={id}>
            <input
              type="checkbox"
              checked={complited}
              onChange={() => complitedTodo(id )}
            />
            <span>
              {text}
            </span>
            <span className="delete" onClick={() => removeTodo(id)}>
              &times;
            </span>
          </li>
    )
}
