import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

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

   const handleTodo = ( todo ) => {
      console.log({ todo });
   };

   return (
      <>
         <h1>TodoApp: 10, <small>pending: 2</small> </h1>
         <hr />

         <div className="row">
            <div className="col-7">

               <TodoList todos={ todos } />

            </div>

            <div className="col-5">
               <h4 className="mb-2">Add TODO</h4>

               <TodoAdd />
               
            </div>
         </div>

      </>
   )
}
