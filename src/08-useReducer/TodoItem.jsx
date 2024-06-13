export const TodoItem = ({ id, description }) => {


   return (
      <li 
         className="list-group-item d-flex justify-content-between"
         key={ id }
      >
         <span className="align-self-center">
            { description }
         </span>

         <button className="btn btn-outline-danger"> Delete </button>
      </li>
   )
}
