import { useEffect } from "react";
import { useState } from "react"

export const useFetch = () => {

   const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
   })

   useEffect(() => {
      getFetch();
   }, [])


   const getFetch = async() => {

      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');

      // sleep
      await new Promise( resolve => setTimeout( resolve, 1500 ) );

      if( !resp.ok ) {
         setState({
            data: null,
            isLoading: false,
            hasError: true,
            error: {
               code: resp.status,
               message: resp.statusText,
            }
         });
         return;
      }

      const data = await  resp.json();

      setState({
         data: data,
         isLoading: false,
         hasError: false,
         error: null
      })

      console.log({ data });
   };


  return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError
  }
}
