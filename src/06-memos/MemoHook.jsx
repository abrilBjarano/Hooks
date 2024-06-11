import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


const heavyStuff = ( iterationNumber ) => {
   for( let i = 0; i < iterationNumber; i++ ){
      console.log('Ahi vamos...');
   }

   return `${ iterationNumber } iteraciones realizadas`;
};


export const MemoHook = () => {

   const { counter, increment } = useCounter(100);
   const [show, setShow] = useState(true);
    

   const memorizedValue = useMemo(() => heavyStuff( counter ), [counter]);


  return (
    <>
      <h1> Counter { counter }</h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button 
         className="btn btn-primary"
         onClick={ () => increment()  }
      > + 1
      </button>

      <button
         className="btn btn-outline-primary"
         onClick={ () => setShow( !show ) }
      > Show/Hide { JSON.stringify( show ) }
      </button>
    </>
  )
}
