import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

   const { user, setUser } = useContext( UserContext );


   return (
      <>
         <h1>LoginPage { user?.name } </h1>
         <hr />

         <pre>{ JSON.stringify(user, null, 3) }</pre>

         <button 
            className="btn btn-primary"
            onClick={ () => setUser({ id: 123, name: 'Liss', email: 'liss@gmail.com' }) }
         >
            Set user
         </button>
      </>
   )
}
