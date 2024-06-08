import { useFetch } from '../hooks';

export const MultipleCustomHooks = () => {

   const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/ditto');

  return (
     <>
      <h1>Pokemon's information</h1>
      <hr />

      <pre>Pokemon's info</pre>
      
      { isLoading && <p> Loading... </p> }

      <h2>{ data?.name }</h2>
    </>
  )
}
