import { useFetch } from '../hooks';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1);

   const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
     <>
      <h1>Pokemon's information</h1>
      <hr />

      { isLoading && <LoadingMessage/> }

      <h2>{ data?.name }</h2>

      <button 
        className='btn btn-primary mt-2'
        onClick={ () => counter > 1 ? decrement() : null }
        // onClick={ () => decrement() }
      > Anterior
      </button>

      <button 
        className='btn btn-primary mt-2'
        onClick={ () => increment() }
      > Siguiente
      </button>

    </>
  )
}
