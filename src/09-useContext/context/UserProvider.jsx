import { UserContext } from "./UserContext";

const user = {
   id: 1,
   name: 'Abril',
   email: 'abril@gmail.com'

}

export const UserProvider = ({ children }) => {

   return (
      <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
         { children }
      </UserContext.Provider>
   )
}
