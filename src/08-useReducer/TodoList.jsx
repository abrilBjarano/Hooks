import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, onRemoveTODO }) => {


   return (
      <ul className="list-group">

      {
         todos.map( todo => (
            <TodoItem 
               key={ todo.id }
               todo={ todo } 
               onRemoveTODO={ onRemoveTODO }
            />
         ))
      }

      </ul>
   )
}
