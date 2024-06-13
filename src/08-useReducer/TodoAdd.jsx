import { useState } from "react";

export const TodoAdd = ({ onAddTODO }) => {

   const [inputValue, setInputValue] = useState('');

   const onInputChange = ({ target }) => {
      setInputValue( target.value );
   };

   const onSubmit = ( event ) => {
      event.preventDefault();

      const newValue = {
         id: new Date().getTime() * 3,
         description: inputValue,
         done: false
      }
      
      if( newValue.description.length < 1 ) return;

      onAddTODO( newValue );
   };

   return (
      <form onSubmit={ onSubmit }>
         <input 
            type="text" 
            placeholder="What needs to be done?"
            className="form-control"
            value={ inputValue }
            onChange={ onInputChange }
         />

         <button className="btn btn-outline-primary mt-1">
            Add
         </button>
      </form>
   )
}
