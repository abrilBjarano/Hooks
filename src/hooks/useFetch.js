import { useEffect } from "react";
import { useState } from "react"

export const useFetch = ( url ) => {

   const [state, setState] = useState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
   })

   useEffect(() => {
      getFetch();
   }, [ url ]);

   const setLoadingState = () => {
      setState({
         data: null,
         isLoading: true,
         hasError: false,
         error: null
      })
   };


   const getFetch = async() => {

      setLoadingState();

      const resp = await fetch( url );

      // sleep
      await new Promise( resolve => setTimeout( resolve, 100 ) );

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

      // Manejo del Cache

   };


  return {
      data: state.data,
      isLoading: state.isLoading,
      hasError: state.hasError
  }
}
