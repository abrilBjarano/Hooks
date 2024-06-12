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
      description: 'Ir al super con mi bb',
      done: true
   },
]

export const TodoApp = () => {


   const [todos, dispatch] = useReducer( todoReducer, initialState );

   return (
      <>
         <h1>TodoApp</h1>
         <hr />

         <div className="row">
            <div className="col-7">
               <ul>
                  <li>Item 1</li>
                  <li>Item 1</li>
                  <li>Item 1</li>
               </ul>
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
