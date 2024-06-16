import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, onRemoveTODO, onToggleTODO }) => {


   return (
      <ul className="list-group">

      {
         todos.map( todo => (
            <TodoItem 
               key={ todo.id }
               todo={ todo } 
               onRemoveTODO={ onRemoveTODO }
               onToggleTODO={ onToggleTODO }
            />
         ))
      }

      </ul>
   )
}
