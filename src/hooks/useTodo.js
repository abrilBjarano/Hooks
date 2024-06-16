import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
   return JSON.parse( localStorage.getItem('todos') );
};

export const useTodo = ( initialState = [] ) => {

   const [todos, dispatch] = useReducer( todoReducer, initialState, init );


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
   
   
   return {
      todos,
      onAddTODO,
      onRemoveTODO,
      onToggleTODO
   }
}
