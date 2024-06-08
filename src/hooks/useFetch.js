import { useEffect } from "react";
import { useState } from "react"

export const useFetch = () => {

   const [state, setState] = useState({
      data: null,
      isLoading: false,
      hasError: false,
      error: null
   })

   const { data, isLoading, hasError } = state;


   useEffect(() => {
      getFetch();
   }, [])


   const getFetch = async() => {
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await  resp.json();
   };


  return {
   data,
   isLoading,
   hasError
  }
}
