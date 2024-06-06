import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

   const [formState, setFormState] = useState({
      username: 'abril',
      email: 'abril@google.com'
   })

   const { username, email } = formState;


   const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
         ...formState,
         [name]: value
      }, );
   };


   useEffect(() => {
    //  console.log('useEffect called')
   }, []);

   useEffect(() => {
    //  console.log('formState changed')
   }, [ formState ]);

   useEffect(() => {
    //  console.log('formState email changed')
   }, [ email ]);
   
   


  return (
    <>
      <h1>Formulario simple</h1>
      <hr />


      <input 
         type="text"
         className="form-control"
         placeholder="Username"
         name="username"
         value={ username }
         onChange={ onInputChange }
      />

      <input 
         type="email"
         className="form-control mt-2 mb-2"
         placeholder="eMail"
         name="email"
         value={ email }
         onChange={ onInputChange }
      />

      { username === 'abril2' && <Message /> }
    </>
  )
}
// 