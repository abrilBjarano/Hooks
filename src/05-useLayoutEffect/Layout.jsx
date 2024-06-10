import { useFetch } from '../hooks';
import { PokemonCard } from '../03-examples/PokemonCard';
import { useCounter } from '../hooks/useCounter';
import { LoadingMessage } from '../03-examples/LoadingMessage';

export const Layout = () => {

  const { counter, increment, decrement } = useCounter(1);

   const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

  return (
     <>
      <h1>Pokemon's information</h1>
      <hr />

      { 
        isLoading 
          ? <LoadingMessage /> 
          : <PokemonCard 
            id={ data.id } 
            name={ data.name }  
            sprites={[ 
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny
            ]}
            abilities={
              data.abilities[0].ability.name
            }
            /> 
      }

      <button 
        className='btn btn-primary mt-2'
        onClick={ () => counter > 1 ? decrement() : null }
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
