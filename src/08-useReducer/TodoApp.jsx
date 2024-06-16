import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

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

   const onRemoveTODO = ( id ) => {
      const action = {
         type : 'Remove Todo',
         payload: id
      }

      dispatch( action );
   };

   const onToggleTODO = ( id ) => {
      const action = {
         type: 'Toggle Todo',
         payload: id
      }
      
      dispatch( action );
   };


   return (
      <>
         <h1>TodoApp</h1>
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
