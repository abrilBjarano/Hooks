import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onAddTODO }) => {

   const { formState, onInputChange, onResetForm } = useForm({
      description: ''
   });


   const onSubmit = ( event ) => {
      event.preventDefault();

      const newValue = {
         id: new Date().getTime() * 3,
         description: formState,
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
            name="description"
            value={ formState.description }
            onChange={ onInputChange }
         />

         <button className="btn btn-outline-primary mt-1">
            Add
         </button>
      </form>
   )
}
