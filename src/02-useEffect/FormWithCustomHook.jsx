import { useEffect, useState } from "react";

export const FormWithCustomHook = () => {

   const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: 'listespero'
   })

   const { username, email, password } = formState;


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
      <h1>Formulario con custom Hook</h1>
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
         placeholder="Email"
         name="email"
         value={ email }
         onChange={ onInputChange }
      />

      <input 
         type="password"
         className="form-control mt-2 mb-2"
         placeholder="Password"
         name="password"
         value={ password }
         onChange={ onInputChange }
      />
    </>
  )
}
// 