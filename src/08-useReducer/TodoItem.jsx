export const TodoItem = ({ todo, onRemoveTODO }) => {


   return (
      <li 
         className="list-group-item d-flex justify-content-between"
         key={ todo.id }
      >
         <span className="align-self-center">
            { todo.description }
         </span>

         <button 
            className="btn btn-outline-danger"
            onClick={ () => onRemoveTODO( todo.id ) }
         > 
            Delete 
         </button>
      </li>
   )
}
