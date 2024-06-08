import { useFetch } from '../hooks';

export const MultipleCustomHooks = () => {

   const { data, hasError, isLoading } = useFetch();

  return (
     <>
      <h1>Pokemon's information</h1>
      <hr />

      <pre>Pokemon's info</pre>
      
      { isLoading && <p> Loading... </p> }

      <pre>{ JSON.stringify( data, null, 2 ) }</pre>
    </>
  )
}
