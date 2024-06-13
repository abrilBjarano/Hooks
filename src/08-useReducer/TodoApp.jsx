import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [
   {
      id: new Date().getTime(),
      description: 'Ir al super con mi bb',
      done: true
   },
   {
      id: new Date().getTime() * 3,
      description: 'Ir a caminar en la noche con mi bb',
      done: false
   },
]

export const TodoApp = () => {


   const [todos, dispatch] = useReducer( todoReducer, initialState );

   return (
      <>
         <h1>TodoApp: 10, <small>pending: 2</small> </h1>
         <hr />

         <div className="row">
            <div className="col-7">

               {/* TodoList */}
               <ul className="list-group">

                  {
                     todos.map( todo => (
                        // TodoItem
                        <li 
                           className="list-group-item d-flex justify-content-between"
                           key={ todo.id }
                        >
                           <span className="align-self-center">Item 1</span>
                           <button className="btn btn-outline-danger"> Delete </button>
                        </li>
                     ))
                  }

               </ul>
               {/* Fin TodoList */}
            </div>

            <div className="col-5">
               <h4>Agregar TODO</h4>
               <hr />

               <form>
                  <input 
                     type="text" 
                     placeholder="What needs to be done?"
                     className="form-control"
                  />

                  <button className="btn btn-outline-primary mt-1">
                     Add
                  </button>
               </form>
            </div>
         </div>

      </>
   )
}
