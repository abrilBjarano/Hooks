import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onAddTODO }) => {

   const { formState, onInputChange, onResetForm } = useForm({
      description: ''
   });

   const { description } = formState;


   const onSubmit = ( event ) => {
      event.preventDefault();

      const newValue = {
         id: new Date().getTime() * 3,
         description: description.trim(),
         done: false
      }
      
      if( newValue.description.length <= 0 ) return;
      onAddTODO( newValue );
      onResetForm();
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
