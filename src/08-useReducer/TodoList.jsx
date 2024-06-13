import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos }) => {


   return (
      <ul className="list-group">

      {
         todos.map( todo => (
            <TodoItem id={ todo.id } description={ todo.description } />
         ))
      }

      </ul>
   )
}
