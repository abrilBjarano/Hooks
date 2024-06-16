import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";


export const TodoApp = () => {
   
   const { 
      todos, 
      todosCount, 
      pendingTodos,
      onAddTODO, 
      onRemoveTODO, 
      onToggleTODO 
   } = useTodo();


   return (
      <>
         <h1>TodoApp</h1>
         <p> Total: { todosCount() }. Pendientes: { pendingTodos() }</p>
         <hr />

         <div className="row">
            <div className="col-7">

               <TodoList 
                  todos={ todos } 
                  onRemoveTODO={ onRemoveTODO }
                  onToggleTODO={ onToggleTODO }
               />

            </div>

            <div className="col-5">
               <TodoAdd onAddTODO={ onAddTODO }/>
            </div>
         </div>

      </>
   )
}
