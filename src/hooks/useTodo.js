import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
   return JSON.parse( localStorage.getItem('todos') );
};

export const useTodo = () => {

   const [todos, dispatch] = useReducer( todoReducer, [], init );


   useEffect(() => {
     localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);
   

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


   const todosCount = () => {
      return todos.length
   };
   
   const pendingTodos = () => {
      return  todos.filter( todo => !todo.done ).length
   };
   
   
   return {
      todos,
      todosCount,
      pendingTodos,
      onAddTODO,
      onRemoveTODO,
      onToggleTODO
   }
}
