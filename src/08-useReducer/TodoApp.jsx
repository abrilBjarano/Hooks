import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
   // {
   //    id: new Date().getTime(),
   //    description: 'Ir al super con mi bb',
   //    done: true
   // }
]

const init = () => {
   return JSON.parse( localStorage.getItem('todos') ) || [];
};

export const TodoApp = () => {

   const [todos, dispatch] = useReducer( todoReducer, initialState, init );

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos])
   

   const onAddTODO = ( newValue ) => {
      const action = {
         type: 'Add Todo',
         payload: newValue
      }

      dispatch( action );
   };

   todoReducer( todos, onAddTODO );

   return (
      <>
         <h1>TodoApp: 10, <small>pending: 2</small> </h1>
         <hr />

         <div className="row">
            <div className="col-7">

               <TodoList todos={ todos } />

            </div>

            <div className="col-5">
               <h4 className="mb-2">Add TODO</h4>

               <TodoAdd onAddTODO={ onAddTODO }/>
               
            </div>
         </div>

      </>
   )
}
